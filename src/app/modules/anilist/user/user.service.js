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
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'accept, content-type',
            'Access-Control-Allow-Origin': 'http://localhost',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'dataType': "json"
        };

        var _resource = $resource(url, {}, {
            currentUser: { method:'GET', headers: headers },
            animeList: {
                method:'GET',
                headers: headers,
                url: function () {
                    var url = 'https://anilist.co/api/user/' + _principal.id + '/animelist/';
                    console.log(url);
                    return url;
                }
            }
        });

        var _listeners = [];
        var _principal;

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
            service.getPrincipal()
            .then(function (principal) {
                console.log(principal.id);
                $http({
                    url: 'https://anilist.co/api/user/' + principal.id + '/animelist/',
                    method: "GET",
                    headers: headers
                 })
                 .then(function (response) {
                    console.log(response);
                });
            });
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
