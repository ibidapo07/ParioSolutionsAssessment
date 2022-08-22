import { StatusBar } from 'expo-status-bar';
import {Image} from "react-native"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import SavedPlans from './src/screens/notification';
import HomePage from './src/screens/homePage';
import Notifications from './src/screens/saved';
import { Foundation , FontAwesome, MaterialCommunityIcons,Entypo} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  

  return (
    <NavigationContainer>
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
          backgroundColor : "transparent",
          borderTopWidth : 0
        }
      })}
      >
        <Tab.Screen name='HomePage' component={HomePage}/>
        <Tab.Screen name='Saved' component={Notifications}/>
        <Tab.Screen name=' Notifications'component={SavedPlans}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
