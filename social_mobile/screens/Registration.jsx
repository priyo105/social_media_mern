import {View,Text,StyleSheet} from "react-native"
import RoundedButton from "../components/RoundedButton";
import RoundedTextField from "../components/RoundedTextField";
import RoundedTextFieldWithIcon from "../components/RoundedTextFieldWithIcon";
const Registration=()=>{
  return(
     <View style={{marginLeft:26}}>

            <Text style={styles.text}>PicTik</Text>

       <Text style={{marginTop:20, fontSize:30,color:"black",fontWeight:"bold"}}>
        Register
       </Text>

       <Text>Enter Your Details to Register</Text>
       
       <View style={{marginTop:40}}>
         <Text style={{marginLeft:0,marginBottom:5,fontWeight:"700"}}>Email</Text>
         <RoundedTextFieldWithIcon placeholder={"Enter Email"} marginHorizontal={1} iconName={"mail"} />
       </View>

       <View style={{marginTop:10}}>
         <Text style={{marginLeft:0,marginBottom:5,fontWeight:"700"}}>Name</Text>
         <RoundedTextFieldWithIcon placeholder={"Enter First Name"} marginHorizontal={1} iconName={"person"} />
       </View>

       <View style={{marginTop:10}}>
         <RoundedTextFieldWithIcon placeholder={"Enter Last Name"} marginHorizontal={1} iconName={"person"} />
       </View>


       <View style={{marginTop:10}}>
          <Text style={{marginLeft:0,marginBottom:5,fontWeight:"700"}}>Location</Text>
         <RoundedTextFieldWithIcon placeholder={"Where Do you Live ? Your Location "} marginHorizontal={1} iconName={"location"} />
       </View>

       <View style={{marginTop:10}}>
          <Text style={{marginLeft:0,marginBottom:5,fontWeight:"700"}}>Occupation</Text>
         <RoundedTextFieldWithIcon placeholder={"Whats Your Occupation? "} marginHorizontal={1} iconName={"clipboard"} />
       </View>

       <View style={{marginTop:10}}>
          <Text style={{marginLeft:0,marginBottom:5,fontWeight:"700"}}>Password</Text>
         <RoundedTextFieldWithIcon placeholder={"Password"} secureEntry={true}  marginHorizontal={1} iconName={"key"} />
       </View>

        <View style={{alignItems:"center",marginVertical:40}}> 
        <RoundedButton title={"Register"} width={250} bgcolor="navy" textColor={"#FBEEEB"}></RoundedButton>
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
    marginTop:40,
    fontFamily:"aa"
  }

});

export default Registration;