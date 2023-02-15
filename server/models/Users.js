import mongoose from "mongoose";
const UserSchema= new mongoose.Schema(
    {
      firstName:{
        type:String,
        required:true,
        min:2, //mininmum 2 letter
        max:50 //maximum 50 letter
      },
      lastName:{
        type:String,
        required:true,
        min:2, //mininmum 2 letter
        max:50 //maximum 50 letter
      },
      email:{
        type:String,
        required:true,
        max:50,
        unique:true
      },
      password:{
        type:String,
        required:true,
        min:5
      },
      friends:{  //friend list will come from relation 
        type: Array,
        default:[]
      },
      location: String,
      ocupation: String,
      viewedProfile: Number,
      impressions:Number,
    },{
        timestamps:true
    }
)

const User=mongoose.model("User",UserSchema)
export default User;
