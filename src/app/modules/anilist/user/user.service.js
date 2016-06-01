(function() {
    'use strict';

    angular
        .module('app.anilist.user')
        .service('UserService', UserService);

    UserService.$inject = ['$http', '$q', '$resource', '$cookies'];
    function UserService($http, $q, $resource, $cookies){


        var url = 'https://anilist.co/api/user';

        var _resource = $resource(url, {}, {
            currentUser: { method:'GET', headers: headers },
            animeList: { method:'GET', url: 'https://anilist.co/api/user/:id/animelist/', headers: getHeaders() }
        });

        var service = {
            getCurrentUser: getCurrentUser,
            getAnimeList: getAnimeList,
            // constants
            url: url,
            // variables
            user: {}
        };

        init();

        return service;

        //////////////////////////////////

        function init() {

        }

        function getCurrentUser(){
            if (service.user) {
              return service.user;
            } else {
              _resource.currentUser().$promise
              .then(function (response) {
                service.user = response;

                return service.user;
              }, function (reason) {
                  console.log(reason);
              });
            }
        }

        function getAnimeList(id){
            console.log(id);
            return _resource.animeList({id: id}).$promise
            .then(function (response) {
                console.log(response);
            });
        }

        function getHeaders() {
          return {
              'Authorization': 'Bearer ' + $cookies.get('accessToken'),
              'Content-Type': 'application/json',
              'Access-Control-Allow-Credentials': 'true'
          };
        }
      }
})();
