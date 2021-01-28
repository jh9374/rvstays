const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { environment } = require('./config');
const routes = require("./routes");
const { ValidationError } = require("sequelize");
const bodyParser = require('body-parser')

//checking if environment is in production
const isProduction = environment === 'production';
//initializing express
const app = express();
//Connecting morgan middleware for logging request and response info
app.use(morgan('dev'));
//Adding cookie-parser middleware for parsing cookies
app.use(cookieParser());
//Adding express.json middleware for parsing JSON bodies from request with Content-Type: 'application/json'
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Allowing CORS in development only
if(!isProduction){
    app.use(cors());
}
//Setting helmet middleware to add security to app
app.use(helmet({
    //Disabling this feature because React handles this
    contentSecurityPolicy: false
}))
//Setting up _csrf token and creating req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        },
    })
);
//connecting routes to use through app
app.use(routes);

//Error handlers

//Catching unhandled requests and sending to error handler
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

//Setting up sequelize errors
app.use((err, _req, _res, next) => {
    //Checking if error is a sequelize error
    if(err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = "Validation error";
    }
    next(err);
});

//Setting up error formatter
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    })
})

module.exports = app;