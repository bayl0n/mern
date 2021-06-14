# ShoppingList
A project used to learn the MERN stack

# What is the MERN stack?
The MERN stack is a collection of software that are used together to create a full-stack web application. It is an acronym for:
* **M**ongoDB
* **E**xpress
* **R**eact
* **N**ode.js

# Installing packages

**NOTE: Make sure you follow this step if this your first time running the project after installing it**

## Server packages

To install the server packages, run

```
npm install
```

## Client packages

After, to install the client packages, run

```
npm run client-install
```

# Run Scripts

To run both the **server and client** script concurrently, use
```
npm run dev
```

In the case you want to only run the **server** use
```
npm run server
```

Likewise, to run the **client** only use
```
npm run client
```

# Setup

## Backend
### Express API using mongoose to interact with MongoDB
To start off, we need to initialise npm:
```
npm init
```
Then we have to install some packages for the backend
```
npm i express body-parser mongoose concurrently
```
To break down what we are installing:
* **express** - back-end web framework
* **body-parser** - middleware
  * extracts the entire body portion of an incoming request stream and exposes it on req.body
* **mongoose** - MongoDB object modelling tool
* **concurrently** - allows to run more than one npm script at a time

We will now install `nodemon` as a dev dependency, which is a package that isn't needed for production.

```
npm i -D nodemon
```
What nodemon does is that it allows us to make changes to the server without restarted the script to run it everytime.

Now that we have everything installed, we can now create our `start` script in `package.json`

```
"scripts": {
    "start": "node server.js"
},
```
This is the script that will be run in production. However, since we want to utilise the functionality of `nodemon` we will create another script for it.

```
"scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
},
```

Now we can create our `server.js` file
