# VCS USAGE REPORT ROBERT BLACKSHAW
##### Authored by Robert Blackshaw
##### REPORT BY GLOBEX
<br /><br />


## 1. Difficulties during development
      One of the requirements of using a VCS is to never commit multiple changes at once.

      The instructions were as written:
            ‘Commit scope should be kept to a single change e.g., "Add function foo to
            example.js" not "Add function foo to example.js, updated configuration file for
            other_example.json, added error handling for another_one.js’

      I found this over restrictive and counter productive. Many of the functions share similar syntax and methodologies. It is preferred that the same technique is used throughout the entire program.

      Many times I found myself making a decision midway through making a function that would require me to go back and change many other functions in order to comply with this decision, since the new function relied on how the old ones work. However, by definition of this rule I would have to go through and make these changes after I have finished the current function and added/committed it. Without ever testing if it works since the old functions haven’t been rewritten or adapted. This led to having to rewrite the new function and recommitting it since it never worked in the first place. This rule severely hurts productivity and multitasking which are natural aspects of development. No system is so robotic that previous work should not be revisited. I was able to keep commits to one file at a time even though I worked on multiple files at once.

## 2. Organizational requirements
      All organizational requirements were met.
            ● Github was used throughout the entire development.
            ● A branch was created after most of the empty initial files were made.
            ● Commit messages were present tense and imperative mood. Almost like writing
            instructions.
            ● Not all commit messages were a single change due to lack of understanding.
            Eventually, they became only single changes.
            ● Readme.md file exists.

## 3. Verification
      All github functionalities worked as expected.
         ● Branches are useful in the situation where multiple users want to work on different projects in the repository at the same time. They allow users to branch a copy of the entire repository, work on that copy, and then merge it back into the original repository, even if the orignal repository has now slightly changed. It also alows for the projects to be cancelled at any time since the main file system remains untouched until the merge.

         During Musoplan development, a branch was created and ‘checked out’ to. The directory tag changed from (main) to (build) which was the branch name.

         
         ● Git stages are the three states a file can be in reference to the saved version in the repository.
            Modified = a file that is not the same as the file in the repository
            Staged = a file that is ready to be re/uploaded to the repository
            Commited = a file that has now been uploaded to the repository and is a perfect match.

         Git stages were useful to ensure ‘git add’ and ‘git commit’ were adding one file at a time correctly and that all changes were uploaded to the repository.

         ● A Commit is when a file is finished and is uploaded to the repository. This can either be a new file, or a file that has been modified and reuploaded. It will overwrite the old file.

         If a file had been worked on and a new feature added and tested. 
         It was committed to the musoplan Repository.

         ● A Merge is when the project is finished/approved and the branch can be merged with the main repository trunk.

         Once musoPlan had finished development and approved by the music management team, it was merged into the main repository.

         ● A Push is when the project needs to be uploaded to the server version of the repository from the local one. This will update and overwrite the existing repository.


         ● A pull request is to merge your server repository after changes with an original repository. 

         This was used to upload this document.

         ● The commit log shows a list of all commits that have been executed. This tool is great for keeping track of the order and definition of changes to the repository.

## 4. If your repository was forked from another repository, how would you go about having them integrate your changes to the central repository?
      A pull is used to remerge a repository with the original repository after it's been forked. The user must select the 'Compare & Pull request' button and leave a comment. The user of the original repository will then be prompted to accept or reject the request. They can view this by going to the 'Pull request' tab, reviewing the request and selecting 'Merge Pull Request' if it's acceptable. The user then has the option to merge with a single commit or leave all commits as they are.

      

