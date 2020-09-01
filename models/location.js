var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
    eventid: String,
    userid: String,
    name: String,
    latitude: String,
    longitude: String,
    startTime: String,
    historyDistance: String
});

// mongodb設定
module.exports = mongoose.model('location', locationSchema);