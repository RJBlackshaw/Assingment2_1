# MusoPlan Test Plan Document
##### Authored by Robert Blackshaw
<br /><br />

### Introduction


   This document will cover each of the tests that will be executed and cover what they include and expected outputs.
<br />

### Scope

      Testing will be a mix of manual, which requires no software, and automatic which will require Jest to be installed.

      Each test will attempt to cover Base, Edge, Boundary and Corner cases where possible.
<br />

### Test 1: Main menu function
      Description: Main menu function has to accept a value between 1 and 9. If input is correct then function succesffully directs user to correct function. If input is incorrect then function returns error message.

      Type: Manual

      Input Values: 1,2,3,4,5,6,7,8,9,10,55,Foo

      Execution steps: 1. Type 'node musoPlan.js
                       2. Enter input values

      Expected Result: Numbers 1-9 will correctly route to the relevant switch case. 10, 55 and 'Foo' will return an error message and will reprompt.


<br />

### Test 2: Musician class setters
      Description: Test 'if statments' for proper validation of setters in the musician class.

      Type: Automated

      Input Values: Name: Robbie
                    Instrument: Bassist
                    Experience: 8
                    Hourly Rate: 75

      Execution steps: 1. npm run test-coverage

      Expected Result:  Name: Robbie -> Success
                        Instrument: Bassist -> Success
                        Experience: 8 -> Success
                        Hourly Rate: 75 -> Success
      
<br />

### Test 3: Troupe class setters
      Description: Test 'if statments' for proper validation of setters in the troupe class.

      Type: Automated

      Input Values: Name: ba
                    Minimum Duration: 0
                    Maximum Duration: 5
                    Genre: EDM

      Execution steps: 1.set matchers to match error message
                       2.npm run test-coverage

      Expected Result:
      Name: 
      ba = 'Error: Invalid input. Troupe name must be between 3 and 30 characters' -> Success
      Minimum Duration:
      0 = 'Error: Invalid input. Maximum duration must be number between 0.5 and 3' -> Success
      Maximum Duration:
      5 = 'Error: Invalid input. Maximum duration must be number between 0.5 and 3 and bigger than the minimum duration' -> Success
      Genre:
      EDM = 'Error: Invalid input, You've entered 'EDM'. Please enter either Pop, Jazz or Rock.' -> Success
      
<br />

### Test 4: Add Musician to Troupe
      Description: Check whether musician array in troupe class length increases with each addition.

      Preconditions: Have troupes and Musicians in the system.

      Input Values: Enter Troupe name: Dune Rats
                    Enter Musicain name: Jesse James

      Execution steps: 1.set matchers to check troupearray.length = 1
                       2.npm run test-coverage

      Expected Result: troupearray.length = 1 -> Success