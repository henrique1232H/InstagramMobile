import { Text, View, TouchableOpacity } from "react-native";
import {AntDesign} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";



export function NotificationHeart() {

    const {navigate} = useNavigation()

    return (
        <TouchableOpacity className="flex flex-row mt-2 items-center active:bg-gray-800 p-4 "
        activeOpacity={0.6}
        onPress={() => navigate("solicitacoes")}
        >
            
            <View>
            <AntDesign
            name="adduser"
            color="white"
            size={40}
            />
            </View>

            <View className="flex flex-col pl-2 ">
                <Text className="text-lg font-semibold text-white">Solicitações para seguir</Text>
                <Text className=" text-gray-500 ">Aprove ou ignore solicitações</Text>
            </View>
        </TouchableOpacity>
    )
}