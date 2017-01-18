angular.module('mean.books').controller('BooksController', ['$scope', '$rootScope', '$routeParams', '$location', 'Global', 'Books', 'Booklist', 'Bookinfo', function ($scope, $rootScope, $routeParams, $location, Global, Books, Booklist, Bookinfo) {
    $scope.global = Global;
    console.log($scope.global);

    var curr_user = Global.user._id;



    $scope.$on("infoChange", function () {

        $scope.bookInfo = Bookinfo.getBookInfo();

        $scope.title = $scope.bookInfo.title;
        $scope.author = $scope.bookInfo.authors;
        $scope.published = $scope.bookInfo.publisher;
        $scope.datePublished = $scope.bookInfo.publishedDate;
        $scope.description = $scope.bookInfo.description;
        $scope.categories = $scope.bookInfo.categories;
        $scope.imageUrl = $scope.bookInfo.imageLinks.thumbnail;


    });
    /*$scope.$watch( function () { return Bookinfo.getBookInfo(); }, function ( book ) {
     // handle it here. e.g.:
     $scope.bookInfo = book;
     console.log('wartching....');
     });*/


    $scope.create = function () {
        var book = new Books({
            title: this.title,
            author: this.author,
            imageUrl: this.imageUrl,
            published: this.published,
            datePublished: this.datePublished,
            categories: this.categories,
            description: this.description

        });
        book.$save(function (response) {
            $location.path();
            $scope.addSuccess = "Book added";
        });

        this.title = "";
        this.author = "";
        this.imageUrl = "";
        this.published = "";
        this.datePublished = "";
        this.categories = "";
        this.description = "";
    };

    $scope.remove = function (book) {
        if (book) {
            book.$remove();
            for (var i in $scope.books) {
                if ($scope.books[i] == book) {
                    $scope.books.splice(i, 1);
                }
            }
        }
        else {
            $scope.book.$remove();
            $location.path('books');
        }
    };

    $scope.update = function () {
        var book = $scope.book;
        if (!book.updated) {
            book.updated = [];
        }
        book.updated.push(new Date().getTime());

        book.$update(function () {
            $location.path('books/' + book._id);
        });
    };

    $scope.find = function () {
        Books.query(function (books) {
            $scope.books = books;
        });
    };

    $scope.findOne = function () {
        Books.get({
            bookId: $routeParams.bookId
        }, function (book) {
            $scope.book = book;
        });
    };


}]);