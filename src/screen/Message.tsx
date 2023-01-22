import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {AntDesign} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";


export function Message() {
    
    const {navigate, goBack} = useNavigation()

    return (
        <View className="pt-10 bg-black w-full h-full">

            <View className="flex flex-row justify-between items-center pl-3 pr-2">

                    <TouchableOpacity
                    activeOpacity={0.7}>

                        <AntDesign 
                            name="arrowleft"
                            color="white"
                            size={25}
                            onPress={goBack}/>

                    </TouchableOpacity>
                 
                 <TouchableOpacity activeOpacity={0.7}>
                    <Text className="text-white font-semibold text-2xl">cardosodeoliveirahen</Text>
                 </TouchableOpacity>

                  

                <View className="flex flex-row gap-5">

                    <TouchableOpacity
                    activeOpacity={0.7}>

                    <AntDesign 
                        name="videocamera"
                        color="#fff"
                        size={25}/>

                    </TouchableOpacity>
                   
                    <TouchableOpacity activeOpacity={0.7}>

                        <AntDesign 
                  name="plus"
                  color="#FFF"
                  size={25}/>

                    </TouchableOpacity>
                  
                </View>
                  
            </View>
          
            <TextInput className="bg-gray-500 mt-6 p-1 border rounded-lg ml-3 mr-3 placeholder:text-gray-500/75 text-white" placeholder="Pesquisar"
             onPressIn={() => {navigate("searchPerfil")}}/>

        </View>
    )
}