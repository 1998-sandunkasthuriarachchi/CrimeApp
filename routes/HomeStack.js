import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import Home from "../screens/Home";
import Header from "../shared/header";

const screens={
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title="Crime App" />,
            }
        }
    }
    
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{backgroundColor:"#FF5677",height:100}
    }
});

export default HomeStack;

