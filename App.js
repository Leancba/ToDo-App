import React from 'react';
import { StyleSheet } from 'react-native';
import Homepage  from "./src/screens/Homepage"
import Login from "./login/loginScreen"

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
        name='Homepage'
        component={Homepage}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
