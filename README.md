# challanges

Challenges repository
This is an open source project which has Licensed by MIT which allow you to contribute and used open source codes used in this repo (All Branches).
More info: https://g.co/kgs/QWcHhF

  - Branches are named as module[n] and each one of them its unique challenge.
  - Master Branch contain the last solved challenge. (the read me your are reading trough, it is a defult guid when NO challage availabel to help you do a pre-setup.)
  
 # how to use the module and deploy
 
  - Clone the repo and make it own
      # Https url : 
          git clone https://github.com/miladesmailpour/challanges.git
      # ssh url :
          git clone git@github.com:miladesmailpour/challanges.git
      # Checking the fetch/pull and push url : 
          git remote -v
      # Modifing origin url : 
          git remote add origin [https/ssh url of you repo] https://docs.github.com/en/get-started/quickstart/create-a-repo
      # Verifing the fetch/pull and push url : 
          git remote -v https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories
      # Chacking the status of local : 
          git status
          
          "if local NOT updated"
          git add .
          git commit -m "[your comment]"
          git push origin master/main
   
   - Checkout to the module (the challenge you want to used and deploy)
      # Checkout to the disred challage : 
          git checkout module[n]
      # Verifing : 
          git status
      # [Make the change you wish to have]
          What do you think needed to improve?
      # Commiting to local and updating the GitHub repo: 
            git add .
            git commit -m "[your comment]"
            git push origin [your module name]
  - Moving Modules to Master Branch and deploy :
      # Creating a pull request to update the master/main : 
         https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
      # Deploy through the GitHub : 
         https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

# 03 JavaScript: Password Generator

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
