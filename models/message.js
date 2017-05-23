var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheme = new Schema({
  content: {type: string, required: true, ref: 'User'},
  user: {type: Schema.Types.ObjectId}
});

module.exports = mongoose.model('Message', schema);
