import{
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined
     
} from "@mui/icons-material";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Box,Typography,Divider,useTheme} from "@mui/material"
import UserImage from "../../components/UserImage";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useSelector } from "react-redux";
import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";


const UserWidgets=({userId,picturePath})=>{
    
  const [user,setUser]=useState(null);
  const {pallete} = useTheme();
  const navigate= useNavigate();
  const token= useSelector((state)=>state.token);

//   const dark= pallete.neutral.dark;

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  const medium=theme.palette.neutral.medium;
  const main=theme.palette.neutral.mediumMain;

  //api call for user
  const getUser= async()=>{
    const response= await fetch(`http://localhost:3001/user/${userId}`,{
        method:"GET",
        headers:{Authorization:`Bearer ${token}`}
    });
    const data= await response.json();
    setUser(data);
  }


  useEffect(()=>{
    getUser()
  },[])


  if (!user){
    return null;
  }
 
  const {
    firstName,
    lastName,
    location,
    ocupation,
    viewedProfile,
    impressions,
    friends
  } =user;
 
 return (
    <WidgetWrapper>
         <FlexBetween
           gap="0.5rem"
           pb="1.1rem"
           onClick={()=>{navigate(`/profile/${userId}`)}}
         >
            <UserImage image={picturePath}></UserImage>
            <Box>
                <Typography
                  variant="h4"
                  color={dark}
                  fontWeight="500"
                  sx={{
                    "&:hover":{
                        color: "red",
                        cursor:"pointer"
                    }
                  }} 
                >
                  {firstName} {lastName}
                </Typography>
                <Typography color={medium}>{friends.length} friends</Typography>

            </Box>
            
            <ManageAccountsOutlined />
            </FlexBetween>

            <Divider />

            {/* second Row */}

            <Box p="1rem 0">
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                   <LocationOnOutlined fontSize="large" sx={{color:main}}></LocationOnOutlined>
                   <Typography color={medium}>{location} </Typography>
                </Box>

                <Box display="flex" alignItems="center" gap="1rem">
                   <WorkOutlineOutlined fontSize="large" sx={{color:main}}></WorkOutlineOutlined>
                   <Typography color={medium}>{ocupation} </Typography>
                </Box>
             </Box>

             <Divider />

              {/* third row */}

              <Box p="1rem 0">
                 <FlexBetween mb="0.5rem">
                     <Typography color={medium}>Who's viewed your profile</Typography>
                     <Typography>
                        {viewedProfile}   
                     </Typography>     
                 </FlexBetween>

                 <FlexBetween mb="0.5rem">
                     <Typography color={medium}>Impressions of Your Post</Typography>
                     <Typography>
                        {impressions}   
                     </Typography>     
                 </FlexBetween>
              </Box>

              <Divider />

          {/* Fourth Row */}

          <Box p="1rem 0">
            <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
              Social Profiles
            </Typography> 

            <FlexBetween gap="0rem" mb="0.5rem">
             <TwitterIcon ></TwitterIcon>
               <Box mr="10rem">
                 <Typography  color={main} fontWeight="500">
                    Twitter
                 </Typography>

                 <Typography color={medium}>Social Network</Typography>
                 </Box>  
                 <EditOutlined sx={{color:main}}></EditOutlined> 

            </FlexBetween> 

            <FlexBetween gap="0rem" mb="0.5rem">
             <LinkedInIcon />
               <Box mr="10rem">
                 <Typography  color={main} fontWeight="500">
                    Linkdin
                 </Typography>

                 <Typography color={medium}>Social Network</Typography>
                 </Box>  
                 <EditOutlined sx={{color:main}}></EditOutlined> 

            </FlexBetween> 

            

             
          </Box>

    </WidgetWrapper>
 )

}

export default UserWidgets;









