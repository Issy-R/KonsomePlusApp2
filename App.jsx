import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SometalkScreen from './src/screens/SometalkScreen';
import UtattemitaScreen from './src/screens/UtattemitaScreen';
import YoutubeWebScreen from './src/screens/YoutubeWebScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="歌ってみた"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#FFFFFF' },
          headerTitle: 'KONSOME＋',
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="ソメトーーク" component={SometalkScreen} />
        <Stack.Screen name="YouTube" component={YoutubeWebScreen} />
        <Stack.Screen name="歌ってみた" component={UtattemitaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
