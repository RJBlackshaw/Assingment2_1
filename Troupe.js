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

    addMusician(musician){
        this.tMembers.push(musician)
        console.log(`\n${musician.musicianName} has been added to ${this.troupeName}.`)
    }
}

module.exports={Troupe};