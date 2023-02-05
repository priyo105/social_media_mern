import User from "../models/Users.js"


//Read

export const getUser= async(req, res)=>{
    try{
      const {id}= req.params;
      const user= await User.findById(id);
      res.status(200).json(user);

    }catch(err){
        res.status(404).json({message:err.message})
    }
}


export const getUserFriends= async(req,res)=>{
 
  try{
    const {id} =req.params;
    const user= await User.findById(id);
   
    const friends=await Promise.all(
        user.friends.map((id)=>User.findById(id))
    )

    const formattedFriends=friends.map(
       ({_id,firstName,lastName, occupation, location, picturePath})=>{
        return {_id,firstName,lastName,occupation,location,picturePath}
       }
    )

    res.status(200).json(formattedFriends);
    }catch(err){
        res.staus(400).json({message:err.massage})
    }
}


export const addRemoveFriend= async(req,res)=>{
     try{
      const {id,friendId}= req.params;
      const user= await User.findById(id);
      const friend= await User.findById(friendId);
      
      if(user.friends.includes(friendId)){
        //if they are friend, we unfriend them
        user.friends=user.friends.filter((id)=>id!==friendId) //this will remove the friend Id from user friend list
        friend.friends=friend.friends.filter((id)=>id !== id) //this will remove the user from the friend's friend list   
      }else{
        //if they are not friend...we add them as friend..
        user.friends.push(friendId);
        friend.friends.push(id);
      }

      await user.save();
      await friend.save();
      
      const friends=await Promise.all(
        user.friends.map((id)=>User.findById(id))
    )

    const formattedFriends=friends.map(
       ({_id,firstName,lastName, occupation, location, picturePath})=>{
        return {_id,firstName,lastName,occupation,location,picturePath}
       }
    )

    res.status(200).json(formattedFriends);

     }catch(err){
        res.status(404).json({message:err.message})
     }
}