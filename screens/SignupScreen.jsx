import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, StatusBar, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { useState } from 'react';
import styles from '../layouts/SignupLayout';
import { signUp } from '../firebase/userAuth';

const SignupScreen = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [confirmPassVisibility, setConfirmPassVisibility] = useState(true);

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
      <Image source={require ('../images/logo/logo.jpg')} style={styles.logo}/>
      <Text style={styles.signupText}>Sign up to {'\n'}</Text><Text style={styles.tipTapTone}>TIPTAPTONE</Text>

      <KeyboardAvoidingView behavior="padding">
        <View style={styles.inputContent}>
            <TextInput style={styles.input}
            numberOfLines={1}
            placeholder='Username'
            value={username}
            onChangeText={(text) => setUsername(text)}/>
        </View>
        <View style={styles.inputContent}>
            <TextInput style={styles.input}
            numberOfLines={1}
            placeholder='Email'
            keyboardType='email-address'
            value={email}
            onChangeText={(text) => setEmail(text)}/>
        </View>
        <View style={styles.inputContent}>
            <TextInput style={styles.input}
            numberOfLines={1}
            placeholder='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={passwordVisibility}/>
            <TouchableOpacity onPress={() => setPasswordVisibility(!passwordVisibility)}>
                    <Image source={ passwordVisibility ? require('../images/svg/hidePassword.png') : require('../images/svg/showPassword.png')} style={styles.hideAndShowPassword}/>
            </TouchableOpacity>
        </View>
        <View style={styles.inputContent}>
            <TextInput style={styles.input}
            numberOfLines={1}
            placeholder='Confirm Password'
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={confirmPassVisibility}/>
            <TouchableOpacity onPress={() => setConfirmPassVisibility(!confirmPassVisibility)}>
                    <Image source={ confirmPassVisibility ? require('../images/svg/hidePassword.png') : require('../images/svg/showPassword.png')} style={styles.hideAndShowPassword}/>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    
      <TouchableOpacity style={styles.signupBtn} onPress={() => signUp(username, email, password, confirmPassword, navigation, setEmail, setPassword, setConfirmPassword)}>
        <Text style={{fontSize: 19, fontFamily: 'fontSemiBold'}}>Sign up</Text>
        <Image style={styles.arrowIcon} source={require('../images/svg/rightIcon.png')}></Image>
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default SignupScreen;