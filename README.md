# nbaPlayers
Project for machEight

The project was created in angular.

# Requirements
It is necesary to have Node js installed for being able to download de package.

# How to execute
After cloning the command to be executed in a command console is npm install to install the package. When all packages has been downloaded for running the application must be run ng serve and then the url in browser. http://localhost:4200/
For unit test must be run npm test.

# Folders a files
SRC is the main folder when you can find the files of application.
  * app.component.html has the presentation in html the information
  * app.component.ts has the implementation of the array comparation and setting the variables for being showed.
  * app.component.spect has the unit test
  * Mock foder has a file with the exportation of a json for being tested
  * Service has a PlayerService who is in charge of bringing the information as a service from web.

# Note.
Is important to have clear that de JSON downloaded in JSON file in folder mock is the same from the web given. I made the decision to downloaded only for testing since for the application this information is handle by the service that is in charge to consume the service an bring the data.
