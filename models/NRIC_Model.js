const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NRIC_Schema = Schema({
    NRIC: { type: String, required: true, unique: true },
});

const NRIC = mongoose.model("NRIC", NRIC_Schema);

module.exports = NRIC;