angular.module('mean.booklist').controller('BooklistController', ['$scope', 'Booklist', 'Bookinfo', function ($scope, Booklist, Bookinfo) {


    $scope.searchTerm = "jQuery";
    $scope.doSearch = function () {
        Booklist.get({ q: $scope.searchTerm }, function (response) {
            $scope.bookResults = response.items;
            $scope.orderProp = 'volumeInfo.title';

        });


    }

    $scope.getSelected = function (bookData) {

        Bookinfo.setBookInfo(bookData);




    }


}]);

