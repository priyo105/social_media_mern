
import { useState } from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from "@mui/material"

import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu, 
    Close
} from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux";
import { setMode,setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
 

const NavBar= ()=>{
 
    const [isMobileMenuToggled, setIsMobileMenuToggled]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector((state)=>state.user)
    const isNonMobileScreens=useMediaQuery("(min-width:1000px)")

    const theme=useTheme()
    const neutralLight= theme.palette.neutral.light;
    const dark=theme.palette.neutral.dark;
    const background= theme.palette.background.default;
    const primaryLight=theme.palette.primary.light;
    const alt= theme.palette.background.alt;

    // const fullName= `${user.firstName} ${user.lastName}` 

 
    return <FlexBetween padding="1rem 6%" backgroundColor={alt}>
              
            <FlexBetween gap="1.75rem">
              <Typography
                    fontWeight="bold"
            //    clamp adjusts with screen size
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    onClick={()=>navigate("/home")}
                    sx={{
                        "&:hover":{
                            color:primaryLight,
                            cursor:"pointer",
                        }
                    }}
                    >   
                Friendz hub  
              </Typography>
              
              {/* if the website is not rendered in mobile, we will show the search bar */}
               {isNonMobileScreens && (

                 <FlexBetween 
                    backgroundColor={neutralLight}
                    borderRadius="9P"
                    gap="3rem"
                    padding="0.1rem 1.5rem">
                     <InputBase placeholder="Search....."></InputBase>
                     <IconButton>
                       <Search> </Search>  
                     </IconButton>
                 </FlexBetween>
                 
               )}

            </FlexBetween>    
         
            {isNonMobileScreens ? (
            <FlexBetween gap="2rem"> 
               <IconButton onClick={()=>{dispatch(setMode())}}>
                  {theme.palette.mode==="dark"? (
                    <DarkMode sx={{fontSize:"25px"}}></DarkMode>
                  ) :
                  (
                    <LightMode sx={{fontSize:"25px",color:dark}}></LightMode>
                  )
                
                
                }

               </IconButton>
               <Message sx={{fontSize:"25px"}} ></Message>
               <Notifications sx={{fontSize:25}}></Notifications>
               <Help sx={{fontSize:"25px"}}></Help>
            </FlexBetween>
            ): (
            <IconButton></IconButton>
            )} 



           </FlexBetween>

};

export default NavBar;