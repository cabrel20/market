 const User = require("../models/user")


// signup controller

const signupUser = async(req,res)=>{
     const {name,email,password} = req.body ;

     const userExist = await User.findOne(email);
     
     if(userExist){
      res.status(400).json({message:"This user exists"})
     }else{
      const user = await User.create({name:name,email:email,password:password});
      if(!user){
         res.status(404).json("No such")
      }
      res.status(200).json(user)
     }

}

// login controller

const loginUser =(req,res)=>{
   res.json("Logging user !")
}

module.exports ={signupUser,loginUser}