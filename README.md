# boilerplate-MERN
A simple boiler plate which includes authentication and user controls.

## This project is hosted on website link:https://mern-boilerplate-by-shresthadev403.netlify.app



## Details of this project:

  This proect is made using using MERN Stack which includes react,express,node and mongodb.
  
  1) MongoDb database is created on Mongodb Atlas.(https://account.mongodb.com/account/login)
  
  2) Node and Express is used as backend for making routes and api which  is hosted on heroku.(https://id.heroku.com/login)
         
         
  3) you can use backend from these endpoints:
        
     ### Endpoints for backend:(https://mern-boilerplate-403.herokuapp.com)

            "/api": "Show endpoints",
            "/signup": "create new user in database",
            "/signin": "signin with email and password",
            "/sociallogin": "signin using social id google ,facebook,etc.",
            "/signout": "signed out the current user",
            "/users": " get all the users from database(only for admin)",
            "/user/:userId": "get a certain id with userid(only itself by subscriber but every user by admin)",
            "/user/update/:userId": "update user by subscriber itself or admin",
            "/user/delete/:userId": "delete the user by subscriber itself or admin",
            "/forgetpassword": "send a reset link to subscriber's mail with a token",
            "resetpassword": "reset passowrd  to new password"
            
            
            
  4) React is used at the froentend which is hosted on Netlify(https://www.netlify.com)
  
  5) Ready to use in any MERN Stack application.


## Use this proect:

 1) Clone the git repository.
 2) Run **npm install** to install dependencies.
 3) Run backend server with **node app**
 4) Run frontend react app with **npm start**

 **All done.Now you are good to go with the project**
