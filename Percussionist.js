const { Musician } = require("./Musician");

class Percussionist extends Musician{
    constructor(instrument, musicianName, experience, hourlyRate){
        super(instrument, musicianName, experience, hourlyRate)
    }
}

module.exports={Percussionist};
