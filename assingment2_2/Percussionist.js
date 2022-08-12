const { Musician } = require("./Musician");

class Percussionist extends Musician {
  constructor(instrument, musicianName, experience, hourlyRate) {
    super(instrument, musicianName, experience, hourlyRate);
  }

  detailedDescription() {
    return `    Hi there! My name is ${this.musicianName} and I am a percussionist!
    I have been playing for ${this.experience} years and my hourly rate is $${this.hourlyRate} an hour.
    As a percussionist, I like to say:
        
        "Me drum"
        
    --------------------------------------------------\n\n`;
  }
}

module.exports = { Percussionist };
