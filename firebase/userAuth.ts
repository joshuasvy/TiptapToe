import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Alert } from 'react-native'; 

const signIn = async (email: string, password: string, navigation: any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('Sign in Successfully!');
    navigation.navigate('Homepage');
  } catch (error) {
    console.log(error);
    Alert.alert('Sign in Failed', error.message);
  }
};

const signUp = async (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  navigation: any) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Account Created Successfully!');
      navigation.navigate('Signin');
    } catch (error) {
        console.log(error);
        alert(`Sign up Failed: ` + error.message);
    }
  }


export default signIn;