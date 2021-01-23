# MERN_BoilerPlateReactExpressNodeMongoHeroku


===================================================================================================
Create a Full Stack BoilerPlate - React, Express, Node, MongoDB, Heroku  
===================================================================================================

1. Create Folder to put Project In
2. Create frontEnd folder by:
    npx create-react-app nameOfYourApp 
2b. DELETE the .git files (.git & .gitignore ... otherwise you'll get erros)
3. Create backend folder (Just make it)
4. Initialize package.json by typing:
-   npm init
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
  "scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },

11. Set Backend to use ES6 Modules
- Open package.json and add this line below  "description" & "main"  key/value pair
"type": "module",

12. Create .env file
- Place this code there 
MONGO_URI=mongodb+srv://timmanas:<INSERTPASSWORDHERE>@cluster0.9czdc.mongodb.net/proshop?retryWrites=true&w=majority

13. Create server.js file in BE folder
> Add base code

14. Set up .gitignore
15. Push to Git

16. Install Heroku
- Go to root:
brew tap heroku/brew && brew install heroku



17. Create the node_modules folder 
- Run this in frontend folder
npm run build


18. Login into Heroku CLI
- Type in Heroku login
 heroku login
- Should open up a browser automatically
- Click on ‘Log In’


19. Create a Heroku Application
- Go to Root:
heroku create <NameOFApp...Must be UNIQUE>

20. Create new Heroku Repository
Type in:
heroku git:remote -a <NameOfApp …. ex: proshop2021>

21. Add Config Vars in Heroku
- Add the MONGO_URI, PORT, NODE_ENV = Production

22. Add ProcFile in rootFolder:
web: node backend/server.js

23. Add the postbuild script on the package.json field  
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false"

24. Push Code to Heroku
git push heroku main


===================================================================================================
Questions 
===================================================================================================

1. How to create a BoilerPlate React App ?
- Use the CreateReactApp via https://reactjs.org/docs/create-a-new-react-app.html
- To create a project, run:
    npx create-react-app nameOfYourApp
    cd my-app
    npm start

Note: In our case we used: 
    npx create-react-app frontEnd   
        > Why FrontEnd ? Because we React is the frontEnd 
        > Once finished, it will create a boilerPlate React App in a folder called "frontend"

2. How to start the application once CreateReactApp finishes ?
- Go to the frontend folder
- Type in:
    npm start
- Go to browser under http://localhost:3000

8. How to install BootSwatch and use them from Bootswatch ?
- Download theme on bootswatch under "bootstrap.min"
- Drag and Drop to src folder 
- Go into index.js and import using:
    import './bootstrap.min.css'

15. How to use 'font awesome' into application ?
- Go to cdnJS
- Type in font awesome in search bar 
- Copy link tag
- Place in index.html in public folder 
Ex: Check in index.html for this line "<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />"
- Why ? So we can use icon classes 
- Now go to Header and add this line in:
  <i className='fas fa-shopping-cart'></i>
  <i className='fas fa-user'></i>

23. How to install react-Router ?
- Go to frontend Folder and type in:
  npm i react-router-dom react-router-bootstrap

34. How to disable a button if there is no stock left ? 
- This checks if the button has stock or not:
<Button className='btn-block' type='button'disabled={product.countInStock === 0}

38. How to create package.json 
- Go to root folder and type in:
  npm init
- Follow the instructions
- After this is completed, it will create a 'package.json' in the home folder

Ex:
package name: (mern_ecommerceapp) 
version: (1.0.0) 
description: MERN shopping cart app
entry point: (index.js) server.js
test command: 
git repository: (https://github.com/timManas/MERN_eCommerceApp.git) 
keywords: 
author: 
license: (ISC) MIT
About to write to /Users/timmanas/ProgrammingProjects/MERNStack/MERN_eCommerceApp/package.json:

{
  "name": "mern_ecommerceapp",
  "version": "1.0.0",
  "description": "MERN shopping cart app",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/timManas/MERN_eCommerceApp.git"
  },
  "author": "",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/timManas/MERN_eCommerceApp/issues"
  },
  "homepage": "https://github.com/timManas/MERN_eCommerceApp#readme"
}

Q39. How to install express ? 
- Make sure youre in the root folder
- Type in:
  npm i express


Q42. How to run node backend Server ?
- Make sure you package.json initialized  (Take a look at #38 above)
- Create Code to listen in at Port:5000 (Ex: app.listen(5000, console.log('Server is running')))
- Type the following in the root folder:
  npm start
** Note: You will need to start front & backend seperately ... Unless you set it up in package.json
 > Take a look at the package.json on the root folder AND also at the frontend Folder

44. How to start the frontEnd & BackEnd ?
Note there are two process to start:
1. FrontEnd:
  - Go to frontend folder and type in: "npm start"

2. BackEnd:
  - Go to Root folder and type in: "npm start"


46. How to install axios ?
- Go to frontend folder and type:
  npm i axios


51. How to create a proxy to connect from localhost:3000 to localhost:5000 ? 
- Go to frontend package.json
- Add in this line "proxy": "http://127.0.0.1:5000"
- Restart frontEnd Server



52. How to install nodemon ? 
- Go to root and type in:
npm i nodemon concurrently

53. How to install as Dev Dependencies ?
- Type in -D in npm install
Ex: 
npm i -D nodemon concurrently

- After install, it should get add into Dev depenencies 
Ex: 
  "devDependencies": {
    "concurrently": "^5.3.0",
    "nodemon": "^2.0.6"
  }


54. How to use nodemon ? 
- Install nodemon
- Once install go to your package.json 
- Go to the scripts and add in this line "server": "nodemon backend/server"
Ex:
 "scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server"
  },

