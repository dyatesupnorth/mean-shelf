angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Books",
        "link": "books"
    } , {
        "title": "add a new book",
        "link": "books/create"
    }];
    
    $scope.isCollapsed = false;
}]);