const router = require("express").Router();

//registering


router.post("/", async(req,res) => {
    try {

    // 1- destructure the req.body(name,email,password)

    // 2- check if user exist (if user exist then throw error)

    // 3- bcrypt the user password
    
    // 4- enter the new user inside our database

    // 5- generating our jwt token
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


module.exports = router;