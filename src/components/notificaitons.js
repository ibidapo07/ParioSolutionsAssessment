import {React} from "react";
import {View,TouchableOpacity,Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import CustomButton from "./customButton";


function NotificationCard({title,text,text2,buttonOne,buttonTwo,inverted=true, hidden=!true}){
return(
    <View style={{backgroundColor : inverted? "#D4F1F4":"#189AB4", width: 350, height: 145, borderRadius: 7,flexDirection : "column",justifyContent : "space-evenly",paddingHorizontal: 20, marginVertical : 20}}>
        <View style={{flexDirection : "row",justifyContent : "space-between"}}>
            <Text style={{color: inverted? "#05445E":"white",fontSize: 16}}>{title}</Text>
            <MaterialCommunityIcons name="window-close" size={20} color={inverted? "#189AB4":"white"}/>
        </View>
        <View>
            <Text style={{color: inverted? "#189AB4": "white",fontSize: 10}}>{text}</Text>
            <Text style={{color: inverted? "#189AB4":"white",fontSize: 10}}>{text2}</Text>
        </View>
        <View style={{width: 150, flexDirection:"row",justifyContent:"space-between"}}>
            {hidden? "": 
            <>
                <CustomButton style={{backgroundColor : inverted? "#189AB4" : "white"}} stylefont={{color: inverted? "white" : "#05445E"}} show={buttonOne}/>
                <CustomButton style={{backgroundColor : "transparent", borderWidth: 1, borderColor: inverted? "#189AB4" : "white"}} stylefont={{color: inverted? "#05445E" : "white"}} show={buttonTwo}/>
       
            </>
            }
         </View>
    </View>
)
}

export default NotificationCard;