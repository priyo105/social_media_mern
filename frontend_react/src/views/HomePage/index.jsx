import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "../navBar";
import { Box } from "@mui/material";
import UserWidgets from "../widgers/UserWidgets";
import MyPostWidget from "../widgers/MyPostWidget"
import PostsWidget from "../widgers/PostsWidget";
const HomePage = ()=>{
   
  const isNonMobileScreens= useMediaQuery("(min-width:1000px)")
  const {_id,picturePath}=useSelector((state)=>state.user);

  return (
  <div>
     <Navbar></Navbar>

     <Box width="100%"
          padding="2rem 6%"
          display={isNonMobileScreens?"flex":"block"}
          gap="0.5rem"
          justifyContent="space-between"
     >
      <Box flexBasis={isNonMobileScreens?"23%" : undefined} >
         <UserWidgets userId={_id} picturePath={picturePath}></UserWidgets>
      </Box>

      <Box flexBasis={isNonMobileScreens? "42%" :undefined} 
            mt={isNonMobileScreens ? undefined :"2rem"}>

           <MyPostWidget picturePath={picturePath} />   
           <PostsWidget userId={_id} />

      </Box>
       
       {isNonMobileScreens && <Box flexbasis="26%" />}  

     </Box> 


  </div>
  
  )

}

export default HomePage;