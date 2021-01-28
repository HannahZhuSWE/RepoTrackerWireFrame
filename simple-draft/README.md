# Repo Tracker Mockup 
Basic idea of the frontend for Repo Tracker. Purpose is to understand how the webpage will look and how components will interact with each other. Currently not connected to the Repo Tracker tool or Kusto. 

Will eventually be able to connect to Kusto and Repo Tracker to display the metadata of articles and repos given their url.

To run first clone this repo, run npm install then run npm start.

## Overview of Components/Files
- articleData.json : 
    - holds mock info about the article being searched for
- repoData.json : 
    - holds mock info about the repo of the article being searched for
- App : 
    - holds the Layout component
- Backdrop : 
    - appears behind a popup 
    - covers the rest of the page so that when the backdrop is clicked the popup will close
- DisplayInfo : 
    - displays the info about the article and it's repo
    - if nothing has been searched yet it displays a message that prompts the user to search something 
- Field : 
    - input field and an optional label for the field
- Index : 
    - connects the App with the store
    - combines the 2 reducers into 1 reducer
- Layout : 
    - holds the main components of the page
    - determines if the login page is shown or not 
- LoginButton : 
    - login in button on the toolbar
    - when clicked will display the login page
    - if the user is already logged in this button is disabled
- LoginPage :
    - popup that allows the user to login
    - will call loginValidation to verify that the username and password are correct
    - closes when the user has successfully logged in or the backdrop was clicked
- Logo :
    - displays the logo of the webpage
- Search : 
    - place for user to enter the github url of the article/repo they want to search
    - when the user clicks the search button an action (that was passed in from Layout) triggers showResults state to be true
- Store : 
    - holds the 2 reducer files
    - holds the actions file that keeps track of the actions used
    - loginReducer keeps track of whether or not the user has authenticated and their id
    - displayResultsReducer keeps track of whether or not the search results should be displayed
- Toolbar :
    - displays the logo and title of the webpage and the login button
    - always at the top of the page regardless of scrolling position
