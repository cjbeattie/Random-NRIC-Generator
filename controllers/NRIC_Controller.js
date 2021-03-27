const express = require('express');
const { body, validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const NRIC = require('../models/NRIC_Model');


const router = express.Router();


// CREATE
router.post(
    "/",
    body("NRIC")
        .trim().isLength({ min: 9, max: 9 }).withMessage('NRIC length must be 9 characters')
        .matches(/[STFG]\d{7}[A-Z]/).withMessage('Contains invalid characters')
        .custom(value => {
            return User.findUserByEmail(value).then(user => {
                if (user) {
                    return Promise.reject('NRIC already exists');
                }
            });
        }),
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors.
            // Errors are returned in an array using `errors.array()`.
            const locals = { nric: req.body, errors: errors.array() };
            res.status(StatusCodes.BAD_REQUEST).json(locals);
        } else {
            // Data from form is valid.
            const formData = req.body; // extract the data from POST
            console.log("form data: ", formData)

            NRIC.create(formData, (error, formData) => {
                if (error) {
                    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error }); // { error } is the same as error: error!!!
                }
                res.status(StatusCodes.CREATED).send(formData);
            });
        }
    }
);


// DELETE
router.delete("/:id", (req, res) => {
    NRIC.findByIdAndRemove(req.params.id, (error, nric) => {
        if (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error }); // { error } is the same as error: error!!!
        }
        res.status(StatusCodes.OK).send(nric);
    });
});

module.exports = router;