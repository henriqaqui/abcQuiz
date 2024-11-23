import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RoorLayout() {
    const [loaded, error] = useFonts({
        'UbuntuMono-Regular': require('@/assets/fonts/UbuntuMono-Regular.ttf'),
        'FrederickatheGreat-Regular': require('@/assets/fonts/FrederickatheGreat-Regular.ttf'),
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }

    return (
        <Stack screenOptions={{ headerShown: false}}>
            <Stack.Screen name="index" />
        </Stack>
    );
}
