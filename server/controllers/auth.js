import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/Users.js"

//REGISTER USER

export const register = async(req, res)=>{
    try{
    //grabbing data from request body (aka Frontend)
    const{
        firstName,
        lastName,
        email,
        password,
        picture,
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
        picture,
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



//LOG IN
export const login= async(req, res)=>{
    try{
        const {email,password}= req.body;
        const user = await User.findOne({email:email})
        if(!user) return res.status(400).json({msg:"User does not exist :"});

        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({msg:"Invalid Credentials"})

        const token= jwt.sign({id:user._id},process.env.JWT_SECRET)
        delete user.password

        res.status(200).json({token,user})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}