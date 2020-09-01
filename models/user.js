var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    userid: String,
    password: String
});

// mongodb設定
module.exports = mongoose.model('user', userSchema);