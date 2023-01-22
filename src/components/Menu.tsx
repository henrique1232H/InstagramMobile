import { View } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import {AntDesign} from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native"





export function Menu() {

    const {navigate} = useNavigation()
    return (
        <View className="flex flex-row justify-between items-center pl-5 pr-5 pb-2 border-b-zinc-900 fixed">
            
            <TouchableOpacity
            activeOpacity={0.7}>
                <Text className="text-white font-semibold text-2xl">Instagram</Text>
            </TouchableOpacity>
            
            

            <View className="flex flex-row gap-7">


                <TouchableOpacity
                activeOpacity={0.7}>
                    
                    <AntDesign 
                        name="pluscircle"
                        size={23}
                        color="white"
                        />
                    
                </TouchableOpacity>
               
                <TouchableOpacity
                activeOpacity={0.7}>

                    <AntDesign 
                        name="heart"
                        size={23}
                        color="white"
                        onPress={() => navigate("heart")}/>

                </TouchableOpacity>

                <TouchableOpacity
                activeOpacity={0.7}>

                <AntDesign 
                     name="message1"
                    size={23}
                    color="white"
                    onPress={() => navigate("message")}/>

                </TouchableOpacity>



            </View>

        </View>
    )
}