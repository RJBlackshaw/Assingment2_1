const { Musician } = require("./Musician.js");

//musician name
test("test setting musician name for 6 characters", () => {
  Musi = new Musician();
  Musi.musicianName = "Robert"; //setting the value
  expect(Musi.musicianName).toEqual("Robert"); //getting the value
});

test("test setting musician name for 3 characters", () => {
  Musi = new Musician();
  Musi.musicianName = "Rob"; //setting the value
  expect(Musi.musicianName).toEqual("Rob"); //getting the value
});

test("test setting musician name for 30 characters", () => {
  Musi = new Musician();
  Musi.musicianName = "Robert James Blackshaw barthlo"; //setting the value
  expect(Musi.musicianName).toEqual("Robert James Blackshaw barthlo"); //getting the value
});

test("test setting musician name for 2 characters", () => {
  expect(() => {
    Musi = new Musician();
    Musi.musicianName = "Ro"; //setting the value
  }).toThrowError(
    "\nError: Invalid input. Name must be between 3 and 30 characters"
  ); //getting the value
});

//instrument
//Validation is in prompt loop. When the user enters in 1,2,3 or 4 it assings an instrument string as Musi.instrument. therefore it can't possibly be assinged incorrectly.
test("test setting musician instrument to Bassist", () => {
  Musi = new Musician();
  Musi.instrument = "Bassist"; //setting the value
  expect(Musi.instrument).toEqual("Bassist"); //getting the value
});

//experience
test("test setting musician experience to edge case 0", () => {
  Musi = new Musician();
  Musi.experience = 0; //setting the value
  expect(Musi.experience).toEqual(0); //getting the value
});

test("test setting musician experience to interior value 15", () => {
  Musi = new Musician();
  Musi.experience = 15; //setting the value
  expect(Musi.experience).toEqual(15); //getting the value
});

test("test setting musician experience to be a negative number", () => {
  Musi = new Musician();
  Musi.experience = -8; //setting the value
  expect(Musi.experience).toEqual(null); //getting the value
});

test("test setting musician experience to be a string", () => {
  Musi = new Musician();
  Musi.experience = "five"; //setting the value
  expect(Musi.experience).toEqual(null); //getting the value
});

//hourly rate
test("test setting musician hourly rate to edge case 50", () => {
  Musi = new Musician();
  Musi.hourlyRate = 50; //setting the value
  expect(Musi.hourlyRate).toEqual(50); //getting the value
});

test("test setting musician hourly rate to interior value 75", () => {
  Musi = new Musician();
  Musi.hourlyRate = 75; //setting the value
  expect(Musi.hourlyRate).toEqual(75); //getting the value
});

test("test setting musician hourly rate to 49", () => {
  Musi = new Musician();
  Musi.hourlyRate = 49; //setting the value
  expect(Musi.hourlyRate).toEqual(null); //getting the value
});

test("test setting musician hourly rate to string", () => {
  Musi = new Musician();
  Musi.hourlyRate = "seventy"; //setting the value
  expect(Musi.hourlyRate).toEqual(null); //getting the value
});

