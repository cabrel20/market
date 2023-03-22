const express = require("express");


// router

const router  = express.Router();

// controllers

const {signupUser,loginUser} = require("../controllers/user-controller")

// signup 

router.post("/signup",signupUser);

// login 

router.post("/login",loginUser)


module.exports=router ;