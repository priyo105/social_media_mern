import {View,ImageBackground,Text} from "react-native"
import RoundedButton from "../components/RoundedButton"
const Home=({navigation})=>{
    return (
    <View>
        <ImageBackground source={require('../assets/images/social-media.png')} resizeMode="cover" style={{width:300,height:300,alignSelf:"center",marginTop:40}} >
       </ImageBackground>

        <Text style={{textAlign:"center",marginTop:60,marginHorizontal:20, fontSize:25,fontWeight:"800",color:"navy"}}>Share Your Life Stories With Your Buddies </Text>
        <Text style={{fontFamily:"Roboto", textAlign:"center",marginTop:45,marginHorizontal:20, fontSize:14,color:"black"}}>Make new friends, Post your daily status, stay connected with your family and friends !</Text>
        
        <View style={{marginHorizontal:40,marginVertical:40,flexDirection:"row"}}>
         <RoundedButton title="Login" onPress={()=>{navigation.navigate("Login")}} />
         <RoundedButton title="Register" bgcolor={"transparent"} textColor={"black"} />
        </View>
    </View>
    )
}

export default Home

