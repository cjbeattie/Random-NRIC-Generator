const express = require('express')
const mongoose = require("mongoose");

const NRIC_Controller = require('./controllers/NRIC_Controller');

const path = require('path'); // setup the mongoose connection (app.js) for Heroku

require("dotenv").config();

const app = express()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// app.use() => using express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public")); // setup the static / public folder

app.use("/api/nric", NRIC_Controller);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build',
            'index.html'));
    });
}

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});