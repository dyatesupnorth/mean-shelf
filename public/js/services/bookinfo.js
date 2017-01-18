/**
 * Created by master-d on 01/01/14.
 */
angular.module('mean.bookinfo', [])
    .service('Bookinfo', function ($rootScope) {


        console.log('bookinfo service');
        var bookInfo = [];


        return{

            setBookInfo: function (obj) {
                bookInfo = obj;
                console.log(bookInfo.title + 'here');
                $rootScope.$broadcast("infoChange");


            },
            getBookInfo: function () {
                console.log('activated');

                console.log("getting book" + bookInfo);

                return bookInfo;

            }
        };
        /*
         console.log('bookinfo service');
         var bookData = [];

         setBook = function (bookObj) {
         bookData.push(bookObj);
         console.log(bookData);
         };
         getBook = function () {
         console.log(bookData);
         return bookData;
         };*/
    })
