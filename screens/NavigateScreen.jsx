import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../layouts/NavigateLayout';

const NavigateScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Image source={require ('../images/svg/backIcon.png')} style={styles.backIcon}/>
        </TouchableOpacity>
        <Text style={styles.welcomeText}>Welcome, User</Text>
        <Image source={require ('../images/svg/profile.jpg')} style={styles.profile}/>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Red Button</Text>
        <TouchableOpacity style={styles.redbutton} activeOpacity={0.7} onPress={() => console.log('red button pressed')}/>
        <Text style={styles.buttonText}>Green Button</Text>
        <TouchableOpacity style={styles.greenbutton} activeOpacity={0.7}/>
        <Text style={styles.buttonText}>Yellow Button</Text>
        <TouchableOpacity style={styles.yellowButton} activeOpacity={0.7}/>
      </View>
    </SafeAreaView>
  )
}

export default NavigateScreen;