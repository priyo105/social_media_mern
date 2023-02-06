import mongoose from "mongoose";

const postSchema=mongoose.Schema(

{
    userId:{
        type:String,
        required: true
    },

    firstName:{
        type:String,
        required: true
    },

    lastName:{
        type:String,
        required: true
    },

    location:String,
    description:String,
    picturePath:String,
    userPicturePath:String,
    likes:{
        type: Map, // if liked, used id is added to the map
        of:Boolean,
    },

    comments : {
        types: Array,
        default: []
    },

},

{timestamps: true}

)


const Post= mongoose.model("Post",postSchema);
export default Post;
