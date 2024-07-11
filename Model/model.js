const mongoose = require("mongoose");
const { Schema } = mongoose;
const objectId = mongoose.Schema.Types.ObjectId;

const studentSchema = new Schema({
    name: {type: String, required: true}, // String is shorthand for {type: String}
    course: {type: String, required: true},
    _id: {type: objectId, auto: true},
    address: {type: String, required: true}
});

const student = mongoose.model('student', studentSchema);
module.exports = student