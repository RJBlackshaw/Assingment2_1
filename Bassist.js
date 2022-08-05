const { Musician } = require("./Musician");

class Bassist extends Musician {
  constructor(instrument, musicianName, experience, hourlyRate) {
    super(instrument, musicianName, experience, hourlyRate);
  }

  detailedDescription() {
    return `    Hi there! My name is ${this.musicianName} and I am a bassist!
    I have been playing for ${this.experience} years and my hourly rate is $${this.hourlyRate} an hour.
    As a bassist, I like to say:
        
        "Everyone loves a bassist"
        
    --------------------------------------------------\n\n`;
  }
}

module.exports = { Bassist };
