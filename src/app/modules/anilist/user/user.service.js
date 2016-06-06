(function() {
    'use strict';

    angular
        .module('app.anilist.user')
        .service('UserService', UserService);

    UserService.$inject = ['$http', '$q', '$resource', '$cookies', 'AuthService'];
    function UserService($http, $q, $resource, $cookies, authService) {

        var url = 'https://anilist.co/api/user';

        var headers = {
            'Authorization': getAuthorizationHeader,
            'Content-Type': 'application/json'
        };

        var _principal;

        var _resource = $resource(url, {}, {
            currentUser: { method:'GET', headers: headers }
        });

        var _listeners = [];

        var service = {
            getPrincipal: getPrincipal,
            getAnimeList: getAnimeList,
            addListener: addListener,
            // constants
            url: url
            // variables
        };

        activate();

        return service;

        //////////////////////////////////

        function activate() {
            authService.addListener(userAuthenticationCb);
        }

        function getAuthorizationHeader() {
            return 'Bearer ' + $cookies.get('accessToken');
        }

        function getPrincipal(){
            if (_principal) {
                return $q.when(_principal);
            }
            var promise = _resource.currentUser().$promise;
            promise.then(function (response) {
                _principal = response;
                for (var i = 0; i < _listeners.length; i++) {
                    _listeners[i](response);
                }
            });
            return promise;
        }

        function getAnimeList(){
            var promise = $http.get('https://anilist.co/api/user/' + _principal.id + '/animelist?access_token=' + $cookies.get('accessToken'));
            promise.then(function (response) {
                console.log(response.data.lists);
            });
            return promise;
        }

        // callbacks

        function addListener(cb) {
            _listeners.push(cb);
        }

        function userAuthenticationCb(){
            var promise = _resource.currentUser().$promise;
            promise.then(function (response) {
                _principal = response;
                for (var i = 0; i < _listeners.length; i++) {
                    _listeners[i](response);
                }
            });
        }
    }
})();
