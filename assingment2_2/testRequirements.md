# MusoPlan test requirement document
##### Authored by Robert Blackshaw
<br /><br />

### Introduction
      This report will cover the scope of the testing framework for MusoPlan. It will address what needs to be tested and which methods will be used. I.e. Automated or manual. There will be a follow up testing plan document that will go further in depth on the individual tests.
<br />

### Test Requirements
      the main elements of MusoPlan that needs to be tested are the validation parameters for musicians and troupes.
<br />

### Manual vs Automated
      The manual method is when you test the program via the command line by interacting with the program and inputing different data to visually see the output. This is tedious and undocumented but its advantage is that it can test the entire system holistically.


      The Automated method is where you install Jest and develop functions that test your functions. This returns documented results and its a more thorough way of testing elements of your code.
<br />

### Manual Process
      Step 1 is to use the command line to run musoplan. For example 'node musoplan.js'.

      Step 2 would be to begin experimenting with different inputs and observing the outputs. For example, if the function for main menu used a switch statement for inputs 1-9 and all other inputs should return an error message. You would open the program and input unexpected values such as '15' or the letter 'b' to see whether the switch statement in the function behaves as expected and returns you to he menu with the error message.
<br />

### Automated Process

      Step 1 is to install Jest via the command line using 'npm i --save-dev jest'.

      Step 2 is to then create test file for each file in the program. For example if you wanted to test methods in troupe.js, you would create a file called troupe.test.js.

      Step 3. In this file you create a function that uses matchers to test the output of a function and compares it to your expected output.

      Step 4. Run the file in the commandline using 'npm run test-coverage' and observe results.
<br />

### To be Tested
      1.Main menu function.
            -has to accept a value between 1 and 9
            -give error message on wrong input.

      2.Create a musician
            -musician validation is:
               -Name must be between 3 and 30 characters
               -Years playing must be positive
               -Hourly rate must be over 50
               -only accept values of 1 and 4 when prompted for which instrument

      3.Create a Troupe
            -troupe validation is:
               -Name must be between 3 and 30 characters
               -minmum duration is between 0.5 and 3
               -maximum duration is between 0.5 and 3 and greater than minimum duration
               -only accept values of 1 and 3 when prompted for genre.

      4.Add musician to troupe. 
            -can only enter menu if there are muscians and troupes in the system
            -must accept exact matches when typing musician and troupe name.
