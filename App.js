import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import HomeStack from "./routes/HomeStack";


export default function App() {
  //load custom fonts
  const [loaded]=useFonts({
      montserratregular: require("./assets/fonts/Montserrat-Regular.ttf"),
      montserratbold: require("./assets/fonts/Montserrat-Bold.ttf"),
      montserratsemibold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
      robotoregular: require("./assets/fonts/Roboto-Regular.ttf"),
      robotobold: require("./assets/fonts/Roboto-Bold.ttf"),
      montserratsemibold: require("./assets/fonts/Roboto-Medium.ttf"),
  });
  //check fonts load
  if(!loaded){
    return null;
  }
    
  return (
      <HomeStack/>
    );
  
  
}
