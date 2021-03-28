# Random-NRIC-Generator

## Project Link
This application is deployed on Heroku and available here:
[Random NRIC Generator](https://random-nric-generator.herokuapp.com/)

## Technologies used
MERN stack (MongoDB, Express, React, Node)

Ant Design


## Approach
This is a simple full-stack web application. When the "Generate NRIC" button is clicked, a request is sent to the server, which in turn generates a random NRIC and attempts to add it to a MongoDB database. If a duplicate exists, it will attempt another NRIC until successful. Once successful, the NRIC is then returned to React and displayed in the textbox.

## Installation instructions
`npm i` in root folder and in client folder.
