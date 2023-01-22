import { Text, TouchableOpacity, View } from "react-native";
import {AntDesign} from "@expo/vector-icons"
import { StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native"
import { NotificationHeart } from "../components/NotificationHeart";

export function Heart() {

    const {goBack} = useNavigation()

    return (
        <View className="w-full h-full bg-black pt-10">

            <TouchableOpacity className="flex flex-row items-center gap-4 pl-3"
            activeOpacity={0.7}>
                <AntDesign 
                name="arrowleft"
                size={25}
                color="white"
                onPress={goBack}/>
                <Text className="text-white font-semibold text-2xl" onPress={goBack}>Notificações</Text>
            </TouchableOpacity>
            
            <NotificationHeart />



            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        </View>
    )
}