angular.module('app.ui')
    .directive('svAlert', function () {
    return {
        restrict: 'E',
        scope: {
         message: '='
        },
        templateUrl: 'ui/svalert/svalert.tpl.html',
        link: function () {
          console.log('lalala');
        }
    };
});
