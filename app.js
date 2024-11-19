var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes/users');
var cors = require('cors'); 
const { default: mongoose } = require('mongoose');
require('dotenv').config();

var app = express();
const PORT = 3000

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));


app.use(
    cors({
      origin: (origin, callback) => {
        const allowedOrigins = ['http://localhost:3001', process.env.FRONT_END_URL];
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true, // Allow cookies and other credentials
    })
  );
  
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


app.use('/', usersRouter);

module.exports = app;

app.listen(PORT,()=>{
    console.log(`the server is running at http://localhost:${PORT}`);
    
})
