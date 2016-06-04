(function() {
    'use strict';

    angular
        .module('app.anilist.auth')
        .service('AuthService', AuthService);

    AuthService.$inject = ['$http', '$q', '$resource'];
    function AuthService($http, $q, $resource){

        var _url = 'https://anilist.co/api/auth';

        var _resource = $resource(_url,{},{
            authenticate: {method:'POST', url: _url + '/access_token'}
            //            validateUsrGrp: {method:'GET', url: url + '/validateUsrGrp'},
            //            save: {method: 'POST', url: url + '/save', transformRequest: workWithResource.buildSaveParams}
        });

        var _listeners = [];

        // public

        var service = {
            // functions
            authenticateByPin: authenticateByPin,
            refreshAuthentication:refreshAuthentication,
            getPinUrl: getPinUrl,
            addListener: addListener,
            // constants
            url: _url,
            clientId: 'demo-24our',
            clientSecret: 'itaZTHJXdV99DAhVlomY1baCyM',
            // variables
            user : {}
        };

        return service;

        //////////////////////////////////

        function getPinUrl(){
            return service.url + '/authorize' + '?grant_type=authorization_pin&client_id=' + service.clientId + '&response_type=pin';
        }

        function authenticateByPin(pin){
          var params = {
            grant_type: 'authorization_pin',
            client_id: service.clientId,
            client_secret: service.clientSecret,
            code: pin
          };

          var promise = _resource.authenticate(params).$promise;
          promise.then(function (response) {
              for (var i = 0; i < _listeners.length; i++) {
                  _listeners[i](response);
              }
          }, function (error) {
              console.log(error);
          });
          return promise;
        }

        function refreshAuthentication(refreshToken){
          var params = {
            grant_type: 'refresh_token',
            client_id: service.clientId,
            client_secret: service.clientSecret,
            refresh_token: refreshToken
          };

          var promise = _resource.authenticate(params).$promise;
          promise.then(function (response) {
              for (var i = 0; i < _listeners.length; i++) {
                _listeners[i](response);
              }
          }, function (error) {
              console.log(error);
          });
          return promise;
        }

      // callbacks

      function addListener(cb) {
          _listeners.push(cb);
      }
  }
})();
