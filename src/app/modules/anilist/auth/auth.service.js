(function() {
    'use strict';

    angular
        .module('app.anilist.auth')
        .service('AuthService', AuthService);

    AuthService.$inject = ['$http', '$q', '$resource'];
    function AuthService($http, $q, $resource){


        var url = 'https://anilist.co/api/auth';
        //var params = '/:codEmp/:tipPer/:codGrp/:codUsr/:codMenuIt';
        var params = '';

        var _resource = $resource(url + params,{},{
            authenticate: {method:'POST', url: url + '/access_token'}
 //            validateUsrGrp: {method:'GET', url: url + '/validateUsrGrp'},
//            save: {method: 'POST', url: url + '/save', transformRequest: workWithResource.buildSaveParams}
        });

        var service = {
            authenticateByPin: authenticateByPin,
            getPinUrl: getPinUrl,
            // constants
            url: url,
            clientId: 'demo-24our',
            clientSecret: 'itaZTHJXdV99DAhVlomY1baCyM'
            // variables
        };

        return service;

        //////////////////////////////////

        function getReadOnlyAuthentication(){
          var params = {
            grant_type: 'client_credentials',
            client_id: service.clientId,
            client_secret: service.clientSecret
          };

            _resource.authenticate(params).$promise
            .then(function (response) {
              service.readOnlyAuthentication = response.access_token;
            });

            return service.readOnlyAuthentication;
        }

        function authenticateByPin(pin){
          var params = {
            grant_type: 'authorization_pin',
            client_id: service.clientId,
            client_secret: service.clientSecret,
            code: pin
          };

          return _resource.authenticate(params).$promise;
        }

        function refreshAuthentication(refreshToken){
          var params = {
            grant_type: 'refresh_token',
            client_id: service.clientId,
            client_secret: service.clientSecret,
            refresh_token: refreshToken
          };

          return _resource.authenticate(params).$promise;
        }

        function getPinUrl(){
          return service.url + '/authorize' + '?grant_type=authorization_pin&client_id=' + service.clientId + '&response_type=pin';
        }
      }
})();
