const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NRIC_Schema = Schema({
    NRIC: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

// const NRIC_Schema = Schema({
//     NRIC: String
// });

const NRIC = mongoose.model("NRIC", NRIC_Schema);

module.exports = NRIC;