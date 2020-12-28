//Set up mongoose connection
const mongoose = require('mongoose');
const mongoConnectionString = 'mongodb://localhost:27017/authentication';
mongoose.connect(mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;