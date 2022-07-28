//initializes prompt feature into program
const ps=require('prompt-sync');
const prompt=ps();

//mainmenu function that will show an error message at the bottom if an invalid input is given.
function mainMenu(error){
        console.log('|======================================|');
        console.log('|               MusoPlan               |');
        console.log('|======================================|');
        console.log('|    Select your choice from below     |');
        console.log('|       ----------------------         |');
        console.log('|                                      |');
        console.log('| 1. Register a Musician               |');
        console.log('| 2. Create a troupe                   |');
        console.log('| 3. Add Musician to troupe            |');
        console.log('| 4. Summary description of troupe     |');
        console.log('| 5. Detailed description of troupe    |');
        console.log('| 6. Troupe cost calulation            |');
        console.log('| 7. Export troupe names to file       |');
        console.log('| 8. Export troupe details to file     |');
        console.log('| 9. Exit MusoPlan                     |');
        console.log('|                                      |');
        console.log('|                                      |');
        console.log('|======================================|');
        console.log('                                        ');
        
        //if statment used to display error message if invalid input was used on the last loop.
        //this technique has been used in order to display the error message beneath the menu.
        //the alternate would be to have the error message, then the program loops and posts the menu,
        //leaving the error message above the menu and possibly out of sight.
        if (error == true){
            console.log("Error: Incorrect input. Please select either [1,2,3,4,5,6,7,8 or 9]");
        } 

        return prompt('Enter your choice [from 1 - 9]: ');
}
//exports the functions from this page
module.exports={mainMenu};