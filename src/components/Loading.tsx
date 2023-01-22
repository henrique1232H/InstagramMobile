import { ActivityIndicator, View } from "react-native";


export function Loading() {
    return (
        <ActivityIndicator size={40} color="black" className="flex-1 justify-center items-center"/>
    )
}