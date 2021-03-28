# Random-NRIC-Generator

## Project Link
This application is deployed on Heroku and available here:
[Random NRIC Generator](https://random-nric-generator.herokuapp.com/)

## Technologies used
MERN stack (MongoDB, Express, React, Node)

Ant Design for UI


## Approach
This is a simple full-stack web application. When the "Generate NRIC" button is clicked, a request is sent to the server, which in turn generates a random NRIC and attempts to add it to a MongoDB database. If a duplicate exists, it will attempt to generate and add another NRIC until successful. Once successful, the NRIC is then returned to React and displayed in the textbox.
Features a loading indicator on the Generate NRIC button when request is in progress.

## Local Installation Instructions
(requires installation of [Node.js/npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [MongoDB](https://docs.mongodb.com/manual/administration/install-community/))
- Download source code
- In your terminal application, `npm i` in root folder and in client folder.
- Create a .env file in the root folder and add the following: `MONGODB_URI=mongodb://localhost:27017/nric`
- To start the server, go to the root folder and run `nodemon server.js`
- To start the client, go to the client folder and run `npm start`
- The application will run on http://localhost:3000/
