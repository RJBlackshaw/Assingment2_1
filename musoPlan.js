const ps=require('prompt-sync');
const prompt=ps();
const fs=require('fs');

let musoFunctions = require('./mPFunctions.js');
let {Troupe} = require('./Troupe.js');

let error = false;

//while loop used to always show menu
while(true){
    //calls the menu and passes invalid input status to the function.
    choice = parseInt(musoFunctions.mainMenu(error));
    error = false;

    //switch that takes the user choice and executes the correct functions based on their decision
    switch(choice) {
        case 11:
            musoFunctions.Hardcode();
            continue;

        case 1:
            musoFunctions.regMusician();
            continue;

        case 2:
            musoFunctions.createTroupe();
            continue;

        case 3:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 3 - Add Musician to troupe.")
            list2Error = musoFunctions.listTroupes();
            list1Error = musoFunctions.listMusicians();
            musoFunctions.listError(list1Error, list2Error);
            musoFunctions.addMusicianToTroupe();
            continue;

        case 4:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 4 - Summary description of troupe.")
            list2Error = musoFunctions.listTroupes();
            list1Error = false
            musoFunctions.listError(list1Error, list2Error);
            if (list2Error == true){
                continue;
            }
            Trou = musoFunctions.setTroupe();
            console.log(Trou.troupeDescription());
            console.log(`|===========================================|\n`);    
            prompt(`Press enter to continue`);
            continue;

        case 5:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 5 - Detailed description of troupe.")
            list2Error = musoFunctions.listTroupes();
            list1Error = false
            musoFunctions.listError(list1Error, list2Error);
            if (list2Error == true){
                continue;
            }
            Trou = musoFunctions.setTroupe();
            console.log(Trou.troupeDescription());
            console.log('                 ~The Musicians~          \n')
            console.log(Trou.musicianDescription());
            prompt(`Press enter to continue`);
            continue;


        case 6:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 6 - Troupe cost calulation.")
            list2Error = musoFunctions.listTroupes();
            list1Error = false
            musoFunctions.listError(list1Error, list2Error);
            if (list2Error == true){
                continue;
            }
            trou = musoFunctions.setTroupe();
            console.log('')
            let time = prompt('How many hours do you want the Troupe to play for: ')
            musoFunctions.troupeTimeCost(trou, time)
            continue;

        case 7:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 7 - Import troupe names from file.\n")
            musoFunctions.createImportTroupe()
            prompt(`\nPress enter to continue`);
            continue;

        case 8:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 8 - Export troupe details to file.")
            musoFunctions.exportTroupe()
            continue;

         case 9:
            console.log('--------------------------------------------');
            console.log("\nYou've chosen option 9 - Exit MusoPlan.")
            break;

        //invalid inputs =/= 1-9 default to here and return the main menu function with the error message.    
        default:
            error=true
            continue;
      }
    break;
}