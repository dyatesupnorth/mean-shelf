angular.module('mean.books').factory("Books", ['$resource', function($resource) {
    return $resource('books/:bookId', {
        bookId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });

}]);

