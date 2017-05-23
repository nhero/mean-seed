var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueVaildator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, unique: true, ref: 'Message'},
  messages: [{type: Schema.Types.ObjectId}]
});

schema.plugin(mongooseUniqueVaildator);

module.exports = mongoose.model('User', schema);
