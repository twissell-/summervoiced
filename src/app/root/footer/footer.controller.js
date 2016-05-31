(function() {
    'use strict';
    angular
        .module('app.root')
        .controller('FooterCtrl', FooterCtrl);
    
    FooterCtrl.$inject = [];
    
    /* @ngInject */
    function FooterCtrl() {
        var footerCtrl = this;
        footerCtrl.title = 'FooterCtrl';
        activate();
        ////////////////
        function activate() {
        }
    }
})();