(function() {
    'use strict';
    angular
        .module('app.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'UserService'];

    /* @ngInject */
    function HomeCtrl($scope, userService) {
        var vm = this;

        vm.scrCfg = {
          title: 'Dashboard',
          subtitle: ''
        };

        vm.watching = {
            data: [],
            show: false
        };
        vm.planTo = {
            data: [],
            show: false
        };

        vm.getWatchingList = getWatchingList;
        vm.show = show;
        vm.hide = hide;
        vm.showOrHide = showOrHide;

        activate();
        ////////////////
        function activate() {
            $scope.rootCtrl.scrCfg = vm.scrCfg;
            userService.getPrincipal().then(getWatchingList);
            vm.comments = 23;
        }

        function show(element) {
            element.show = true;
        }

        function hide(element) {
            element.show = false;
        }

        function showOrHide(element) {
            element.show = !element.show;
        }

        function getWatchingList() {
            userService.getAnimeList()
            .then(function (response) {
                vm.watching.data = response.data.lists.watching;
                vm.planTo.data = response.data.lists.plan_to_watch;
            });
        }
    }
})();
