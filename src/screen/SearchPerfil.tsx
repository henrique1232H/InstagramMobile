import { Text, TextInput, View } from "react-native";
import {AntDesign} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function SearchPerfil() {

    const [valor, setValor] = useState()
    const {goBack} = useNavigation()

    const checkValueOfTextInput = () => {

    } 

    return (
        <View className="pt-10 h-full bg-black pl-2">

            <View className="flex flex-row gap-2 border-b-2 border-gray-500/90 pb-2">
                 
                 <AntDesign 
                 name="arrowleft"
                 size={25}
                 color="#fff"
                 onPress={goBack}/>
                 <TextInput className="text-white text-lg w-full" placeholder="Pesquisar" 
                 placeholderTextColor="gray"/>
            </View>
           
           
        </View>
    )
}