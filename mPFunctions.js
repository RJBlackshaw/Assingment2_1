const ps=require('prompt-sync');
const prompt=ps();

let {Guitarist} = require('./Guitarist.js');
let {Bassist} = require('./Bassist.js');
let {Percussionist} = require('./Percussionist.js');
let {Flautist} = require('./Flautist.js');
let {Troupe} = require('./Troupe.js');


//The array that will store all the musicians.
var MusicianList = new Array()
var TroupeList = new Array()

//mainmenu function that will show an error message at the bottom if an invalid input is given.
//error parameter is a boolean.
function mainMenu(error){
        console.log('\n|======================================|');
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
        console.log('|======================================|\n');
        
        if (error == true){
            console.log("Error: Invalid input. Please select either [1,2,3,4,5,6,7,8 or 9]\n");
        } 

        return prompt('Enter your choice [from 1 - 9] :');
}

//function that adds a new musician into the Musician list array.
function regMusician(){
    console.log('\n--------------------------------------------');
    console.log("\nYou've chosen option 1 - Register a Musician")
    console.log('\n|======================================|');
    console.log('|  Select their instrument from below  |');
    console.log('|       ----------------------         |');
    console.log('| 1. Guitarist                         |');
    console.log('| 2. Flautist                          |');
    console.log('| 3. Bassist                           |');
    console.log('| 4. Percussionist                     |');
    console.log('|======================================|\n');

    //user chooses number 1-4 instead of the user typing 'Percussionist' for example.
    instrument = prompt('Enter your choice [from 1 - 4] :').trim();

    //while loop for invalid input detection
    while(true){
        const validOptions = ['1', '2', '3', '4'];

        if (!validOptions.includes(instrument)){
            console.log(`\nError: Invalid input. You've chosen ${instrument}`)
            instrument = prompt('Enter your choice [from 1 - 4] :').trim();
        } else {
            break;
        }
    }

    //Switch that creates child class based on number chosen previously..
        switch(instrument){
            case '1':
                var musi = new Guitarist();
                musi.instrument='Guitarist';
                break;

            case '2':
                var musi = new Flautist();
                musi.instrument='Flautist';
                break;

            case '3':
                var musi = new Bassist();
                musi.instrument='Bassist';
                break;

            case '4':   
                var musi = new Percussionist();
                musi.instrument='Percussionist';
                break;
        }
    
    //varibles set in reference to the while loops below
    let musiName="";
    let musiExp=-1;
    let musiRate=-1;
    
    //loop that prompts user and sets choices into the instance.
    //if statments ensure values are correctly set before moving to the next prompt.
    while(true){
        if(musiName.length >=3 && musiName.length <= 30){
                if(musiExp >=0){
                        if(musiRate >=50){
                            break;
                        } else {
                            musiRate=prompt('Enter the Musicians hourly rate (50 or greater): ').trim();
                            musi.hourlyRate=musiRate;                          
                        }
                } else {
                    musiExp=prompt('Enter the Musicians Experience (0 or greater): ').trim();
                    musi.experience=musiExp;
                }
        } else{
            musiName=prompt('Enter the Musician Name (3 - 30 characters): ').trim();
            musi.musicianName=musiName;
        }
    }    

    //pushes and stores the instance into the MusicianList allowing the musi to be overwritten
    //with a new musician
    MusicianList.push(musi)
    console.log(`\n${musi.instrument} registered successfully.`);
    return
}

//function that creates an instance of Troupe and pushes it to Troupelist Array
function createTroupe(){
    console.log('\n--------------------------------------------');
    console.log("\nYou've chosen option 2 - Create a troupe\n")

    let troupeName="";
    let troupeMinDuration=0;
    let troupeMaxDuration=0;
    let troupeGenre=0;

    const troupe = new Troupe();

    //while loop used to prompt user for instance variables and set them. if statements used to test for correct inputs.
    while(true){
        if(troupeName.length >=3 && troupeName.length <= 30){
                if(troupeMinDuration >=0.5 && troupeMinDuration <=3){
                        if(troupeMaxDuration >=0.5 && troupeMaxDuration <=3 && troupeMaxDuration >= troupeMinDuration){
                                if(troupeGenre == '1' || troupeGenre == "2" || troupeGenre == "3"){
                                    break;
                                } else {
                                    console.log('\n|======================================|');
                                    console.log('|    Select their Genre from below     |');
                                    console.log('|       ----------------------         |');
                                    console.log('| 1. Rock                              |');
                                    console.log('| 2. Jazz                              |');
                                    console.log('| 3. Pop                               |');
                                    console.log('|======================================|\n');

                                    troupeGenre=prompt('Enter your choice [from 1 - 3] :').trim();
                                    
                                    //sets troupe genre parameter based on user input
                                    switch(troupeGenre){
                                            case '1': 
                                            troupe.genre='Rock';
                                                break;
                                            case '2': 
                                            troupe.genre='Jazz';
                                                break;   
                                            case '3': 
                                            troupe.genre='Pop';
                                                break;
                                            default: 
                                                console.log(`\nError: Invalid input, You've entered ${troupeGenre}. Please enter either 1, 2 or 3.`);
                                                break;
                                        }
                                    
                                }
                        } else {
                            troupeMaxDuration=prompt('Enter the Troupes Maximum Duration (between 0.5 and 3) :').trim();
                            troupe.maxDuration=troupeMaxDuration;
                        }
                } else {
                    troupeMinDuration=prompt('Enter the Troupes Minimum Duration (between 0.5 and 3) :').trim();
                    troupe.minDuration=troupeMinDuration;
                }
        } else{
            troupeName=prompt('Enter the Troupe Name (3 - 30 characters) :').trim();
            troupe.troupeName=troupeName;
        }
    }    

    TroupeList.push(troupe)
    console.log(`\n${troupe.troupeName} registered successfully.`);
    return
}

module.exports={mainMenu, regMusician, createTroupe};