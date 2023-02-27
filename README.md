# MERN Stack Project with JWT Token Authentication

This is an extension of the basic MERN (MongoDB, Express, React, Node.js) stack project with user authentication using JWT (JSON Web Tokens),
with an added admin panel feature. This project allows users to register, login, access protected routes once authenticated, 
and for admin users to block and unblock users.all using the Axios library for HTTP requests.


# Project Structure

In this project, we're using JWT-based user authentication and authorization. When a user successfully logs in, the server generates a JWT token and sends it back to the client.
The client stores the token in Redux and sends it with each subsequent request to protected routes.


# Redux Store for JWT Token

* Redux for state management

In this project, we're using Redux/toolkit(abstract version of redux) to store and manage the JWT token. When a user logs in , we dispatch actions to the Redux store to save the token.
We can then access the token from the store to send it with each subsequent request.

# Technologies Used

* MongoDB 
* Express.js
* React.js
* Node.js
* JSON Web Tokens (JWT)
* Redux/toolkit

# Features

* User registration
* User login
* JWT authentication
* Axios HTTP requests for client-server communication
* Hashed passwords using bcrypt


# Client

The client is built using create-react-app and uses react-router-dom for routing. The App.js component is the entry point for the application.
App.js contain 2 componets AdminComponent,UserComponent that's included seperate routing logic. it helpful for ClearCode.
Axios is used for making HTTP requests to the backend API. The axios directory contains a baseurl of backend url.

# Server
The server is built using Express.js and uses Mongoose to interact with the MongoDB Atlas database. The app.js file is the entry point for the server and contains the server logic.
The models directory contains the Mongoose models used to interact with the database. The routes directory contains the routes used in the application.

# Admin Panel
The admin panel allows admin users to view and manage users. Admin users can block and unblock users, which will prevent or allow them from logging in to the application

# Conclusion
This project is an example of how to implement user authentication using JWT tokens in a MERN stack application, with an added admin panel feature, and using Axios for HTTP requests.
