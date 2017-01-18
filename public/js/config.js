//Setting up route
angular.module('mean').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/books', {
                templateUrl: 'views/books/list.html'
            }).
            when('/books/create', {
                templateUrl: 'views/books/create.html'
            }).
            when('/books/:bookId/edit', {
                templateUrl: 'views/books/edit.html'
            }).
            when('/books/:bookId', {
                templateUrl: 'views/books/view.html'
            }).
            when('/', {
                templateUrl: 'views/index.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);