class Troupe{
    set troupeName(tName){
        if(tName.length >=3 && tName.length <= 30){
            this.troupe=tName;
        }
        else {
            console.log("\nError: Invalid input. Troupe name must be between 3 and 30 characters");
        }
    }
    get troupeName(){
        return this.troupe;
    }
    
    set minDuration(minD){
        if(minD>=0.5 && minD<=3){
            this.min_Duration=minD;
        } else {
            console.log("\nError: Invalid input. Maximum duration must be number between 0.5 and 3");
        }
    }
    get minDuration(){
        return this.min_Duration
    }
    
    set maxDuration(maxD){
        if(maxD>=0.5 && maxD<=3 && maxD >= this.minDuration){
            this.max_Duration=maxD;
        } else {
            console.log("\nError: Invalid input. Maximum duration must be number between 0.5 and 3 and bigger than the minimum duration");
        }
    }
    get maxDuration(){
        return this.max_Duration
    }   
   
    set genre(gen){
        this.genre_=gen;
    }
    get genre(){
        return this.genre_
    }

    tMembers = new Array();
    
    //push musician instances to tMembers array stored in troupe instances.
    addMusician(musician){
        this.tMembers.push(musician)
        console.log(`\n${musician.musicianName} has been added to ${this.troupeName}.`)
    }

    //returns troupe summary description
    troupeDescription(){
        let totalRate = 0;
        let totalGuitars = 0;
        let totalBass = 0;
        let totalFlute = 0;
        let totalPercussion = 0;

        //adds troupe members wages together
        for(let i=0; i < this.tMembers.length; i++){
            totalRate += this.tMembers[i].hourlyRate;
        }

        //loop gathers total of each instrument
        for(let i=0; i < this.tMembers.length; i++){
            switch(this.tMembers[i].instrument){
                case 'Guitarist':
                    totalGuitars += 1;
                    continue;

                case 'Bassist':
                    totalBass += 1;
                    continue;

                case 'Flautist':
                    totalFlute += 1;
                    continue;

                case 'Percussionist':
                    totalPercussion += 1;
                    continue;
            }
        }

        //Function that turns instrument totals into strings
        function instrumentList(){
            console.log()
            if(totalGuitars == 1){
                console.log(`             1 Guitarist`)
            }
            if (totalGuitars > 1){
                console.log(`             ${totalGuitars} Guitarist's`)
            }
            if(totalFlute == 1){
                console.log(`             1 Flautist`)
            }
            if (totalFlute > 1){
                console.log(`             ${totalFlute} Flautist's`)
            }
            if(totalBass == 1){
                console.log(`             1 Bassist`)
            }
            if (totalBass > 1){
                console.log(`             ${totalBass} Bassist's`)
            }
            if(totalPercussion == 1){
                console.log(`             1 Percussionst`)
            }
            if (totalPercussion > 1){
                console.log(`             ${totalPercussion} Percussionst's`)
            }
        }

        //summary description
        console.log('\n|======================================|');
        console.log(`  Troupe Name:          ${this.troupeName}  `);
        console.log(`  Genre:                ${this.genre}  `);
        console.log(`  Minimum booking:      ${this.minDuration} hour  `);
        console.log(`  Maximum booking:      ${this.maxDuration} hour `);
        console.log(`  Hourly rate:          $${totalRate}/hour \n`);
        console.log(`             ~Instruments~          `);
                    instrumentList()
        console.log(`|======================================|\n`);    
    }
}

module.exports={Troupe};