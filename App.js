import { StatusBar } from 'expo-status-bar';
import {Image, View, ImageBackground,Text} from "react-native"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import SavedPlans from './src/screens/notification';
import HomePage from './src/screens/homePage';
import Notifications from './src/screens/saved';
import { Foundation , FontAwesome, MaterialCommunityIcons,Entypo} from '@expo/vector-icons';
import Category from './src/components/categories';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function Route(){
  return(
    <Tab.Navigator
      screenOptions={({route})=>({
        
          tabBarIcon : ({focused})=> {
            let icon ;
              route.name == "HomePage"? icon = "home" : route.name == "Saved" ? icon = "bookmark" : icon = "bell"
            
              return icon == "home" ?
              <> 
              <Foundation name={icon} size={30} color={focused? "#189AB4" : "#D4F1F4"}/> 
              {
                focused && <Entypo name='dot-single' size={20} color='#189AB4'/>
              }
              </>
              :
               icon == "bookmark" ? 
              <>
              <FontAwesome name={icon} size={30} color={focused? "#189AB4" : "#D4F1F4"}/> 
              {
                focused && <Entypo name='dot-single' size={20} color='#189AB4'/>
              }
              </>
              : 
              <>
              <MaterialCommunityIcons name={icon} size={30} color={focused? "#189AB4" : "#D4F1F4"}/>
              {
                focused && <Entypo name='dot-single' size={20} color='#189AB4'/>
              }
              </>
          },
        headerShown : false,
        tabBarShowLabel : false,
        tabBarStyle : {
          backgroundColor : "white",
          borderTopWidth : 0
        }
      })}
      >
        <Tab.Screen name='HomePage' component={HomePage}/>
        <Tab.Screen name='Saved' component={Notifications}/>
        <Tab.Screen name=' Notifications'component={SavedPlans}/>
      </Tab.Navigator>
  )
}

function Landing({navigation}){
  return(
    <ImageBackground source={require("./src/screens/assets/background.png")} resizeMode="cover" style={{flex:1, justifyContent: "space-evenly", alignItems:"center",paddingVertical: 200}}>
      <Image source={require("./src/screens/assets/image.png")}/>
      <View style={{justifyContent: "center", alignItems:"center"}}>
        <Text style={{fontSize : 30, marginBottom : 16, color : "#0D374F"}}>Welcome</Text>
        <Text style={{fontSize : 14, color : "#0D374F"}}>Your new destination awaits you!</Text>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>
        <Category style={{backgroundColor : "#189AB4"}} text="Create New Trip Plans" onTap={() => navigation.navigate("Home")}>
          <Image source={require("./src/screens/assets/entryOne.png")}/>
        </Category>
        <Category style={{backgroundColor : "#189AB4"}} text="Continue a previous plan" onTap={() => navigation.navigate("Home")}>
          <Image source={require("./src/screens/assets/entryTwo.png")}/>
        </Category>
      </View>
    </ImageBackground>
  )
}
export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions={(route)=>({
        headerShown : false
      })}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Route} options={{
          animation : "fade_from_bottom",
          gestureEnabled: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
