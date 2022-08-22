import {React} from "react";
import {ScrollView,View,Text,SafeAreaView,Image} from "react-native";
import {Entypo,Fontisto} from "@expo/vector-icons"

function Planner({children,style,text}){
    return(
        
        <View style={[{ flexDirection:"row", justifyContent:"space-evenly",width: "100%", height: 90, borderRadius: 7, alignItems: "center", marginBottom: 10},style]}>
            <Text style={{color:"white"}}>{text}</Text>
            <Image source={require("../screens/assets/expense.png")}/>
        </View>
      
    );
}

export default Planner;