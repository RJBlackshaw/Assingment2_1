//initializes prompt feature into program
const ps=require('prompt-sync');
const prompt=ps();

//import the functions from the mPFunctions.js file
let musoFunctions = require('./mPFunctions.js');

//sets error value to false so when menu is called it doesn't display the inbuilt error message
let error = false;

//while loop used to always show menu
while(true){
    //calls the menu and passes invalid input status to the function.
    //also sets the function result as choice variable to be used in the switch statement
    choice = parseInt(musoFunctions.mainMenu(error));

    //sets the error message back to false after the menu is called.
    error = false;

    switch(choice) {
        case 1:
            console.log("You've chosen option 1 - Register a Musician")

            continue;

        case 2:
            console.log("You've chosen option 2 - Create a troupe")

            continue;

        case 3:
            console.log("You've chosen option 3 - Add Musician to troupe")

            continue;

        case 4:
            console.log("You've chosen option 4 - Summary description of troupe")

            continue;

        case 5:
            console.log("You've chosen option 5 - Detailed description of troupe")

            continue; 

        case 6:
            console.log("You've chosen option 6 - Troupe cost calulation")

            continue;

        case 7:
            console.log("You've chosen option 7 - Export troupe names to file")

            continue;

        case 8:
            console.log("You've chosen option 8 - You've chosen option 8")

            continue;

         case 9:
            console.log("You've chosen option 9 - Exit MusoPlan")

            break;

        //invalid inputs =/= 1-9 default to here and return the main menu function with the error message.    
        default:
            error=true
            continue;
      }
    break;
}