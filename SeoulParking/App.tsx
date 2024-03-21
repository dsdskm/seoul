import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroView from 'views/IntroView';
import ParkingMapView from 'views/ParkingMapView';

const Stack = createNativeStackNavigator();

export const ROUTES = {
  INTRO: 'intro',
  MAP: 'map',
  LIST: 'list',
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.INTRO}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.INTRO} component={IntroView} />
        <Stack.Screen name={ROUTES.MAP} component={ParkingMapView} />
        <Stack.Screen name={ROUTES.LIST} component={ParkingMapView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
