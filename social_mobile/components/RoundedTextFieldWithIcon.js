import {View,Text,TextInput,StyleSheet} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';

const RoundedTextFieldWithIcon = ({placeholder,secureEntry,marginHorizontal,iconName})=>{
  const styles = StyleSheet.create({
    textInput:{
      width:300,
      height:47,
      marginRight:40, 
      marginHorizontal:marginHorizontal||30,
      backgroundColor:"#c3c9e3",
      borderRadius:10,
      borderColor:"black",

      paddingLeft:10
    },
    searchSection: {
    
        flexDirection: 'row',
        borderRadius:10,
        backgroundColor:"#c3c9e3",
        marginRight:30,
        width:350,
        height:50,
        borderWidth:1,
        borderColor:"black",
    },
  
  });

    return(

           <View style={styles.searchSection}>
                   <Ionicons
                    testID="nextButton"
                    name={iconName}
                    color="navy"                  
                    padding={10}
                     size={24} />

                 <TextInput style={styles.textInput} secureTextEntry={secureEntry || false} placeholder={placeholder}  />
            </View>  
    )

    
}

  
export default RoundedTextFieldWithIcon