(function() {
    'use strict';

    angular
        .module('articles.admin')
        .controller('ArticlesAdminListController', ArticlesAdminListController);

    ArticlesAdminListController.$inject = ['ArticlesService', '$http'];

    function ArticlesAdminListController(ArticlesService, $http) {
        var vm = this;

        vm.articles = ArticlesService.query();
    }
}());