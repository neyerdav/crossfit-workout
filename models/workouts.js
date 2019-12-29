const mongoose = require('mongoose');


var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    name: { type: String },
    updated: { type: Date },
    publish: { type: Date },
    description: { type: String, required: true },
    result: { type: String }

});

module.exports = mongoose.model('workoutModel', workoutSchema);

