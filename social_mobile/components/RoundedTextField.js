import {View,Text,TextInput,StyleSheet} from "react-native"
const RoundedTextField = ({placeholder,secureEntry,marginHorizontal})=>{
  const styles = StyleSheet.create({

    textInput:{
      width:340,
      height:50,
      marginRight:40, 
      marginHorizontal:marginHorizontal||30,
      backgroundColor:"#c3c9e3",
      borderRadius:10,
      borderWidth:1,
      borderColor:"black",
      paddingLeft:20
    }
  
  });

    return(
        <View style={styles.textInput}>
           <TextInput secureTextEntry={secureEntry || false} placeholder={placeholder}  />
        </View>
    )

    
}

  
export default RoundedTextField