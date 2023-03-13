
import {View,Text,StyleSheet,Button, Alert} from "react-native"
import RoundedButton from "../components/RoundedButton";
import RoundedTextField from "../components/RoundedTextField";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';

const loginHandle=()=>{



}

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login= ({navigation})=>{

  const handleFormSubmit = async (values, onSubmitProps) => {
       console.log('entered here');
       console.warn('entered here');
  };

   return(

    <View >
          <Text style={styles.text}>PicTik</Text>
          <Text style={{textAlign:"center",marginTop:0,marginHorizontal:20, fontSize:30,fontWeight:"800",color:"navy"}}>Login Here </Text>
          <Text style={{textAlign:"center",marginTop:20,marginHorizontal:60, fontSize:18,fontWeight:"800",color:"black",fontFamily:'rubik'}}>Welcome Back, Your Friends are waiting for you to Join </Text>
          

      {/* main part here */}
      <Formik
    initialValues={{ email: '', password:'' }}
    validationSchema={loginSchema}
    onSubmit={handleFormSubmit}
    >
    {(props) => (
        <View>
          <View style={{marginTop:30}}>
            <RoundedTextField placeholder={"Email"} value={props.values.email} onChangeText={props.handleChange('email')}></RoundedTextField>
          </View>  

          <View style={{marginTop:30}}>
            <RoundedTextField placeholder={"Password"} value={props.values.password} secureEntry={true} onChangeText={props.handleChange('password')}></RoundedTextField>
          </View> 

          <Text style={{textAlign:"right",marginTop:20,marginHorizontal:40, fontSize:13,fontWeight:"600",color:"navy"}}>Forgot Your Password ? </Text>
          <View style={{marginTop:70,alignContent:"center", alignSelf:"center"}}>
            {/* <RoundedButton title={"Sign In"} width={300} onPress={handleSubmit}></RoundedButton> */}
            <Button  onPress={props.handleSubmit} title="Submit" />

          </View> 
     {/* main part here */}
     </View>
    )} 
     </Formik>


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

