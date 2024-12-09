import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, TextInput, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState } from 'react';
import signIn from '../firebase/userAuth';
import styles from '../layouts/SigninLayout';


const SigninScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hideAndShow, sethideAndShow] = useState(true);

  return (
    <SafeAreaView style={styles.container}
    behavior="padding"
    keyboardVerticalOffset={100}>
        <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
        <View style={styles.props}></View>
        <View style={styles.props2}></View>
        <View style={styles.headerContainer}>
            <Text style={styles.welcomeText}>Welcome back to {'\n'}TIPTAPTONE</Text>
            <Text style={styles.welcomeSubText}>Were happy to see you again, {'\n'}thank you for choosing us.</Text>
        </View>
        <Text style={styles.signinText}>Sign in to {'\n'}TIPTAPTONE</Text>
        <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
            <Text style={{fontSize: 18, fontFamily: 'fontSemiBold'}}>Enter email address</Text>
            <View style={styles.emailInputContainer}>
                <TextInput style={styles.inputEmail}
                numberOfLines={1}
                placeholder="bhoxzkhentx@unicorn.me"
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
            </View>
            <Text style={{fontSize: 18, fontFamily: 'fontSemiBold', marginTop: 13}}>Enter password</Text>
            <View style={styles.passwordInputContainer}>
                <TextInput style={styles.inputPassword}
                numberOfLines={1}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={hideAndShow}/>
                <TouchableOpacity onPress={() => sethideAndShow(!hideAndShow)}>
                    <Image source={ hideAndShow ? require('../images/svg/hidePassword.png') : require('../images/svg/showPassword.png')} style={styles.hideAndShowPassword}/>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        <Text style={{fontSize: 14.5, fontFamily: 'fontRegular', marginTop: 12, marginLeft: 18,}}>Forgot password?</Text>
            <TouchableOpacity style={styles.signinBtn} activeOpacity={0.6}
            onPress={() => signIn()}>
                <Text style={{fontSize: 19, fontFamily: 'fontSemiBold'}}>Login</Text>
                <Image style={styles.arrowIcon} source={require('../images/svg/rightIcon.png')}></Image>
            </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontFamily: 'fontRegular'}}>Don't have an account?</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Signup')}>
                <Text style={{fontSize: 16.5, fontFamily: 'fontSemiBold', marginLeft: 5}}>Sign up</Text>
            </TouchableOpacity>

        </View>
    </SafeAreaView>
  )
}

export default SigninScreen;