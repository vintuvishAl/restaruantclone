var mongoose = require('mongoose');


var User = require('./User');

const RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    phonenumber: {type: Number, required: true},
    timings: {type: String, required: true},
    averagecost: {type: String, required:true},
    cuisines: {type: String, required: true},
    address: { type: String, required:true},
    moreinfo: { type:String, default: ''},
    user: {type:String , default: ''}
});



module.exports = mongoose.model('Restaurant', RestaurantSchema);
