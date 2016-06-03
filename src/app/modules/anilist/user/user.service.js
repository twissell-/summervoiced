(function() {
    'use strict';

    angular
        .module('app.anilist.user')
        .service('UserService', UserService);

    UserService.$inject = ['$http', '$q', '$resource', '$cookies'];
    function UserService($http, $q, $resource, $cookies) {


        var url = 'https://anilist.co/api/user';

        var headers = {
            'Authorization': getAuthorizationHeader,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true'
        };

        var _resource = $resource(url, {}, {
            currentUser: { method:'GET', headers: headers },
            animeList: { method:'GET', url: 'https://anilist.co/api/user/:id/animelist/', headers: headers }
        });

        var _listeners = [];

        var service = {
            getCurrentUser: getCurrentUser,
            getAnimeList: getAnimeList,
            addListener: addListener,
            // constants
            url: url
            // variables
        };

        init();

        return service;

        //////////////////////////////////

        function init() {

        }

        function getAuthorizationHeader() {
            return 'Bearer ' + $cookies.get('accessToken');
        }

        function getAnimeList(id){
            return _resource.animeList({id: id}).$promise
            .then(function (response) {
                console.log(response);
            });
        }

        // callbacks
        
        function addListener(cb) {
            _listeners.push(cb);
        }

        function userAuthenticateCb(){
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
      }
})();
