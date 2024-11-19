require('dotenv').config();
const User = require('../model/userModel');
const generateToken = require('../JWT/util');
const { comparePassword, hashPassword } = require('../JWT/hash');
const Link = require('../model/linksModel');
const crypto = require('crypto');



exports.usersignup = async (req,res)=>{
    try {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password)
    const existUser = await User.findOne({ email: email });
    if(existUser){
        return res.status(400).json({message:'User already exist'})
    }
    const user = await User.create({username,email,password:hashedPassword})
    const token = generateToken(user._id)
    res.status(200).json({message:'User Created successfully',token,user})
    } catch (error) {
    res.status(500).json({ message: error.message });
    }   
}

exports.userLogin = async(req,res)=>{
    console.log('req is here');
    
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
        const token = generateToken(user._id);
        res.status(200).json({ message: "Login successful", token,user });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.shortURL = async (req,res)=>{

    try {
        
        const {url,userId} = req.body;
        console.log('req is here',req.body);
        
    
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }
    

    // Generate a random string for the short URL (6 characters)
    const shortCode = crypto.randomBytes(3).toString('hex');
    const shortURL = `${process.env.BACKEND_URL}/${shortCode}`;

    const createdURL = new Link({
        userId:userId,
        normalLink:url,
        shorterLink:shortURL,
    })

    await createdURL.save().catch(err => {
        return res.status(500).json({ error: 'Failed to save URL in database', details: err.message });
    });
    

    
    // Log to console for now (you'd typically store this in a database)
    console.log(`Original URL: ${url}, Shortened URL: ${shortURL}`);

    // Respond with the shortened URL
    res.status(200).json({ originalUrl: url, shortenedUrl: shortURL });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

    
   
}

exports.redirectShortURL = async (req, res) => {
    try {
        console.log('Request received for redirect');

        const { shortCode } = req.params; // Extract the short code from the URL

        // Find the entry where `shorterLink` ends with the `shortCode`
        const link = await Link.findOne({ shorterLink: { $regex: `${shortCode}$` } });

        if (!link) {
            console.log('Short URL not found');
            return res.status(404).json({ error: 'Short URL not found' });
        }

        console.log('Redirecting to:', link.normalLink);

        // Redirect to the original URL
        return res.redirect(link.normalLink);
    } catch (error) {
        console.error('Error during redirect:', error.message);
        res.status(500).json({ error: 'An error occurred', details: error.message });
    }
};

exports.getURLs = async(req,res)=>{
    try {
        const {userId} = req.params

        const links = await Link.find({userId:userId});

        res.status(200).json({links})


    } catch (error) {
        res.status(500).json({ error: 'An error occurred', details: error.message });
    }
}


