let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/AirOn',{ useMongoClient: true });

module.exports = {mongoose};