const { Musician } = require("./Musician");

class Bassist extends Musician{
    constructor(instrument, musicianName, experience, hourlyRate){
        super(instrument, musicianName, experience, hourlyRate)
    }

    detailedDescription(){
        console.log(`Hi there! My name is ${this.musicianName}, I am a bassist,\nI have been playing for ${this.experience} years and my hourly rate is $${this.hourlyRate} an hour.\nAs a bassist, I like to say:\n\n"Everyone loves a bassist" \n`);
        console.log('--------------------------------------------\n');
    }
}

module.exports={Bassist};