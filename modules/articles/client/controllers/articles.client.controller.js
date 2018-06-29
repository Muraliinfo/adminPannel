(function() {
    'use strict';

    angular
        .module('articles')
        .controller('ArticlesController', ArticlesController);

    ArticlesController.$inject = ['$scope', 'articleResolve', 'Authentication', '$http'];

    function ArticlesController($scope, article, Authentication, $http) {
        var vm = this;

        vm.article = article;
        vm.authentication = Authentication;


    }
}());