55. How to run both Backend + FrontEnd at the same time
- Install concurrently
- Go to root package.json
- Add this line to scripts:
  "dev": "concurrently \"npm run server\" \"npm run client\""
- Go to root and type in:
  npm run dev
Ex:
  "scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },


57. How to install dotenv ?
- Type:
 npm i dotenv



Q60. How to convert from common JS syntax to ES6 Module
- Must have node v14.6+ a
  > How to install latest version of node ?
  > Use nvm ...Type in nvm install 14.51.1
- Go to package.json
- Add in "type": "module 
Ex: 
  "name": "mern_ecommerceapp",
  "version": "1.0.0",
  "description": "MERN shopping cart app",
  "main": "server.js",
  "type": "module",



63. How to connect through Compass ?
- Go to MongoDb Atlas
- Go to Clusters > connect > Connect using MongoDb Compass
- Select "I have MongoDB Compass"  
- Copy the connection string
- Paste into MongoDB Compass
  > Dont forget to change the password
  > Dont forgett to change from /test to /DatabaseNAME_XYZ ...(Ex: /proshop)
  Ex: mongodb+srv://timmanas:<password>@cluster0.9czdc.mongodb.net/proshop

64. How to connect your application to MongoDB URI
- Go to Atlas
- Go to Clusters > connect > Connect your application
- Copy connection string
- Place inside .env file
  > Dont forget to change the password
  > Dont forget to change dbname
Ex. MONGO_URI=mongodb+srv://timmanas:<Password>@cluster0.9czdc.mongodb.net/proshop?retryWrites=true&w=majority


67. How to install Mongoose ?
- Go to root:
  npm i mongoose



70. How to install bcryptjs ?
- npm i bcryptjs

Q73. How to hash passwords using bcrypt ? 


Q75. How to run seeder js file ?
- Go to root folder type in:
"node backend/seeder"      - Used for import data
"node backend/seeder -d"      - Used for destroying data
Or you can put in npm  by:
- modify package.json to be: 
  "scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "data:import": "node backend/seeder",
    "data:destroy": "node backend/seeder -d"
  },


77. How to install express-async-handler ?
Go to root folder, type in:
npm i express-async-handler



79. How to use your middleware ?
- You have to use:
app.use((req,res, next) => {})


Q122. How to install json webtoken ?
- npm i jsonwebtoken



Q123. How to generate a JSON WebToken ? 
import jwt from 'jsonwebtoken'
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

Q124: How to decode a JSON WebToken
- Take the token from Postman for logging in
Ex: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDE3NTc1NjY1ZGRjNDBjNDNlZTVjNiIsImlhdCI6MTYwODA4NTM3NiwiZXhwIjoxNjEwNjc3Mzc2fQ.7lxQ7c9mY3j0VArtu35Epx07TTCXJbuRpF1HDwaNZlw"
- Go to JWT.io
- Paste token into "Encoded"
- You can see the header, payload, signature 


Q135. How to move from one page to another ?
- use history.push()



Q140. How to log into Paypal developer account ?
- Go to: developer.paypal.com/developer/applications



151. How to create an app on paypal
- Go to Dashboard and click on "Create App"
- Copy Client ID and copy of .env file 



169. How to install morgan ?
- Go root:
npm i morgan



Q175. How to install react-helmet ?
- Go to frontend and type: 
npm i react-helmet




Q183. How to install Heroku ? 
- Go to root folder and type:
brew tap heroku/brew && brew install heroku

Q184. How to login into HEROKU CLU ? 
- Go to root:
heroku login
- Should open up a browser automatically
- Click on 'Log In'

Q185. How to create a Heroku application ?
- Go to root:
heroku create <NameOFApp...Must be UNIQUE>
Ex: heroku create proshop2021
- It will show you the application URL && git repository for Heroku
Ex:
https://proshop2021.herokuapp.com/ | https://git.heroku.com/proshop2021.git

Q186. How to push App to Heroku repository
- Push to Git
- Push to Heroku =) Thats it (git push heroku master ... or git push heroku main)

Q187. Before pushing app to heroku you will need the following:
1. ProcFile: Tells heroku what to run for our application
2. Add the postbuild script on the package.json field  
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false"

Q188. How to add Heroku as a remote repository ?

189. How to create a new Heroku Git repository
- Go to root folder 
- Must have git folder already initialized
- Type in this line:
heroku git:remote -a proshop2021
git push heroku master ... or git push heroku main



191. How to access the Heroku logs /
- Go to root of the folder:
heroku logs


194. How to convert from commonJS to ES6 (ECMA Script module) module syntax ? 
- Has to be above 14.6.0
- Two ways to do this:
a. Change file extention to '.mjs'
b. Add this line to package.json
{
  "type": "module"
}
