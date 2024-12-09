import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from '../layouts/HomepageLayout';

const Homepage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'}/>
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Welcome, User</Text>
        <Image source={require ('../images/svg/profile.jpg')} style={styles.profile}/>
      </View>
      <Image source={require ('../images/logo/logo2.jpg')} style={styles.logo}/>

      <TouchableOpacity style={styles.navigateBtn} activeOpacity={0.6}
      onPress={() => navigation.navigate('Navigate')}>
        <Text style={{fontSize: 22, fontFamily: 'fontSemiBold'}}>Navigate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navigateBtn} activeOpacity={0.6}>
        <Text style={{fontSize: 21, fontFamily: 'fontSemiBold'}}>View Project</Text>
      </TouchableOpacity>

      <View style={{width: '95%', height: 1,alignSelf: 'center', backgroundColor: '#D5D5D5', marginVertical: 15}}></View>

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <Text style={{fontSize: 16, fontFamily: 'fontRegular'}}>See more about our</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{fontSize: 16, fontFamily: 'fontSemiBold', marginLeft: 5}}>Developer.</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Homepage