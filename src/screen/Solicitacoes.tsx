import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons"

export function Solicitacoes() {

    const {goBack} = useNavigation()

    return (

        <ScrollView className="bg-black">

            <View className="pt-10 bg-black">
            
                <View className="flex flex-row items-center justify-between h-10 fixed pl-2 pr-2">

                    <TouchableOpacity
                        onPress={goBack}>

                     <AntDesign 
                        name="arrowleft"
                        color="#fff"
                        size={30}/>

                </TouchableOpacity>

                <Text className="text-white font-semibold text-xl">Solicitações para seguir</Text>

                <Text className="text-gray-700 font-semibold text-xl">Gerenciar</Text>

                </View>
            </View>

            <View className="mt-4 flex flex-col justify-center items-center">
                

                <View className="pt-4">
                 <AntDesign
                    name="adduser"
                    size={100}
                    color="white"
                 />
                </View>
               
                <View>
                    <Text className="text-xl font-semibold text-white text-center p-4">Solicitações para seguir</Text>
                    <Text className="text-gray-400 text-center pl-6 pr-6">Quando as pessoas pedirem para seguir para seguir você, você verá as solicitações delas aqui.</Text>
                </View>
            </View>

        </ScrollView>


    )
}