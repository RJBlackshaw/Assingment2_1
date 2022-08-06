# VERSION CONTROL SYSTEM REASEARCH BY GLOBEX
##### Authored by Robert Blackshaw
<br /><br />
## Version Control Systems and their benefits.
      There are three common types of version control systems.
      They are:
         -Local Version Control System
               The Local system is a method of storing the repository locally on your computer. Each file change is stored as a patch to save the history of changes. The negative of this is that it only allows for one individual to work on the repository at a time. It is also dangerous since there is only one copy and if anything were to happen to the the computer everything could be lost. The benefit is its simplicity and ability to be used offline.
            
         -Centralized Version Control System
               The Centralized system is where you host the repository on a server. This allows multiple people to work on the repository at a time. It allows for better organization and administrative functionality. The one downside is that if the server goes down, no one can work on the repository. Or if this server breaks the repository will be lost unless someone has a local copy on thier computer.

         -Distributed Version Control System
               The most common and overall best system is a distributed version control system. It compbines the Local and Centralized systems and allows users to copy the entire repository from the server onto their local computers, not just the files, change history and all. If the server goes down, users can still work on files without disruption.
<br />

## MusoPlan VCS
      MusoPlan will use a distributed version control system called Github. This VSC is the most popular globally as it is the most refined system and its familiarity to users in IT make competiting VCS's seldom used.

      Since MusoPlan will be developed in many stages and requires multiple attempts at some stages. Having a VCS is very important. Github allows each stage to be saved and rolled back to if something were to go wrong. It also allows for stages to be attempted multiple times and compared to choose the best solution. For the scope of the project Github encapsulates all needs.


## Installation Process
      - The installation process is relatively straight forward. The user must goto https://git-scm.com/downloads and press the download button on there relative windows build. i.e. 32 or 64 bit.
      - After its finished installing, run the set up and follow all the default prompts. It is fairly important to not choose any of the other settings during installation unless you know what you're doing. Make sure to select launch Git Bash on the final step of installation.
      - After it is installed and Git Bash is open. Type 'git --version' to check the correct version is installed. 

## Github Configuration
      -the first useful command is 'git config -- help'. This will open up a web page with all the possible commands to use Git.
      -in order to use github an account must be made on the website.
      -once that is done you log into git in git bash using 'git config --global user.username (username)'
      -now on the website you need to create a new repository
      -to link the repository to your gitbash you type '-git remote add origin (link)'
      -The last step is to create a branch which is done with 'git branch (name)'
      - followed by 'git checkout (name)' to swap to it.

      If all these stepped are followed the user can now begin creating the program. Using 'git add (filename)' and 'git commit -m (description)'