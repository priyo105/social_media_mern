import {View,Text,TextInput,StyleSheet} from "react-native"
const RoundedTextField = ({placeholder,secureEntry})=>{

    return(
        <View style={styles.textInput}>
           <TextInput secureTextEntry={secureEntry || false} placeholder={placeholder} />
        </View>
    )
}
const styles = StyleSheet.create({

    textInput:{
      width:340,
      height:50,
      marginRight:40, 
      marginHorizontal:30,
      backgroundColor:"#c3c9e3",
      borderRadius:10,
      borderWidth:1,
      borderColor:"black",
      paddingLeft:20
    }
  
  });
  
export default RoundedTextField