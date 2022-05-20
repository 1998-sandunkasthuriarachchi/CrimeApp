import { createStackNavigator } from "react-navigation-stack";
import react from "react";

import Home from "../screens/Home";
import Incident from "../screens/Incident";
import Upload from "../screens/Upload";
import Header from "../shared/header";

const screens={
    Incident:{
        screen:Incident,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:()=><Header navigation={navigation} title="Crime App" />,
            }
        }
    },
    Upload:{
        screen:Upload,
    }
    
}

const IncidentStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{backgroundColor:"#4FFBDF",}
    }
});

export default IncidentStack;