const bodyParser = require('body-parser');
const express = require ('express');
const cors = require('cors');

const app = express(); 

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!

app.use(express.json());
const authRouter = require('./routes/auth');


app.use(cors());
app.use('/auth', authRouter);

app.use(bodyParser.json());



const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`server started on port ${port}`));



