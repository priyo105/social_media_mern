
import RoundedButton from "../components/RoundedButton";
import RoundedTextField from "../components/RoundedTextField";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import axios from "axios";
import {Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const loginHandle=(values,navigation)=>{
 console.log(values);
 axios.post('http://192.168.56.1:3001/auth/login',values)
 .then(response => {
   console.log(response.data)
   
 })
 .catch(error => {
   console.log(error);
 });

}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(3, 'Password must be at least 3 characters').required('Password is required'),
});



const Login = ({ handleSubmit,navigation}) => {
  return (


    <Formik
      initialValues={{email: '',password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values)=>console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>


              <Text style={styles.text}>PicTik</Text>
             <Text style={{textAlign:"center",marginTop:0,marginHorizontal:20, fontSize:30,fontWeight:"800",color:"navy"}}>Login Here </Text>
             <Text style={{textAlign:"center",marginTop:20,marginHorizontal:60, fontSize:18,fontWeight:"800",color:"black",fontFamily:'rubik'}}>Welcome Back, Your Friends are waiting for you to Join </Text>

           <View style={{marginTop:30}}>
             <RoundedTextField 
                   placeholder={"Email"} 
                  onBlur={handleBlur('email')} 
                  value={values.email} 
                  onChangeText={handleChange('email')} />
           </View>
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <View style={{marginTop:20}}>
          <RoundedTextField 
                   placeholder={"Password"} 
                  onBlur={handleBlur('password')} 
                  value={values.password} 
                  onChangeText={handleChange('password')} />
        </View>
        {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
         
         <View style={{marginTop:20}}>
          <RoundedButton  title="Submit" onPress={()=>{loginHandle(values,navigation)}} />
         </View> 
            <View>
               <Text style={{textAlign:"center",marginTop:20,marginHorizontal:60, fontSize:13,fontWeight:"800",color:"black",fontFamily:'rubik'}}>Create new account </Text>
          
              <Text style={{textAlign:"center",marginTop:20,marginHorizontal:60, fontSize:13,fontWeight:"800",color:"navy",fontFamily:'rubik'}}>Or continue with </Text>
              </View>

                      
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
        </View>

      )}
            
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:100,
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  text:{
    fontSize:20,
    color:"#00D5FA",
    fontWeight:"bold",
    textAlign:"center",
    marginVertical:50,
    fontFamily:"aa"
  }

});

export default Login;
