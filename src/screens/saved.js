import {React} from "react";
import {SafeAreaView,Text,View,ScrollView} from "react-native";
import Trips from "../components/tripsCard";

function SavedPlans(){
    return(
      <SafeAreaView style={{flex : 1,backgroundColor: "white" }}>
        
        <ScrollView style={{backgroundColor : "transparent",marginHorizontal: "5%", flex : 1}} showsVerticalScrollIndicator = {false}>
        <View style={{ justifyContent : "center",marginTop: "10%"}}>
          <Text style={{fontSize : 25, color:"#05445E"}}>Saved Trip Plans</Text>
        </View>
          <Trips 
          destination={"Australia"} 
          airline={"Royal Air Maroc"} 
          accomodation={"Brunswick Hotel"} 
          activity={"2 mini tours" } 
          packedItems={"Two items Packed"}
          completed={10}
          img={require(`../screens/assets/australia.png`)}
          />
          <Trips 
          destination={"Paris"} 
          airline={"Emirates"} 
          accomodation={"Air Bnb"} 
          activity={"2 mini tours" } 
          packedItems={"15 items Packed"}
          completed={90}
          img={require(`../screens/assets/paris.png`)}
          />
           <Trips 
          destination={"Seychelles"} 
          airline={"Qatar Airways"} 
          accomodation={"Bayview Seychelles"} 
          activity={"Sun bathing & Scuba...." } 
          packedItems={"All items Packed"}
          completed={100}
          img={require(`../screens/assets/seychelles.png`)}
          />
          <Trips 
          destination={"Australia"} 
          airline={"Royal Air Maroc"} 
          accomodation={"Brunswick Hotel"} 
          activity={"2 mini tours" } 
          packedItems={"Two items Packed"}
          completed={60}
          img={require(`../screens/assets/australia.png`)}
          />
          <Trips 
          destination={"Paris"} 
          airline={"Emirates"} 
          accomodation={"Air Bnb"} 
          activity={"2 mini tours" } 
          packedItems={"15 items Packed"}
          completed={30}
          img={require(`../screens/assets/paris.png`)}
          />
           <Trips 
          destination={"Seychelles"} 
          airline={"Qatar Airways"} 
          accomodation={"Bayview Seychelles"} 
          activity={"Sun bathing & Scuba...." } 
          packedItems={"All items Packed"}
          completed={40}
          img={require(`../screens/assets/seychelles.png`)}
          />
          
        </ScrollView>
      </SafeAreaView>
    )
  }

  export default SavedPlans;