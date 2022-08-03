const { Musician } = require("./Musician");

class Guitarist extends Musician{
    constructor(instrument, musicianName, experience, hourlyRate){
        super(instrument, musicianName, experience, hourlyRate)
    }

    detailedDescription(){
        return `    Hi there! My name is ${this.musicianName} and I am a guitarist!
    I have been playing for ${this.experience} years and my hourly rate is $${this.hourlyRate} an hour.
    As a guitarist, I like to say:
        
        "The more strings you have, the better you are"
        
    --------------------------------------------------\n\n`;
    }
}

module.exports={Guitarist};