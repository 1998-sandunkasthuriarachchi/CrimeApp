import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from "./HomeStack";
import AboutStack from "./aboutStack";
import IncidentStack from "./incidentStack";


const RootsDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:HomeStack,
        navigationOptions:{
            title:'HOME',
        }
    },
    Incident:{
        screen:IncidentStack,
        navigationOptions:{
            title:'INCIDENT'
        }
    },
    About:{
        screen:AboutStack,
        navigationOptions:{
            title:'ABOUT'
        }
    }
});


export default createAppContainer(RootsDrawerNavigator);

