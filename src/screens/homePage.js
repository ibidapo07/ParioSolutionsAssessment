import {React} from "react";
import {View,Text,SafeAreaView,Image,TouchableOpacity} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Ionicons} from "@expo/vector-icons"
import Category from "../components/categories";
import {} from "@expo/vector-icons"
import Planner from "../components/expensePlanner";


function Home ({navigation}){
    return(
        <SafeAreaView style={{flex : 1, justifyContent : "space-between", alignItems : "center",backgroundColor: "white" }}>
        <View style={{ width : "82%", flex : 0.29, flexDirection : "row", justifyContent : "space-between", top : 30}}>
          <View style={{top : 20}}>
          <Text style={{fontSize : 30, color : "#05445E"}}>{`Hi Olivia`}</Text>
          <Text style={{top : 10, color : "#05445E"}}>{`All you need for your new trip right here.`}</Text>
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate("My Account")}>
            <Image source={require("./assets/image.png")}/>
          </TouchableOpacity>
         
        </View>
        <View style={{width : "82%", flex : 0.92 ,justifyContent: "space-between"}}>
            < View style={{flexDirection : "row" , justifyContent: "space-between"}}>
                <Category style={{backgroundColor : "#189AB4"}} text="Itinerary" onTap={() => alert("Category Name")}>
                    <Image source={require("./assets/itinerary.png")}/>
                </Category>
                <Category style={{backgroundColor : "#189AB4"}} text="Flights" onTap={() => alert("Category Name")}>
                    <Image source={require("./assets/flight.png")}/>
                </Category>
                <Category style={{backgroundColor : "#189AB4"}} text="Pack Help" onTap={() => alert("Category Name")}>
                    <Image source={require("./assets/packhelp.png")}/>
                </Category>
            </View>
            < View style={{flexDirection : "row" , justifyContent: "space-between"}}>
                <Category style={{backgroundColor : "#189AB4"}} text="Leisure" onTap={() => alert("Category Name")}>
                    <Image source={require("./assets/leisure.png")}/>
                </Category>
                <Category style={{backgroundColor : "#189AB4"}} text="Short Stay" onTap={() => alert("Category Name")}>
                    <Image source={require("./assets/shortstay.png")}/>
                </Category>
                <Category style={{backgroundColor : "#189AB4"}} text="Map" onTap={() => alert("Category Name")}>
                    <Image source={require("./assets/map.png")}/>
                </Category>
            </View>
            < View style={{flexDirection : "row" , justifyContent: "space-between"}}>
                <Category style={{backgroundColor : "#189AB4"}} text="Resturants" onTap={() => alert("Category Name")}>
                    <Image source={require("./assets/resturant.png")}/>
                </Category>
                <Category style={{backgroundColor : "#189AB4"}} text="Drinks" onTap={() => alert("Category Name")}>
                    <Image source={require("./assets/drink.png")}/>
                </Category>
                <Category style={{backgroundColor : "#189AB4"}} text="Weather" onTap={() => alert("Category Name")}>
                    <Image source={require("./assets/weather.png")}/>
                </Category>
            </View>
            

            
        </View>
        <View style={{width : "82%", flex : 0.34, justifyContent : "center"}}>
            <Planner style={{backgroundColor : "#189AB4"}} img="./assests/expense.png" text="Expense Planner"/>
        </View>
      </SafeAreaView>
    )
}

