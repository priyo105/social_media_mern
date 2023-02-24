import { createSlice } from "@reduxjs/toolkit";
// this data is accessable throughout the entire application
const initialState={
    mode:"light", //dark mode or light mode
    user:null, 
    token: null,
    posts:[]
}

export const authSlice=createSlice({
    name:"auth",
    initialState,

    reducers:{
      setMode: (state)=>{
        state.mode= state.mode === "light"?"dark":"light" //if light, then light other wise dark    
      },

      setLogin: (state,action)=>{
        state.user=action.payload.user;
        state.token=action.payload.token
      },

      setLogout:(state)=>{
        state.user=null;
        state.token=null;
      },

      setFriends: (state,action) =>{
      
        if(state.user){
            state.user.friends = action.payload.friends
        }else{
            console.error("User Does not have any friends....")
        }
      },
      setPosts:(state,action)=>{
       state.posts=action.payload.posts;
      },
      setPost: (state,action)=>{
        const updatedPosts= state.posts.map((post)=>{
          console.log("xxx"+action.payload.post._id+"::"+post._id)
            if(post._id === action.payload.post._id) return post;
            return post;
        })
      }

    }
})

export const {setMode,setLogin,setLogout,setFriends,setPosts, setPost}=authSlice.actions;
export default  authSlice.reducer;