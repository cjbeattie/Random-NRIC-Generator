const express = require('express');
// const { body, validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const NRIC = require('../models/NRIC_Model');


const router = express.Router();

const myFunction = async (req, res) => {
    let duplicateError = false;
    let created = false;
    let randomNRIC;

    let temp = 0;

    do {
        console.log("In the loop")
        // Generate random NRIC
        randomNRIC = { NRIC: `S111111${temp}H` }

        created = await createNric(randomNRIC);

        if (created) {
            break;
        } else {
            duplicateError = true;
            temp++;
        }

    } while (duplicateError = true);

    if (created) {
        res.status(StatusCodes.CREATED).send(randomNRIC);
    }

}

// CREATE
router.get(
    "/",
    myFunction
);



async function createNric(randomNric) {

    let result = false;
    try {
        result = await NRIC.create(randomNric);
    } catch (e) {
        console.log(e);
        if (e.code === 11000) {
            result = false;
        } else {
            throw e;
        }
    }
    return result;
}

module.exports = router;