//const bodyParser = require('body-parser');
const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// mongoose.connect( 'mongodb://online-test:secret@mongo:27017/online-test', {
mongoose.connect( 'mongodb://online-test:secret@127.0.0.1:27017/online-test', {
            useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true
            // user:"",
            // pass:""
 });

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true)

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!

app.use(express.json());
app.use(cors());


const authRouter = require('./routes/auth');
const examRouter = require('./routes/exam');


app.use('/auth', authRouter);
app.use('/exam', examRouter);

//app.use(bodyParser.json());



const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`server started on port ${port}`));



