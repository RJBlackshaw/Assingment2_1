# MusoPlan testing
##### Authored by Robert Blackshaw
<br /><br />

The program was initially developed with validation and perfection in mind throughout the entire process. Each stage was tested thoroughly before being added and commited to the repository. 

-Case 1: Adding a musician to a Troupe<br />

      In order to add a musician to a Troupe there first must be Troupes and musicians in the system. The program would be considered bad user experience if the user was allowed to enter this menu when it can never work.

      When the user selected 3 for adding a musician to a troupe. The first line of code executed is a function that has an if statement that checks the musicianArray.length and troupeArray.length and if either of these return zero the user is sent back to the menu with an error message.

      This fuction is working as intended. It even has a switch statement for its error message that can determine whether there are no musicians or no troupes in the system, or both!

-Case 2: Wrong user inputs

      The keyboard has hundreds of possible inputs. The program must be able to accept all possible inputs without failing. 
      For example, if the user entered the letters 'foo' when prompted with a question asking for the musicians hourly rate and the program accepted it. When the program later tries to calculate the bands total rate it will not be able to add and multiply words.
      Good user design would not allow the user to enter a word instead of a number. Better user design would be to immediately prompt the user to enter a real value instead of a returning them to the menu to start again.

      There are many times the user is prompted to type information into the program. Every one of these occasions has been tested for incorrect inputs and programmed using a compbination of loops, switches and if statements in order to reprompt the user, asking for a correct input and often explaining thier mistake.

      i.e When the user is asked to enter a number of 1,2,3 or 4, and the user instead types anything else, such as 5, 11, hello, P, it prompted the user again asking for a number between 1 and 4 to continue.

-Case 3:  Exporting detailed descriptions to txt file.

      A major issue that was encountered was for step 8 which was to export the detailed descriptions of all troupes to a text file. The functions were written and when tested for the first time the text file filled up with 'undefined' values over and over. It wasn't immediately clear the problem. Console.log was used all throughout the functions to return the values of varibles at each segment in order to discover which part was failing. Unfortunately, the function was working as intended. After alot of thought it was discover that writing data to a file was only possilbe with common data types such as strings and integers.

      The way the step 4 and 5 functions were written was to return multiple console.log's to present the user with lines of information in a neat menu. This technique is acceptable for returning values in a commandline, however, useless when printing data to a text file.

      The function needed to return a singular string. Thus, stage 4 and 5 were mostly rewritten in order to return a string instead of a bunch of console.log's. This was time consuming but was also a good lesson in fundementals. I learnt that its better to return strings and console.log the function when calling it. Instead of the function returning lines of console.log.

      
