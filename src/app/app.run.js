(function() {
    'use strict';

    angular
        .module('app')
        .run(initFn);

    //initFn.$inject = ['$rootScope', '$locale', 'debugging', 'arenaI18nService', 'i18nService', 'msgService', 'arenaMaskService'];
    initFn.$inject = ['$rootScope', '$locale'];

    //function initFn($rootScope, $locale, debugging, arenaI18nService, i18nService, msgService, arenaMaskService){      
    /* @ngInject */
    function initFn($rootScope, $locale){      
      
      //Angular format = es-ar 
      //Java format = es_AR
      var language = $locale.id.substring(0,2);
      var country = $locale.id.substring(3,6).toUpperCase();
      $rootScope.ngLocaleID = $locale.id;
      $rootScope.javaLocaleID = language + '_' + country;
      //$rootScope.debugging = debugging;
      //$rootScope.msk = arenaMaskService;

      //i18nService.setCurrentLang(language);

      //Setea el dictionary según el locale
      //arenaI18nService.setDictionary({});

      //Configura el handler de la mensajería
      //msgService.setMsgBoxHandler(angular.noop);

    }
})();