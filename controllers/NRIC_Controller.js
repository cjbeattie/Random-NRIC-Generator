const express = require('express');
const { StatusCodes } = require("http-status-codes");
const NRIC = require('../models/NRIC_Model');


const router = express.Router();

const createNric = async (req, res) => {
    let duplicateError = false;
    let created = false;
    let randomNRIC;

    let temp = 0;

    do {
        console.log("In the loop")
        // Generate random NRIC
        randomNRIC = { NRIC: `S111111${temp}H` }

        created = await addNricToMongoDB(randomNRIC);

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

async function addNricToMongoDB(randomNric) {

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

router.get(
    "/",
    createNric
);

module.exports = router;