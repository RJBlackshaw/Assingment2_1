let { Bassist } = require("./Bassist.js");

 //test detailedDescription
 test("test detailedDescription function", () => {
   musi = new Bassist();
   musi.musicianName = 'robert'
   musi.instrument = 'Bassist'
   musi.experience = 10
   musi.hourlyRate = 100

   
   expect(musi.detailedDescription()).toEqual(`    Hi there! My name is robert and I am a bassist!
    I have been playing for 10 years and my hourly rate is $100 an hour.
    As a bassist, I like to say:
        
        "Everyone loves a bassist"
        
    --------------------------------------------------\n\n`);
 });