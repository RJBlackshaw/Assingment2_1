let { Flautist } = require("./Flautist.js");

 //test detailedDescription
 test("test detailedDescription function", () => {
   musi = new Flautist();
   musi.musicianName = 'robert'
   musi.instrument = 'Flautist'
   musi.experience = 10
   musi.hourlyRate = 100

   
   expect(musi.detailedDescription()).toEqual(`    Hi there! My name is robert and I am a flautist!
    I have been playing for 10 years and my hourly rate is $100 an hour.
    As a flautist, I like to say:
        
        "1989 heavy metal instrument of the year"
        
    --------------------------------------------------\n\n`);
 });