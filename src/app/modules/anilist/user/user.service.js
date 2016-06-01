(function() {
    'use strict';

    angular
        .module('app.anilist.user')
        .service('UserService', UserService);

    UserService.$inject = ['$http', '$q', '$resource', '$cookies'];
    function UserService($http, $q, $resource, $cookies){


        var url = 'https://anilist.co/api/user';

        var headers = {
            'Authorization': 'Bearer ' + $cookies.get('accessToken'),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true'
        };

        var _resource = $resource(url, {}, {
            currentUser: { method:'GET', headers: headers },
            animeList: { method:'GET', url: 'https://anilist.co/api/user/:id/animelist/', headers: headers }
        });

        var service = {
            getCurrentUser: getCurrentUser,
            getAnimeList: getAnimeList,
            // constants
            url: url,
            // variables
            user: {id: 3225}
        };

        init();

        return service;

        //////////////////////////////////

        function init() {
            _resource.currentUser().$promise
            .then(function (response) {
                service.user.id = response.id;
                service.user.name = response.display_name;
            });
        }

        function getCurrentUser(){
            return _resource.currentUser().$promise;
        }

        function getAnimeList(){
            console.log(service.user.id);
            return _resource.animeList({id: service.user.id}).$promise
            .then(function (response) {
                console.log(response);
            });
        }
      }
})();
