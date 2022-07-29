const { Musician } = require("./Musician");

class Flautist extends Musician{
    constructor(instrument, musicianName, experience, hourlyRate){
        super(instrument, musicianName, experience, hourlyRate)
    }
}

module.exports={Flautist};
