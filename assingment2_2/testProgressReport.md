# MusoPlan test progress report
##### Authored by Robert Blackshaw
<br /><br />

### Date of execution
      13/06/2022

### Test Cases

      1.Main menu function.
            -has to accept a value between 1 and 9
            -give error message on wrong input.
            outcome:
            -worked as expected. boundary cases and edge cases all behaved as programmed.

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

### defects
      No defects were found during the testing. Testing was very difficult however and the functions had to be changed dramatically at times. For example the functions in the program were very complex at times and had functions within functions. This made it hard for the test function to properly set all the parameters and execute properly. Some functions were rewritten to change values to null and to return strings instead of console.log in order to pass the tests.

### strategies used to amend defects
      As explained above. Some functions were rewritten to comply with the testing and matching requirements.

### test coverage for the project.
      The testing covered all class files 100% except for Troupe.js which was covered 62.5%. Some functions insides troupe.js required functions from other files and it became far too complicated to test the functions when manually they work perfectly.

      the musoPlan.js could not be automatically tested since there isn't a function in there and infact the entire file is a while loop. However, its passed the manual tests.

      mPFucntions.js was tested manually since it requires prompts throughout the entire steps. It also passed in all aspects.

### junit XML document
      See junit.xml to see breakdown.