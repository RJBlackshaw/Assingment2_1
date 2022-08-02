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
        console.log('| 1. Register a musician               |');
        console.log('| 2. Create a troupe                   |');
        console.log('| 3. Add musician to troupe            |');
        console.log('| 4. Summary description of troupe     |');
        console.log('| 5. Detailed description of troupe    |');
        console.log('| 6. Troupe cost calulation            |');
        console.log('| 7. Import troupe names from file     |');
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
    console.log("\nYou've chosen option 1 - Register a Musician.")
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
                            musiRate=parseInt(prompt('Enter the Musicians hourly rate (50 or greater): ').trim());
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
    console.log("\nYou've chosen option 2 - Create a troupe.\n")

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

//Loop that lists the names of all instances in troupe List.
//returns a boolean depending on success.
function listTroupes (){
    if(TroupeList.length == 0){
        let list2Error = true
        return list2Error
    } else {
        console.log(`\nThe available Troupes in the system are:`);
        let list2Error = false
        for(let i=0; i < TroupeList.length;i++){
            console.log(`- ${TroupeList[i].troupeName}`);
        }
        console.log('')
        return list2Error = false
    }
}

//Loop that lists the names of all instances in Musician List.
//returns a boolean depending on success.
function listMusicians (){
    if(MusicianList.length == 0){
        let list1Error = true;
        return list1Error = true
    } else {
        console.log(`\nThe available musicians in the system are:`);
        let list1Error = false
        for(let i=0; i < MusicianList.length;i++){
            console.log(`- ${MusicianList[i].musicianName}`);
        }
        console.log('')
        return list1Error = false
    }
}

//If any of the previous functions returned nothing, This function will show correct error message
//otherwise itll do nothing.

function listError(list1Error, list2Error){
    if (list1Error == true && list2Error == true){
         console.log(`\nThere are no Musicians or Troupes registered in the system.`)
         return;
    }
    if (list1Error == true){
        console.log('\nThere are no Musicians registered in the system.')
        return;
    }
    if(list2Error== true){
        console.log(`\nThere are no Troupes registered in the system.`);
        return;
    }
}

function addMusicianToTroupe(){
    //stops the function if a list is empty.
    if(MusicianList.length == 0 || TroupeList.length == 0){
        return
    } 
    let Trou = 0;

    //while loop for continuous prompting on fail.
    while(true){
        if(Trou != 0){
            break;
        } else {
            troupe_name=prompt('Enter Troupe name: ').trim();

            for(let i=0; i < TroupeList.length; i++){
                    if(TroupeList[i].troupeName == troupe_name){
                        Trou = TroupeList[i]
                    }
                }

            //if previous loop fails to find a match, below statement will trigger
            if( Trou == 0){
                console.log(`\nNo Troupe Name found under ${troupe_name}.`);
            };
        }
    }

    let mus = 0
    console.log('')

    //while loop for continuous prompting on fail.
    while(true){
        if(mus != 0){
            break;
        } else {
            musiName = prompt(`Type musician name to be added to ${troupe_name} :`).trim();

            for(let i=0; i < MusicianList.length; i++){
                if(MusicianList[i].musicianName == musiName){
                    mus = MusicianList[i];
                }
            }

            //if previous loop fails to find a match, below statement will trigger
            if(mus == 0){
                console.log(`\nNo Musician Name found under ${musiName}.`);
            };
        }
    }
    
    //calls the Troupe instance method addMusician and pushes the musician to the array
    Trou.addMusician(mus)
}

function setTroupe(){
    //stops the function if a list is empty.
    if(TroupeList.length == 0){
        console.log(`\nThere are no Troupes registered in the system.`)
        return
    } 
    let Trou = 0;

    //while loop for continuous prompting on fail.
    while(true){
        if(typeof Trou === 'object'){
            return Trou
        } else {
            troupe_name=prompt('Enter Troupe name: ').trim();

            for(let i=0; i < TroupeList.length; i++){
                    if(TroupeList[i].troupeName == troupe_name){
                        Trou = TroupeList[i]
                    }
                }

            //if previous loop fails to find a match, below statement will trigger
            if( Trou == 0){
                console.log(`\nNo Troupe Name found under ${troupe_name}`);
                continue;
            };
        }
    }
}

//takes troupe instance and a time and multiplies total rate by time.
function troupeTimeCost(trou, time){
    //while loop to ensure time is between min and max time for validation
    while(true){
        if(time <= trou.maxDuration && time >= trou.minDuration){
            let timeCost = trou.totalCost() * time
            console.log(`\nFor a ${time} hour set at $${trou.totalCost()} an hour, ${trou.troupeName} will cost $${timeCost}.`)
            break;
        } else {
            console.log(`\nError: The maximum Duration of ${trou.troupeName} is ${trou.maxDuration}.\nPlease Select a time between ${trou.minDuration} and ${trou.maxDuration} hours.\n`);
            time = prompt('How many hours do you want the Troupe to play for: ')
        }
    }
}

//Hidden presets. enter 11 on first menu to register entries below.
function Hardcode (){
        var musi = new Guitarist();
        musi.instrument='Guitarist';
        musi.musicianName='Robert Blackshaw'
        musi.experience=12
        musi.hourlyRate=75
        MusicianList.push(musi)

        var musi = new Bassist();
        musi.instrument='Bassist';
        musi.musicianName='Emma Nickel'
        musi.experience=15
        musi.hourlyRate=85
        MusicianList.push(musi)

        var musi = new Percussionist();
        musi.instrument='Percussionist';
        musi.musicianName='Hayden Cooper'
        musi.experience=5
        musi.hourlyRate=50
        MusicianList.push(musi)

        var musi = new Flautist();
        musi.instrument='Flautist';
        musi.musicianName='Mike Thurston'
        musi.experience=8
        musi.hourlyRate=120
        MusicianList.push(musi)

        var musi = new Bassist();
        musi.instrument='Bassist';
        musi.musicianName='Jesse James'
        musi.experience=10
        musi.hourlyRate=300
        MusicianList.push(musi)

        var musi = new Bassist();
        musi.instrument='Bassist';
        musi.musicianName='111'
        musi.experience=10
        musi.hourlyRate=300
        MusicianList.push(musi)

        var troupe = new Troupe();
        troupe.minDuration=1;
        troupe.maxDuration=3;
        troupe.troupeName='Violent Soho';
        troupe.genre='Rock';
        TroupeList.push(troupe)

        var troupe = new Troupe();
        troupe.minDuration=2;
        troupe.maxDuration=3;
        troupe.troupeName='Dune Rats';
        troupe.genre='Pop';
        TroupeList.push(troupe)

        var troupe = new Troupe();
        troupe.minDuration=1;
        troupe.maxDuration=2;
        troupe.troupeName='Skeggs';
        troupe.genre='Jazz';
        TroupeList.push(troupe)

        var troupe = new Troupe();
        troupe.minDuration=1;
        troupe.maxDuration=2;
        troupe.troupeName='111';
        troupe.genre='Jazz';
        TroupeList.push(troupe)

        console.log('\nhardcode successfull')
}



module.exports={mainMenu, regMusician, createTroupe, listMusicians, listTroupes, Hardcode, listError, addMusicianToTroupe, setTroupe, troupeTimeCost};