import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Final from "../screens/Final";
import Home from "../screens/Home";
import Incident from "../screens/Incident";

const screens={
    Home:{
        screen:Home
    },
    Incident:{
        screen:Incident
    },
    Final:{
        screen:Final
    }
    
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

