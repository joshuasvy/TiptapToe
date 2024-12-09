import { View, Text, KeyboardAvoidingView, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import styles from '../layouts/SignupLayout';

const SignupScreen = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hideAndShow, sethideAndShow] = useState(true);

  return (

    <KeyboardAvoidingView style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={100}>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
      <Image source={require ('../images/logo/logo.jpg')} style={styles.logo}/>
      <Text style={styles.signupText}>Sign up to {'\n'}</Text><Text style={styles.tipTapTone}>TIPTAPTONE</Text>

      <View style={styles.inputContainer}>
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
            value={email}
            onChangeText={(text) => setEmail(text)}/>
        </View>
        <View style={styles.inputContent}>
            <TextInput style={styles.input}
            numberOfLines={1}
            placeholder='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={hideAndShow}/>
            <TouchableOpacity onPress={() => sethideAndShow(!hideAndShow)}>
                    <Image source={ hideAndShow ? require('../images/svg/hidePassword.png') : require('../images/svg/showPassword.png')} style={styles.hideAndShowPassword}/>
            </TouchableOpacity>
        </View>
        <View style={styles.inputContent}>
            <TextInput style={styles.input}
            numberOfLines={1}
            placeholder='Confirm Password'
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={hideAndShow}/>
            <TouchableOpacity onPress={() => sethideAndShow(!hideAndShow)}>
                    <Image source={ hideAndShow ? require('../images/svg/hidePassword.png') : require('../images/svg/showPassword.png')} style={styles.hideAndShowPassword}/>
            </TouchableOpacity>
        </View>
      </View>
    
      <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Signin')}>
        <Text style={{fontSize: 19, fontFamily: 'fontSemiBold'}}>Sign up</Text>
        <Image style={styles.arrowIcon} source={require('../images/svg/rightIcon.png')}></Image>
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
  )
}

export default SignupScreen;