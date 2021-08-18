const express = require('express');
const router = express.Router();
const student = require('./../model/student.js');

/* POST login. */
router.post('/login', async function (req, res) {
	console.log('login!', req.body)
    
    // Mongodb code
    let value = await student.findOne({password:req.body.password, name:req.body.username});
    if (value) {
        res.json({redirect: "Teacher"})
    } else {
        res.json({redirect: "RegisterTeacher"})
    }
});

router.post('/search',function (req, res) {
    console.log(req.body)
    const name = req.body.name
    const time = req.body.time
    console.log('Hello Sonia! Name:', name, ' time:', time)
    res.json({result:'succesful'})
});

router.post('/register', function(req, res) {
    console.log( req.body);
    res.json({result : 'successful'})
})
module.exports = router;
