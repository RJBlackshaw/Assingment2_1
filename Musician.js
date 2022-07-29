class Musician{
    set instrument(inst){
            this.instrument_=inst;
    }
    get instrument(){
        return this.instrument_
    }

    set musicianName(mName){
        if(mName.length >=3 && mName.length <= 30){
            this.musician_Name=mName;
        }
        else {
            console.log("\nError: Invalid input. Name must be between 3 and 30 characters");
        }
    }
    get musicianName(){
        return this.musician_Name;
    }

    set experience(exp){
        if(exp>=0){
            this.experience_=exp;
        } else {
            console.log("\nError: Invalid input. Experience must be whole numbers equal or greater than 0");
        }
    }
    get experience(){
        return this.experience_
    }

    set hourlyRate(hRate){
        if(hRate>=50){
            this.hourly_Rate=hRate;
        } else {
            console.log("\nError: Invalid input. Hourly rate must be whole numbers equal or greater than 50");
        }
    }
    get hourlyRate(){
        return this.hourly_Rate
    }  
}

module.exports={Musician};