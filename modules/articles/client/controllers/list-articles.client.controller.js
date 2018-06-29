(function() {
    'use strict';

    angular
        .module('articles')
        .controller('ArticlesListController', ArticlesListController);

    ArticlesListController.$inject = ['ArticlesService', '$http', '$scope'];

    function ArticlesListController(ArticlesService, $http, $scope) {
        var vm = this;

        vm.articles = ArticlesService.query();
        $scope.checkClick = function() {
            console.log('in')
            $http.post('api/auth/newWay').success(function(res) {
                $scope.checkVal = res;
                console.log(res);
            });
        };
    }
}());