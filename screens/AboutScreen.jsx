import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import styles from '../layouts/AboutLayout';

const AboutScreen = ({navigation}) => {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'}/>
      <Text>About Screen</Text>
    </SafeAreaView>
  )
}

export default AboutScreen