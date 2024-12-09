import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from './screens/OnBoardingScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import HomepageScreen from './screens/HomepageScreen';
import NavigateScreen from './screens/NavigateScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

const App = () => {

  const [fontsLoaded] = useFonts({
    'fontBlack': require('./assets/fonts/Poppins-Black.ttf'),
    'fontBold': require('./assets/fonts/Poppins-Bold.ttf'),
    'fontRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'fontSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="About" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStarted" component={OnBoardingScreen}/>
        <Stack.Screen name="Signin" component={SigninScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="Homepage" component={HomepageScreen}/>
        <Stack.Screen name="Navigate" component={NavigateScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;