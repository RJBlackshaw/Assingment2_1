const { Musician } = require("./Musician");

class Bassist extends Musician{
    constructor(instrument, musicianName, experience, hourlyRate){
        super(instrument, musicianName, experience, hourlyRate)
    }
}

module.exports={Bassist};