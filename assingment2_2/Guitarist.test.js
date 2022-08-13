let { Guitarist } = require("./Guitarist.js");

 //test detailedDescription
 test("test detailedDescription function", () => {
   musi = new Guitarist();
   musi.musicianName = 'robert'
   musi.instrument = 'Guitarist'
   musi.experience = 10
   musi.hourlyRate = 100

   
   expect(musi.detailedDescription()).toEqual( `    Hi there! My name is robert and I am a guitarist!
    I have been playing for 10 years and my hourly rate is $100 an hour.
    As a guitarist, I like to say:
        
        "The more strings you have, the better you are"
        
    --------------------------------------------------\n\n`);
 });