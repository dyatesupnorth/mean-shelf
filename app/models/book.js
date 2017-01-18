/**
 * Created by master-d on 30/12/13.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Book Schema
 */
var BookSchema = new Schema({
    added: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    author: {
        type: String,
        default: '',
        trim: true
    },
    imageUrl: {
        type: String,
        default: '',
        trim: true
    },
    published: {
        type: String,
        default: '',
        trim: true
    },
    datePublished: {
        type: String,
        default: '',
        trim: true
    },
    categories: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
BookSchema.path('title').validate(function (title) {
    return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
BookSchema.statics.load = function (id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Book', BookSchema);
