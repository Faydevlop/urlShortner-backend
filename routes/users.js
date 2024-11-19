var express = require('express');
var router = express.Router();
const usercontroller = require("../controller/AuthController")
// import authenticateToken from '../middleware/JWTverify';



// user signup
router.post('/signup',usercontroller.usersignup);
// user login
router.post('/login',usercontroller.userLogin)

router.post('/shortURL',usercontroller.shortURL)

router.get('/:shortCode',usercontroller.redirectShortURL)

router.get('/getURLs/:userId',usercontroller.getURLs)



module.exports = router;
