const { Troupe } = require("./Troupe.js");
const { Musician } = require("./Musician.js");
let { Guitarist } = require("./Guitarist.js");
let { Bassist } = require("./Bassist.js");
let { Percussionist } = require("./Percussionist.js");
let { Flautist } = require("./Flautist.js");


//Troupe name
test("test setting troupe name for 6 characters", () => {
   Trou = new Troupe();
   Trou.troupeName = "Bandy"; //setting the value
   expect(Trou.troupeName).toEqual("Bandy"); //getting the value
 });
 
 test("test setting troupe name for 3 characters", () => {
   Trou = new Troupe();
   Trou.troupeName = "ban"; //setting the value
   expect(Trou.troupeName).toEqual("ban"); //getting the value
 });
 
 test("test setting troupe name for 30 characters", () => {
   Trou = new Troupe();
   Trou.troupeName = "bandy brands brandwise barthlo"; //setting the value
   expect(Trou.troupeName).toEqual("bandy brands brandwise barthlo"); //getting the value
 });
 
  test("test setting troupe name for 2 characters", () => {
    expect(() => {
       Trou = new Troupe();
       Trou.troupeName = 'Ba'; //setting the value
       }).toThrowError("\nError: Invalid input. Troupe name must be between 3 and 30 characters"
       ); //getting the value
  });

//Minimum duration
test("test setting troupe minimum duration to 2", () => {
   Trou = new Troupe();
   Trou.minDuration = 2; //setting the value
   expect(Trou.minDuration).toEqual(2); //getting the value
 });

 test("test setting troupe minimum duration to 0.5", () => {
   Trou = new Troupe();
   Trou.minDuration = 0.5; //setting the value
   expect(Trou.minDuration).toEqual(0.5); //getting the value
 });

 test("test setting troupe minimum duration to 0", () => {
   Trou = new Troupe();
   Trou.minDuration = 0; //setting the value
   expect(Trou.minDuration).toEqual(null); //getting the value
 });

 test("test setting troupe minimum duration to string 'three'", () => {
   Trou = new Troupe();
   Trou.minDuration = 'three'; //setting the value
   expect(Trou.minDuration).toEqual(null); //getting the value
 });

 //maximum Duration

 test("test setting troupe maximum duration to 2", () => {
   Trou = new Troupe();
   Trou.minDuration = 0.5; //setting the value
   Trou.maxDuration = 2; //setting the value
   expect(Trou.maxDuration).toEqual(2); //getting the value
 });

 test("test setting troupe maximum duration to 0.5", () => {
   Trou = new Troupe();
   Trou.minDuration = 0.5; //setting the value
   Trou.maxDuration = 0.5; //setting the value
   expect(Trou.maxDuration).toEqual(0.5); //getting the value
 });

 test("test setting troupe maximum duration to 0", () => {
   Trou = new Troupe();

   Trou.maxDuration = 0; //setting the value
   expect(Trou.maxDuration).toEqual(null); //getting the value
 });

 test("test setting troupe maximum duration to 5", () => {
  Trou = new Troupe();

  Trou.maxDuration = 5; //setting the value
  expect(Trou.maxDuration).toEqual(null); //getting the value
});

 test("test setting troupe maximum duration to string 'three'", () => {
   Trou = new Troupe();
   Trou.maxDuration = 'three'; //setting the value
   expect(Trou.maxDuration).toEqual(null); //getting the value
 });

 test("test setting troupe maximum duration to 1 when minimum duration is 2", () => {
   Trou = new Troupe();
   Trou.minDuration = 2; //setting the value
   Trou.maxDuration = 1; //setting the value
   expect(Trou.maxDuration).toEqual(null); //getting the value
 });

 //genre
//Validation is in prompt loop. When the user enters in 1,2 or 3 it assings an genre string as troupe.genre. therefore it can't possibly be assinged incorrectly.
  test("test setting musician instrument to Bassist", () => {
   Trou = new Troupe();
   Trou.genre = "Pop"; //setting the value
   expect(Trou.genre).toEqual("Pop"); //getting the value
 });

 //addMusician function
test("test add musician function", () => {
   musi = new Musician();
   Trou = new Troupe();
   Trou.addMusician(musi);
   expect(Trou.tMembers.length).toEqual(1);
 });
 
 test("test add musician function with 2 musicians", () => {
   musi1 = new Musician();
   musi2 = new Musician();
   Trou = new Troupe();
   Trou.addMusician(musi1);
   Trou.addMusician(musi2);
   expect(Trou.tMembers.length).toEqual(2);
 });

 //troupeDescription Function
 test("test troupe Description function", () => {
   musi = new Musician();
   musi.instrument = 'bassist'
   musi.hourlyRate = 100
   Trou = new Troupe();
   Trou.troupeName = "Bandy"
   Trou.minDuration = 1
   Trou.maxDuration = 2
   Trou.genre = "Pop"

   Trou.addMusician(musi);
   expect(Trou.troupeDescription()).toEqual(`\n|=====================================================|\n` +
   `  Troupe Name:             Bandy  \n` +
   `  Genre:                   Pop  \n` +
   `  Minimum booking:         1 hour  \n` +
   `  Maximum booking:         2 hour \n` +
   `  Hourly rate:             $100/hour ` +
   `\n` +
   `\n` +
   `                 ~Instruments~          ` +
   `\n` +
   `\n` 
)
 });

 //test musicianDescription
 test("test add musician function with 2 musicians", () => {
   musi1 = new Bassist();
   musi1.musicianName = 'robert'
   musi1.instrument = 'Bassist'
   musi1.experience = '10'
   musi1.hourlyRate = '100'

   
   Trou = new Troupe();
   Trou.addMusician(musi1);
   expect(Trou.musicianDescription()).toEqual(`    Hi there! My name is robert and I am a bassist!
    I have been playing for 10 years and my hourly rate is $100 an hour.
    As a bassist, I like to say:
        
        "Everyone loves a bassist"
        
    --------------------------------------------------\n\n`);
 });

 //test totalCost function
 test("test add musician function with 2 musicians", () => {
   musi1 = new Bassist();
   musi1.musicianName = 'robert'
   musi1.instrument = 'Bassist'
   musi1.experience = 10
   musi1.hourlyRate = 100

   musi2 = new Bassist();
   musi2.musicianName = 'Bobby'
   musi2.instrument = 'Bassist'
   musi2.experience = 10
   musi2.hourlyRate = 75

   Trou = new Troupe();
   Trou.addMusician(musi1);
   Trou.addMusician(musi2);

   expect(Trou.totalCost()).toBe(175);
 });