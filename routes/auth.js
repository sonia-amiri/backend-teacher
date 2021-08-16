const express = require('express');
const router = express.Router();

/* GET login. */
router.get('/login', function (req, res) {
	console.log('Hello Sonia!')
    res.json({name: "Hesam"})
    // Mongodb code
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
