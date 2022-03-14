import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import About from '../screens/About';
import Header from "../shared/header";

const screens={
    About:{
        screen:About,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title="About" />,
            }
        }
    }
    
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{backgroundColor:"#FF5677",height:100}
    }
});

export default AboutStack;

