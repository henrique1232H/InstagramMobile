import { StatusBar } from 'react-native';
import { View } from 'react-native';

import {
  Ubuntu_700Bold,
  Ubuntu_500Medium
} from "@expo-google-fonts/ubuntu"
import { useFonts } from 'expo-font';
import { Loading } from './src/components/Loading';
import { Routes } from "./src/routes/"

export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
    Ubuntu_700Bold
  })

  if(!fontsLoaded) {
    return <Loading />
  }

  return (
    <View className='bg-black w-full h-full'>
      
      <Routes />

      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </View>
  );
}

