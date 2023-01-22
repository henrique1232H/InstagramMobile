import {View, Text, TouchableOpacity, ScrollView} from "react-native"
import { ListStories } from "../components/ListStories"
import { Menu } from "../components/Menu"



export function Home(){
    return (
        <View className="pt-10 pb-3 border border-b-1 bg-black border-b-zinc-900">
        
        <View>

            <Menu />
            <ListStories />
        </View>
       

        <ScrollView className="bg-black w-full h-full">

            <View>
                <Text className="text-white">Hello</Text>
            </View>
        </ScrollView>
      
        
        </View>
    )
}