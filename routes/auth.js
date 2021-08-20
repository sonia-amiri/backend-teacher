const express = require('express');
const router = express.Router();
const student = require('./../model/student.js');

/* POST login. */
router.post('/login', async function (req, res) {
	console.log('login', req.body)
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

router.post('/register', async function(req, res) {
    console.log( req.body);
    await student.create({
        name: req.body.username,
        mobile: req.body.mobile,
        password: req.body.password,
        email: req.body.email
    }).catch(console.log)
    res.json({result : 'successful'})
})
module.exports = router;
