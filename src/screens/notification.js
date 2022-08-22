import {React,useState} from "react";
import {ScrollView,View,Text,SafeAreaView} from "react-native";
import NotificationCard from "../components/notificaitons";

function Notification(){
  const [empty,setEmpty] = useState(false);
    return(
      <>
      <SafeAreaView style={{flex : 1, backgroundColor: "white" }}>
        <ScrollView style={{marginHorizontal: "5%", flex : 1}} showsVerticalScrollIndicator = {false}>
        <View style={{justifyContent : "center", marginTop: "10%"}}>
          <Text onPress={()=> setEmpty(!empty)} style={{fontSize: 26, color:"#05445E"}}>Notifications</Text>
        </View>
        {
          empty ?
          <NotificationCard title="No New Notification" inverted={false} hidden={true}/> :
          <>
          <NotificationCard title="Flight Plans" text="The flight to Morocco is cheaper now." text2="Check Emirates and Air Maroc" buttonOne="Book Now" buttonTwo="Later" inverted={false}/>
          <NotificationCard title="Pack Help" text="Well done!" text2="You have packed 15 items for you Seychelles Trip, You have 10 more items to pack." buttonOne="Pack Now" buttonTwo="Later"/>
          <NotificationCard title="Weather" text="Have you checked the weather in seychelles for your planned trip?"  buttonOne="Check Now" buttonTwo="Later" inverted={false}/>
          <NotificationCard title="Short Stay" text="Well done!" text2="You have packed 15 items for you Seychelles Trip, You have 10 more items to pack." buttonOne="Book Now" buttonTwo="Later"/>
          <NotificationCard title="Flight Plans" text="The flight to Morocco is cheaper now." text2="Check Emirates and Air Maroc" buttonOne="Book Now" buttonTwo="Later" inverted={false}/>
          </>
        }

        </ScrollView>
      </SafeAreaView>
      </>
    )
  }

  export default Notification;