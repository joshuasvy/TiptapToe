import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../layouts/OnBoardingLayout';

const OnBoardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#D2FBD4'} barStyle={'dark-content'}/>
        <Text style={styles.welcomeText}>Welcome to TIPTAPTONE!</Text>
        <Text style={styles.subText}>Tiptaptone project uses three push buttons, three LEDs, and a single buzzer to create an interactive system. Each button will independently control its corresponding LED.{'\n \n'}Pressing any button will also trigger the buzzer. The buzzer will sound every time any button is pressed, providing an audible feedback that complements the visual feedback from the LEDs.</Text>
        <TouchableOpacity style={styles.getStartedBtn}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Signin')}>
            <Text style={{fontSize: 19, fontFamily: 'fontSemiBold'}}>Get Started</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
export default OnBoardingScreen;