function Profile({navigation}){
    return(
        <View style={{backgroundColor: "white", flex : 1}}>
        <View style={{backgroundColor: "white",flexDirection : "row",alignItems : "center",marginTop : 70, marginHorizontal: 20}}>
            <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            >
                <Ionicons name="arrow-back-sharp" size={24} color="#05445E" />
            </TouchableOpacity>
            <Text style={{left : 25.04, color:"#05445E", fontSize: 25}}>My Account</Text>
        </View>

        <View style={{flex : 1,justifyContent : "space-evenly", alignItems : "center",backgroundColor: "white"}}>
            <View style={{flexDirection : "row",justifyContent : "space-evenly", alignItems : "center",backgroundColor : "#189AB4", width : 300, height : 80, borderRadius : 5}}>
                <Image source={require("./assets/image.png")}/>
                <View style={{left: -20}}>
                    <Text style={{color : "white", fontWeight : "600", fontSize : 18, marginBottom : 4}}>Olivia Scott</Text>
                    <Text style={{color : "white", fontWeight : "300", fontSize : 11,}}>UI/UX Designer</Text>
                </View>
                <Image source={require("./assets/pen.png")}/>
            </View>
            <View style={{backgroundColor : "white" , top : -20,width : 300, height : 300, shadowOffset : {
                width : 3,
                height : 4
            },
            shadowColor : "gray",
            shadowRadius : 3,
            shadowOpacity : 0.3,
            paddingRight : 50,
            paddingLeft : 20,
            paddingTop : 10
            }}>
                <View style={{flexDirection: "row",justifyContent : "space-evenly", alignItems : "center",height : 70}}>
                    <Image style={{top : -10}}source={require("./assets/profile.png")}/>
                    <View style={{width: "80%",height : "80%", borderBottomColor: "#189AB4", borderBottomWidth : 1,justifyContent : "space-evenly"}}>
                        <View style={{flexDirection: "row",justifyContent : "space-between"}}>
                            <Text style={{color : "#189AB4", fontSize: 14, fontWeight : "500"}}>Profile</Text>
                            <Image source={require("./assets/arrow.png")}/>
                        </View>
                        <Text style={{fontSize: 10,color : "#189AB4"}}>Manage Changes to your account</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row",justifyContent : "space-evenly", alignItems : "center",height : 70}}>
                    <Image style={{top : -10}}source={require("./assets/card.png")}/>
                    <View style={{width: "80%",height : "80%", borderBottomColor: "#189AB4", borderBottomWidth : 1,justifyContent : "space-evenly"}}>
                        <View style={{flexDirection: "row",justifyContent : "space-between"}}>
                            <Text style={{color : "#189AB4", fontSize: 14, fontWeight : "500"}}>Cards</Text>
                            <Image source={require("./assets/arrow.png")}/>
                        </View>
                        <Text style={{fontSize: 10,color : "#189AB4"}}>Secure your cards for safety</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row",justifyContent : "space-evenly", alignItems : "center",height : 70}}>
                    <Image style={{top : -10}}source={require("./assets/preference.png")}/>
                    <View style={{width: "80%",height : "80%", borderBottomColor: "#189AB4", borderBottomWidth : 1,justifyContent : "space-evenly"}}>
                        <View style={{flexDirection: "row",justifyContent : "space-between"}}>
                            <Text style={{color : "#189AB4", fontSize: 14, fontWeight : "500"}}>Preferences</Text>
                            <Image source={require("./assets/arrow.png")}/>
                        </View>
                        <Text style={{fontSize: 10,color : "#189AB4"}}>Customize you app</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row",justifyContent : "space-evenly", alignItems : "center",height : 70}}>
                    <Image style={{top : -10}}source={require("./assets/logout.png")}/>
                    <View style={{width: "80%",height : "80%", borderBottomColor: "#189AB4", borderBottomWidth : 1,justifyContent : "space-evenly"}}>
                        <View style={{flexDirection: "row",justifyContent : "space-between"}}>
                            <Text style={{color : "#189AB4", fontSize: 14, fontWeight : "500"}}>Logout</Text>
                            <Image source={require("./assets/arrow.png")}/>
                        </View>
                        <Text style={{fontSize: 10,color : "#189AB4"}}>Logout for your account</Text>
                    </View>
                </View>
            </View>
        </View>
        </View>
    )
}
const Stack = createNativeStackNavigator();
function HomePage(navigation){
    return(
      
        <Stack.Navigator
        screenOptions={({route})=>({
            headerTransparent : true,
            headerShown : route.name == "Home"? false : true,
            
        })}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="My Account" component={Profile} options={{
                headerShown : false
            }}/>
        </Stack.Navigator>
      
    )
  }

  export default HomePage;
  