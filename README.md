# Create a Full Stack BoilerPlate - React, Express, Node, MongoDB, Heroku  


1. Create Folder to put Project In
2. Create frontEnd folder by:
- npx create-react-app nameOfYourApp 
2. DELETE the .git files (.git & .gitignore ... otherwise you'll get erros)
3. Create backend folder (Just make it)
4. Initialize package.json by typing:
- npm init
- Follow the instructions on Q38.

5. Install express
6. Install mongoose
7. Install dotenv 
8. Install concurrently
9. Install nodemon
10. Install path
- npm i express
- npm i mongoose
- npm i dotenv
- npm i concurrently
- npm i nodemon 

10. Set up package.json to run FE + BE together
Add this to your package.json:
- "scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },

1.  Set Backend to use ES6 Modules
- Open package.json and add this line below  "description" & "main"  key/value pair
"type": "module",

12. Create .env file
- Place this code there:
- MONGO_URI=mongodb+srv://timmanas:<INSERTPASSWORDHERE>@cluster0.9czdc.mongodb.net/proshop?retryWrites=true&w=majority

13. Create server.js file in BE folder
> Add base code

14. Set up .gitignore
15. Push to Git

16. Install Heroku
- Go to root:
- brew tap heroku/brew && brew install heroku

17. Create the node_modules folder 
- Run this in frontend folder:
- npm run build


18. Login into Heroku CLI
- Type in:
- heroku login
- Should open up a browser automatically ... then Click on ‘Log In’

19.  Create a Heroku Application
- Go to Root:
- heroku create <NameOFApp...Must be UNIQUE>

20. Create new Heroku Repository
- Type in:
- heroku git:remote -a <NameOfApp …. ex: proshop2021>

21. Add Config Vars in Heroku
- Add the MONGO_URI, PORT, NODE_ENV = Production

22. Add ProcFile in rootFolder:
- web: node backend/server.js

23. Add the postbuild script on the package.json field  
- "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false"

24. Push Code to Heroku
- git push heroku main

