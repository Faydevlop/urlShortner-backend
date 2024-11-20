var express = require('express');
var router = express.Router();
const usercontroller = require("../controller/AuthController")
const jwtauth = require("../middleware/JWTverify")



// user signup
router.post('/signup',usercontroller.usersignup);
// user login
router.post('/login',usercontroller.userLogin)
// accept urls
router.post('/shortURL',jwtauth,jwtauth,usercontroller.shortURL)
// convert shorturls to normal
router.get('/:shortCode',usercontroller.redirectShortURL)
// getting user specific urls
router.get('/getURLs/:userId',jwtauth,usercontroller.getURLs)



module.exports = router;
