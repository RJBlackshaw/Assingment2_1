const ps=require('prompt-sync');
const prompt=ps();

let musoFunctions = require('./mPFunctions.js');

let error = false;

//while loop used to always show menu
while(true){
    //calls the menu and passes invalid input status to the function.
    choice = parseInt(musoFunctions.mainMenu(error));
    error = false;

    //switch that takes the user choice and executes the correct functions based on their decision
    switch(choice) {
        case 1:
            musoFunctions.regMusician();
            continue;

        case 2:
            musoFunctions.createTroupe();
            continue;

        case 3:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 3 - Add Musician to troupe")

            continue;

        case 4:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 4 - Summary description of troupe")

            continue;

        case 5:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 5 - Detailed description of troupe")

            continue; 

        case 6:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 6 - Troupe cost calulation")

            continue;

        case 7:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 7 - Export troupe names to file")

            continue;

        case 8:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 8 - Export troupe details to file")

            continue;

         case 9:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 9 - Exit MusoPlan")

            break;

        //invalid inputs =/= 1-9 default to here and return the main menu function with the error message.    
        default:
            error=true
            continue;
      }
    break;
}