import {Text,TouchableOpacity,StyleSheet,View} from "react-native"
const RoundedButton = ({title,onPress,bgcolor,textColor,width})=>{
    const styles=StyleSheet.create({

        button:{
           width:width || 150,
           height:50,
           backgroundColor:bgcolor ||"navy",
           borderRadius:10,
           borderStyle:"solid"
        },
        text:{
            color:textColor||"#fff",
            textAlign:"center",
            padding:15,
            fontWeight:"bold"
        }
        
        
        })
 return (
     <View style={styles.button} >
         <TouchableOpacity onPress={onPress}>
               <Text style={styles.text}>{title}</Text>
         </TouchableOpacity>

     </View>
 )

}



export default RoundedButton