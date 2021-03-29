const express = require('express');
const { StatusCodes } = require("http-status-codes");
const NRIC = require('../models/NRIC_Model');
const { generateRandomNric } = require('./generator')

const router = express.Router();

const createNricNoDuplicates = async (req, res) => {
    let duplicateError = false;
    let created = false;
    let randomNRIC;

    try {
        do {
            randomNRIC = generateRandomNric();

            const nricDoc = { NRIC: randomNRIC };

            created = await addNricToMongoDB(nricDoc);

            if (created) {
                break;
            } else {
                duplicateError = true;
            }

        } while (duplicateError = true);

        res.status(StatusCodes.CREATED).send(randomNRIC);

    } catch (e) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e);
    }


};

async function addNricToMongoDB(randomNric) {

    let result = false;
    try {
        result = await NRIC.create(randomNric);
    } catch (e) {
        if (e.code === 11000) {
            result = false;
        } else {
            throw e;
        }
    }
    return result;
};


router.get(
    "/",
    createNricNoDuplicates
);

module.exports = router;