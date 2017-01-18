/**
 * Created by master-d on 30/12/13.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Book = mongoose.model('Book'),
    _ = require('lodash');


/**
 * Find book entry by id
 */
exports.book = function(req, res, next, id) {
    Book.load(id, function(err, book) {
        if (err) return next(err);
        if (!book) return next(new Error('Failed to load book ' + id));
        req.book = book;
        next();
    });
};

/**
 * Add a book
 */
exports.create = function(req, res) {
    var book = new Book(req.body);
    book.user = req.user;


    book.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                book: book
            });
        } else {
            res.jsonp(book);
        }
    });
};

/**
 * Update a book entry
 */
exports.update = function(req, res) {
    var book = req.book;

    book = _.extend(book, req.body);

    book.save(function(err) {
        res.jsonp(book);
    });
};

/**
 * Delete a book entry
 */
exports.destroy = function(req, res) {
    var book = req.book;

    book.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(book);
        }
    });
};

/**
 * Show a book entry
 */
exports.show = function(req, res) {
    res.jsonp(req.book);
};

/**
 * List of books
 */
exports.all = function(req, res) {
    Book.find().sort('-created').populate('user', 'name username').exec(function(err, books) {


        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(books);
            console.log('here');
        }
    });
};