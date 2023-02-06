import Post from '../models/Post.js'
import User from '../models/Users.js';


//Create 

export const createPost= async (req,res)=>{
    try{

     const {userId,description, picturePath}=req.body;
     const user= await User.findById(userId);
     const newPost= new Post(      
        {
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location:user.location,
            description,
            picturePath: picturePath,
            userPicturePath:user.picturePath,
            likes:{},
            comments:[]

        })

    await newPost.save();   
    const posts=await Post.find();
    res.status(201).json(posts)
    }catch(err){
        res.status(404).json({message:err.message})
    }
}





//READ

export const getFeedPosts= async (req, res)=>{

    try{
     const post= await Post.find();
     res.status(200).json(post);
    }catch(err){
     res.status(404).json({message:err.message})
    }

}


export const getUserPosts =async (req, res)=>{
  
  const {userId}= req.params   
  try{
    const post= await Post.find({userId});
    res.status(200).json(post);
  } catch(err){
    res.status(404).json(err.message)
  }

}

///UPADATE

export const likePost= async(req, res)=>{

 try{
    const {id}= req.params;
    const {userId} =req.body;
    const post= await Post.findById(id);
    const isLiked= post.likes.get(userId); //if userid exists in liked array

    if(isLiked){
        post.likes.delete(userId)
    }else{
        post.likes.set(userId, true)
    }
     
   //updating the post  
   const updatedPost= await Post.findByIdAndUpdate(
    id,
    {likes: post.liles},
    {new: true}
   )
   
   res.status(200).json(updatedPost)


 }catch(err){
    res.status(404).json(err.message)
 }

}








