const { Musician } = require("./Musician");

class Guitarist extends Musician{
    constructor(instrument, musicianName, experience, hourlyRate){
        super(instrument, musicianName, experience, hourlyRate)
    }

    detailedDescription(){
        console.log(`Hi there! My name is ${this.musicianName}, I am a guitarist,\nI have been playing for ${this.experience} years and my hourly rate is $${this.hourlyRate} an hour.\nAs a flautist, I like to say:\n\n"1989 heavy metal instrument of the year" \n`);
        console.log('--------------------------------------------\n');
    }
}

module.exports={Guitarist};