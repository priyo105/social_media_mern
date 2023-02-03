import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "./models/Users.js"

//REGISTER USER

export const register = async(req, res)=>{
    try{
    //grabbing data from request body (aka Frontend)
    const{
        firstName,
        lastName,
        email,
        password,
        picturePath,
        friends,
        location,
        ocupation
     }=req.body;  // getting these data from FrontEnd.
    
    const salt= await bcrypt.genSalt(); //use this to dcrypt the password
    const passwordHash=await bcrypt.hash(password,salt)

    const newUser=new User({
        firstName,
        lastName,
        email,
        password: passwordHash,
        picturePath,
        friends,
        location,
        ocupation,
        viewedProfile: Math.floor(Math.random()*10000) // adding a dummy value here 
    })
  
    const savedUser= await newUser.save();
    res.status(201).json(savedUser); // Frontend will recieve this response. 
    }catch(err){
    res.status(500).json({error:err.message});
   }
}