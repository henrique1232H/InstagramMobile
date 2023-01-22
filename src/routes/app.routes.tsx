import { createNativeStackNavigator} from "@react-navigation/native-stack"

import { Home } from "../screen/Home";
import { Heart } from "../screen/Heart";
import { Message } from "../screen/Message";
import { Solicitacoes } from "../screen/Solicitacoes";
import { SearchPerfil } from "../screen/SearchPerfil";

 const { Navigator, Screen } = createNativeStackNavigator();    
export function AppRoutes() {


    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
            name="home"
            component={Home}/>

            <Screen 
            name="heart"
            component={Heart}/>

            <Screen 
            name="message"
            component={Message}/>

            <Screen 
            name="solicitacoes"
            component={Solicitacoes}/>

            <Screen 
            name="searchPerfil"
            component={SearchPerfil}/>

        </Navigator>
    )
}