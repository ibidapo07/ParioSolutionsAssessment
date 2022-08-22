import {React} from "react";
import {ScrollView,View,Text,SafeAreaView,TouchableOpacity} from "react-native";
import {Entypo,Fontisto} from "@expo/vector-icons"

function Category({children,style,text, onTap}){
    return(
        <TouchableOpacity onPress={onTap}>
            <View style={{flexDirection : "column", alignItems: "center"}}>
            <View style={[{ width: 75, height: 75, borderRadius: 7,justifyContent : "center", alignItems: "center", marginBottom: 10},style]}>
                {children}
            </View>

            <Text style={{color:"#189AB4"}}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Category;