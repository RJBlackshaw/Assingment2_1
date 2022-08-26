# MusoPlan testing

##### Authored by Robert Blackshaw

<br />
The program was initially developed with validation and perfection in mind throughout the entire process. Each stage was tested thoroughly before being added and commited to the repository. 
<br /><br />

### Case 1 - Adding a Musician

---

<br />

This will test the functionality of option 1 _'Adding a musician to a Troupe'_. The following instructions were followed:

1. Select option 1 from the main menu list by entering '1'
2. Enter either option 1, 2, 3 or 4 depending on the musician required
3. Enter the musicians name (must be between 3 and 30 characters)
4. Enter the musicians years of experience (must be a number greater than 0)
5. Enter the musicians Hourly rate (must be a number greater than 50)

| Input                                                      |                                                               Expected Output                                                               |                                                                                                                                      Output |
| ---------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------: |
| '1' <br />'1'<br />'Robert Blackshaw' <br />'5' <br />'75' |                                                    'Guitarist registered successfully.'                                                     |                                                                                                        'Guitarist registered successfully.' |
| '1' <br />'5'                                              |                               'Error: Invalid input. You've chosen 5'<br />'Enter your choice [from 1 - 4] :'                               |                                                             'Error: Invalid input. You've chosen 5'<br />'Enter your choice [from 1 - 4] :' |
| '1' <br />'1'<br />'Bo'                                    |            'Error: Invalid input. Name must be between 3 and 30 characters'<br />'Enter the Musician Name (3 - 30 characters): '            |                      ''Error: Invalid input. Name must be between 3 and 30 characters'<br />'Enter the Musician Name (3 - 30 characters): ' |
| '1' <br />'1'<br />'Robert Blackshaw' <br />'F'            |   'Error: Invalid input. Experience must be whole numbers equal or greater than 0'<br />'Enter the Musicians Experience (0 or greater): '   |     'Error: Invalid input. Experience must be whole numbers equal or greater than 0'<br />'Enter the Musicians Experience (0 or greater): ' |
| '1' <br />'1'<br />'Robert Blackshaw' <br />'-5'           |   'Error: Invalid input. Experience must be whole numbers equal or greater than 0'<br />'Enter the Musicians Experience (0 or greater): '   |     'Error: Invalid input. Experience must be whole numbers equal or greater than 0'<br />'Enter the Musicians Experience (0 or greater): ' |
| '1' <br />'1'<br />'Robert Blackshaw' <br />'5'<br />'30'  | 'Error: Invalid input. Hourly rate must be whole numbers equal or greater than 50'<br />'Enter the Musicians hourly rate (50 or greater): ' | 'Error: Invalid input. Hourly rate must be whole numbers equal or greater than 50'<br />'Enter the Musicians hourly rate (50 or greater): ' |
|                                                            |                                                                                                                                             |

No modifications were required as the code worked as intended.

<br /><br />

### Case 2 - Create a Troupe

---

<br />

This will test the functionality of option 3 _'Create a Troupe'_. The following instructions were followed:

1. Select option 2 from the main menu list by entering '2'
2. Enter the Troupe name (must be between 3 and 30 characters)
3. Enter the Troupes Minimum Duration (between 0.5 and 3)
4. Enter the Troupes Maximum Duration (between 0.5 and 3 and greater than minimum duration)
5. Enter Genre option 1, 2 or 3

| Input                                            |                                                                                Expected Output                                                                                 |                                                                                                                                                                         Output |
| ------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| '2' <br />'Bandy'<br />'1.5' <br />'3' <br />'2' |                                                                       'Troupe registered successfully.'                                                                        |                                                                                                                                              'Troupe registered successfully.' |
| '2' <br />'Ba'                                   |                                          'Error: Invalid input. You've chosen 'Ba'<br />'Enter the Troupe Name (3 - 30 characters) :'                                          |                                                                                   'Error: Invalid input. You've chosen 'Ba'<br />'Enter the Troupe Name (3 - 30 characters) :' |
| '2' <br />'Bandy'<br />'0'                       |                   'Error: Invalid input. Minimum duration must be number between 0.5 and 3'<br />'Enter the Troupes Minimum Duration (between 0.5 and 3) :'                    |                                      'Error: Invalid input. Minimum duration must be number between 0.5 and 3'<br />'Enter the Troupes Minimum Duration (between 0.5 and 3) :' |
| '2' <br />'Bandy'<br />'1.5' <br />'0'           | 'Error: Invalid input. Maximum duration must be number between 0.5 and 3 and bigger than the minimum duration'<br />'Enter the Troupes Maximum Duration (between 0.5 and 3) :' | 'Error: Invalid input. Maximum duration must be number between 0.5 and 3 and bigger than the minimum duration'<br />'Enter the Troupes Maximum Duration (between 0.5 and 3) :' |
| '2' <br />'Bandy'<br />'1.5' <br />'1'           | 'Error: Invalid input. Maximum duration must be number between 0.5 and 3 and bigger than the minimum duration'<br />'Enter the Troupes Maximum Duration (between 0.5 and 3) :' | 'Error: Invalid input. Maximum duration must be number between 0.5 and 3 and bigger than the minimum duration'<br />'Enter the Troupes Maximum Duration (between 0.5 and 3) :' |
| '2' <br />'Bandy'<br />'1.5' <br />'3'<br />'6'  |                                                   'Error: Invalid input, You've entered '6'. Please enter either 1, 2 or 3.'                                                   |                                                                                                     'Error: Invalid input, You've entered '6'. Please enter either 1, 2 or 3.' |
|                                                  |                                                                                                                                                                                |

No modifications were required as the code worked as intended.
<br /><br /><br />

### Case 3 - Adding a Musician to a Troupe

---

<br />

This will test the functionality of option 3 _'Adding a musician to a Troupe'_ when there are no Musicians or Troupes in the system. The following instructions were followed:

1. Add a troupe or musician into the system first
2. Select option 3 from the main menu list by entering '3'
3. exit program and try again with different troupe/musician combo

| Input                                                                                                 |                                        Expected Output                                         |                                                                                         Output |
| ----------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------: |
| 'Add a troupe to the system with option 2'<br />'Add a musician to the system with option 1'<br />'3' |                                     'Enter Troupe name: '                                      |                                                                          'Enter Troupe name: ' |
| 'Add a troupe to the system with option 2'<br />'3'                                                   |       'There are no Musicians registered in the system.'<br /> 'Press enter to continue'       |             'There are no Musicians registered in the system.'<br /> 'Press enter to continue' |
| 'Add a musician to the system with option 1'<br />'3'                                                 |        'There are no Troupes registered in the system.'<br /> 'Press enter to continue'        |               'There are no Troupes registered in the system.'<br /> 'Press enter to continue' |
| '3' <br /> (No Troupes and Musicians in the system)                                                   | 'There are no Musicians or Troupes registered in the system..'<br /> 'Press enter to continue' | 'There are no Musicians or Troupes registered in the system..'<br /> 'Press enter to continue' |
|                                                                                                       |                                                                                                |

No modifications were required as the code worked as intended.
