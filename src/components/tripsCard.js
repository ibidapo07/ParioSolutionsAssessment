import {React} from "react";
import {ScrollView,View,Text,Image}from "react-native";
import {Entypo,Fontisto} from "@expo/vector-icons"

function Trips({destination,airline,accomodation,activity,packedItems,completed,img}){
    return(
        <View style={{backgroundColor : "#189AB4", width: 350, height: 145, borderRadius: 7,flexDirection : "row",justifyContent : "center", alignItems: "center", marginVertical : 20}}>
            <View style={{backgroundColor : "transparent", flex : 0.8, justifyContent:"center", alignItems:"center"}}>
                <Image source={img}/>
            </View>
            <View style={{backgroundColor : "transparent", flex : 1}}>
                <View style={{flexDirection : "row", justifyContent: "space-between",marginBottom : 5}}>
                <Text style={{fontSize: 20,color:"white",top: -10}}>{destination}</Text>
                <Fontisto name={completed == 100? "heart" : "heart-alt"} size={25}  color="white" style={{right: 20}}/>
                </View>
                <View>
                    <Text style={{fontSize: 12,color:"white"}}><Entypo name="dot-single"></Entypo>{airline}</Text>
                    <Text style={{fontSize: 12,color:"white"}}><Entypo name="dot-single"></Entypo>{accomodation}</Text>
                    <Text style={{fontSize: 12,color:"white"}}><Entypo name="dot-single"></Entypo>{activity}</Text>
                    <Text style={{fontSize: 12,color:"white"}}><Entypo name="dot-single"></Entypo>{packedItems}</Text>
                </View>
                <Text style={{fontSize: 7, top:5, left: "65%",color:"white"}}>{completed == 100? `Done` : !completed? ``:`${completed}% completed`} </Text>
            </View>
        </View>
    );
}

export default Trips;