var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    userid: String,
    name: String,
    detail: String,
    latitude: String,
    longitude: String,
    startDate: String,
    endDate: String,
    startTime: String,
    endTime: String,
    endMillisecond: String
});

// mongodb設定
module.exports = mongoose.model('event', eventSchema);