(function() {
    'use strict';

    angular
        .module('app')
        .config(configure);

    configure.$inject = ['$provide', '$logProvider', '$urlRouterProvider', '$stateProvider'];

    var debugging = true;
    var homepage = "/home";

    /* @ngInject */
    function configure($provide, $logProvider, $urlRouterProvider, $stateProvider){      
       $provide.decorator('$log', ['$delegate', function($delegate) {

          var logger = {
            line: function(){
              this.debug("--------------------------------------------------------------------------------------");
            }
          };

          angular.extend(logger, $delegate);
          return logger;
       }]);


       $logProvider.debugEnabled(debugging);
       
       if(!debugging){
         //UI.Router config
         $urlRouterProvider.otherwise( homepage );              
       }
    }

})();