
import RoundedButton from "../components/RoundedButton";
import RoundedTextField from "../components/RoundedTextField";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import {Text, View, TextInput, Button, StyleSheet } from 'react-native';

const loginHandle=()=>{



}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});


// const Login= ({navigation})=>{

//   const handleFormSubmit = async (values, onSubmitProps) => {
//        console.log('entered here');
//        console.warn('entered here');
//   };

//    return(

//     // <View >
//     //       <Text style={styles.text}>PicTik</Text>
//     //       <Text style={{textAlign:"center",marginTop:0,marginHorizontal:20, fontSize:30,fontWeight:"800",color:"navy"}}>Login Here </Text>
//     //       <Text style={{textAlign:"center",marginTop:20,marginHorizontal:60, fontSize:18,fontWeight:"800",color:"black",fontFamily:'rubik'}}>Welcome Back, Your Friends are waiting for you to Join </Text>
          

//     //   {/* main part here */}
//       <Formik
//           initialValues={{ email: '', password: '' }}
//           validationSchema={validationSchema}
//           onSubmit={(values)=>console.log(values)}
//     >
//     {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//         <View>
//           <View style={{marginTop:30}}>
//             <RoundedTextField 
//                  placeholder={"Email"} 
//                  onBlur={handleBlur('email')} 
//                  value={values.email}
//                  onChangeText={handleChange('email')}/>
//                   {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
//           </View>  

//           <View style={{marginTop:30}}>
//             <RoundedTextField 
//                    placeholder={"Password"}  
//                    onBlur={handleBlur('password')} 
//                    value={values.password}
//                    secureEntry={true}
//                    onChangeText={handleChange('password')} />
//           </View> 

//                      <TextInput
//             style={styles.input}
//             placeholder="Email"
//             onChangeText={handleChange('email')}
// onBlur={handleBlur('email')}
//             value={values.email}
//           /> 

//           <Text style={{textAlign:"right",marginTop:20,marginHorizontal:40, fontSize:13,fontWeight:"600",color:"navy"}}>Forgot Your Password ? </Text>
//           <View style={{marginTop:70,alignContent:"center", alignSelf:"center"}}>
//             {/* <RoundedButton title={"Sign In"} width={300} onPress={handleSubmit}></RoundedButton> */}
//             <Button  onPress={handleSubmit} title="Submit" />

//           </View> 
//      {/* main part here */}
//      </View>
//     )} 
//      </Formik>


//           /* <Text style={{textAlign:"center",marginTop:20,marginHorizontal:60, fontSize:13,fontWeight:"800",color:"black",fontFamily:'rubik'}}>Create new account </Text>
          
//           <Text style={{textAlign:"center",marginTop:20,marginHorizontal:60, fontSize:13,fontWeight:"800",color:"navy",fontFamily:'rubik'}}>Or continue with </Text>
        
//         <View style={{flexDirection:"row",marginHorizontal:100,marginTop:30}}>
//                 <Ionicons
//                     testID="nextButton"
//                     name="logo-google"
//                     color="black"
//                     padding={10}
//                     backgroundColor="#d8e0ed"
//                      size={24} />

//                 <Ionicons
//                     testID="nextButton"
//                     name="logo-facebook"
//                     color="black"
//                     marginLeft={30}
//                     padding={10}
//                     backgroundColor="#d8e0ed"
//                      size={24} />

//                 <Ionicons
//                     testID="nextButton"
//                     name="logo-apple"
//                     color="black"
//                     marginLeft={30}
//                     padding={10}
//                     backgroundColor="#d8e0ed"
//                      size={24} />


//         </View> */
         
          
 
 
//    )
// }






// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

const Login = ({ handleSubmit }) => {
  return (


    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values)=>console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>

 
{/* 
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          /> */}
              <Text style={styles.text}>PicTik</Text>
             <Text style={{textAlign:"center",marginTop:0,marginHorizontal:20, fontSize:30,fontWeight:"800",color:"navy"}}>Login Here </Text>

           <View style={{marginTop:30}}>
             <RoundedTextField 
                   placeholder={"Email"} 
                  onBlur={handleBlur('email')} 
                  value={values.email} 
                  onChangeText={handleChange('email')} />
           </View>
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <View style={{margin:20}}>
          <RoundedTextField 
                   placeholder={"Password"} 
                  onBlur={handleBlur('password')} 
                  value={values.password} 
                  onChangeText={handleChange('password')} />
          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
        </View>
          <RoundedButton title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
