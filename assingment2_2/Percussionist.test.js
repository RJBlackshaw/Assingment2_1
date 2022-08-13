let { Percussionist } = require("./Percussionist.js");

 //test detailedDescription
 test("test detailedDescription function", () => {
   musi = new Percussionist();
   musi.musicianName = 'robert'
   musi.instrument = 'Percussionist'
   musi.experience = 10
   musi.hourlyRate = 100

   
   expect(musi.detailedDescription()).toEqual(`    Hi there! My name is robert and I am a percussionist!
    I have been playing for 10 years and my hourly rate is $100 an hour.
    As a percussionist, I like to say:
        
        "Me drum"
        
    --------------------------------------------------\n\n`);
 });