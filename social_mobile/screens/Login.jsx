
import {View,Text,StyleSheet} from "react-native"
import RoundedButton from "../components/RoundedButton";
import RoundedTextField from "../components/RoundedTextField";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Login= ()=>{
   return(
    <View >
          <Text style={styles.text}>PicTik</Text>
          <Text style={{textAlign:"center",marginTop:0,marginHorizontal:20, fontSize:30,fontWeight:"800",color:"navy"}}>Login Here </Text>
          <Text style={{textAlign:"center",marginTop:20,marginHorizontal:60, fontSize:18,fontWeight:"800",color:"black",fontFamily:'rubik'}}>Welcome Back, Your Friends are waiting for you to Join </Text>
          

      {/* main part here */}

          <View style={{marginTop:30}}>
            <RoundedTextField placeholder={"Email"}></RoundedTextField>
          </View>  

          <View style={{marginTop:30}}>
            <RoundedTextField placeholder={"Password"} secureEntry={true}></RoundedTextField>
          </View> 

          <Text style={{textAlign:"right",marginTop:20,marginHorizontal:40, fontSize:13,fontWeight:"600",color:"navy"}}>Forgot Your Password ? </Text>
          <View style={{marginTop:70,alignContent:"center", alignSelf:"center"}}>
            <RoundedButton title={"Sign In"} width={300}></RoundedButton>
          </View> 
     {/* main part here */}



          <Text style={{textAlign:"center",marginTop:20,marginHorizontal:60, fontSize:13,fontWeight:"800",color:"black",fontFamily:'rubik'}}>Create new account </Text>
          
          <Text style={{textAlign:"center",marginTop:20,marginHorizontal:60, fontSize:13,fontWeight:"800",color:"navy",fontFamily:'rubik'}}>Or continue with </Text>
        
        <View style={{flexDirection:"row",marginHorizontal:100,marginTop:30}}>
                <Ionicons
                    testID="nextButton"
                    name="logo-google"
                    color="black"
                    padding={10}
                    backgroundColor="#d8e0ed"
                     size={24} />

                <Ionicons
                    testID="nextButton"
                    name="logo-facebook"
                    color="black"
                    marginLeft={30}
                    padding={10}
                    backgroundColor="#d8e0ed"
                     size={24} />

                <Ionicons
                    testID="nextButton"
                    name="logo-apple"
                    color="black"
                    marginLeft={30}
                    padding={10}
                    backgroundColor="#d8e0ed"
                     size={24} />


        </View>
          <View>
          </View>
    </View>
   )
}
const styles = StyleSheet.create({

    text:{
      fontSize:20,
      color:"#00D5FA",
      fontWeight:"bold",
      textAlign:"center",
      marginVertical:50,
      fontFamily:"aa"
    }
  
  });
  
export default Login

