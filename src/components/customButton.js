import {React} from "react";
import {View,TouchableOpacity,Text} from "react-native";
import {} from "@expo/vector-icons"

function CustomButton({show,style,stylefont}){
    return(
        <TouchableOpacity>
            <View style={[{width: 66, height: 19, borderRadius:2,backgroundColor : "white",alignItems:"center",justifyContent:"center"},style]}>
                <Text style={[{fontSize : 10},stylefont]}>{show}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton;