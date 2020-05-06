# AstroPlanner

## Stack
* React.js
* Redux
* Axios
* Materia-UI
* Styled-components
* Jest
* Enzyme

## Language
The app is originally designed for Portuguese speakers. 
Nonetheless, it's fairly intuitive and can be translated to English using Google Chrome.
Notice, however, tha "Wednesday" and "Thursday" will be mistakenly translated as "Fourth" and "Fifth"

## Running the project 
* Clone this repository in your machine
* Open your terminal inside the cloned repo and run `npm install` and `npm run start`

## API
This project is originally a demo integrated with Labenu's API: 
  *https://us-central1-missao-newton.cloudfunctions.net/generic/planner-mateus*.
Therefore, in order to run the tests regarding Axios, 
you need to comment the functions **create** and **fetchTasks** at src/actions/index.js
and uncomment the respective functions with the same names that are currently commented.
Notice that the "Clear" button will have no functionality in this version of the app.
