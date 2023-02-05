import jwt from "jsonwebtoken"



//middeleware - this will be called in every api call... to verify the token !!
export const verifyToken=(req,res,next)=>{

    try{
     let token=req.header("Authorization");
     if(!token){
        return res.status(403).send("Access Denied")
     }
    
     //if the token starts with Bearer we slice it down so that we can only get the token value
     if(token.startsWith("Bearer ")){
        token=token.slice(7,token.length).trimLeft();
     }

     const verified=jwt.verify(token,process.env.JWT_SECRET)
     req.user=verified;
     next();

    }catch(err){

    }


}