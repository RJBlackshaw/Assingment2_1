const { Musician } = require("./Musician");

class Guitarist extends Musician{
    constructor(instrument, musicianName, experience, hourlyRate){
        super(instrument, musicianName, experience, hourlyRate)
    }   
}

module.exports={Guitarist};