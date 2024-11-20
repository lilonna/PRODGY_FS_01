const express = require('express');

const path = require('path');
const dotenv =require('dotenv').config();
const cors = require('cors');
const mongoose= require('mongoose');
const cookieParser= require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));



mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('mongo db connected'))
.catch((err)=> console.log(err))


app.use(cors({
    origin: 'http://localhost:5173',  // Allow this origin only
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
    credentials: true,  // Allow credentials (cookies, headers, etc.)
  }));
app.use('/', require('./routes/authRoute'))


const PORT = 8000;
app.listen(PORT,()=>{
    console.log("server is runing");
})


