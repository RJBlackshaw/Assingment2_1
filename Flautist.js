const { Musician } = require("./Musician");

class Flautist extends Musician{
    constructor(instrument, musicianName, experience, hourlyRate){
        super(instrument, musicianName, experience, hourlyRate)
    }

    detailedDescription(){
        return `    Hi there! My name is ${this.musicianName} and I am a flautist!
    I have been playing for ${this.experience} years and my hourly rate is $${this.hourlyRate} an hour.
    As a flautist, I like to say:
        
        "1989 heavy metal instrument of the year"
        
    --------------------------------------------------\n\n`;
    }
}

module.exports={Flautist};
