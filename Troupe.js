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
            function guitarList(){

                if(totalGuitars == 1){
                    return`                 1 Guitarist\n`;
                }
                if (totalGuitars > 1){
                    return`                 ${totalGuitars} Guitarist's\n`;
                }
            }

            function FluteList(){

                if(totalFlute == 1){
                    return`                 1 Flautist\n`;
                }
                if (totalFlute > 1){
                    return`                 ${totalFlute} Flautist's\n`;
                }
            }

            function bassList(){
                if(totalBass == 1){
                    return`                 1 Bassist\n`;
                }
                if (totalBass > 1){
                    return`                 ${totalBass} Bassist's\n`;
                }
            }

            function percussionList(){
                if(totalPercussion == 1){
                    return`                 1 Percussionst\n`;
                }
                if (totalPercussion > 1){
                    return`                 ${totalPercussion} Percussionst's\n`;
                }
            }

        //summary description
        return   `|===========================================|\n`
                +`  Troupe Name:             ${this.troupeName}  \n`
                +`  Genre:                   ${this.genre}  \n`
                +`  Minimum booking:         ${this.minDuration} hour  \n`
                +`  Maximum booking:         ${this.maxDuration} hour \n`
                +`  Hourly rate:             $${totalRate}/hour `+`\n`+`\n`
                +`                 ~Instruments~          `+`\n`
                +`${totalGuitars !=0 ? guitarList() : ''}`
                +`${totalBass !=0 ? bassList(): ''}`
                +`${totalFlute !=0 ? FluteList(): ''}`
                +`${totalPercussion !=0 ? percussionList(): ''}`
    }

    //loops to each musician in tMembers array and returns their descriptions
    musicianDescription(){
        for(let i=0; i < this.tMembers.length; i++){
            this.tMembers[i].detailedDescription();
        }
    }

    //loops through the musicians and tally's their hourlyrates and returns a total rate.
    totalCost(){
        let totalRate = 0;
        for(let i=0; i < this.tMembers.length; i++){
            totalRate += this.tMembers[i].hourlyRate;
        }
        return totalRate;
    }
}

module.exports={Troupe};