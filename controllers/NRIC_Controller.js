const express = require('express');
const { StatusCodes } = require("http-status-codes");
const NRIC = require('../models/NRIC_Model');


const router = express.Router();

const createNricNoDuplicates = async (req, res) => {
    let duplicateError = false;
    let created = false;
    let randomNRIC;

    do {
        console.log("In the loop")

        randomNRIC = generateRandomNric();

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

const generateRandomNric = () => {
    const firstLettersBank = "STFG";
    const middleNumbersBank = "0123456789";
    const lastLettersBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let firstLetter = firstLettersBank[Math.floor(Math.random() * firstLettersBank.length)];
    let middleNumbers = "";
    let lastLetter = lastLettersBank[Math.floor(Math.random() * lastLettersBank.length)];

    for (let i = 0; i < 7; i++) {
        middleNumbers += middleNumbersBank[Math.floor(Math.random() * middleNumbersBank.length)];
    }

    return { NRIC: `${firstLetter}${middleNumbers}${lastLetter}` };
}

router.get(
    "/",
    createNricNoDuplicates
);

module.exports = router;