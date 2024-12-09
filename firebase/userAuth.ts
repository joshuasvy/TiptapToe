import { Alert } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const signIn = async (
  email: string,
  password: string,
  navigation: any ) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Sign in Successfully!');
      navigation.navigate('Homepage');
    } catch (error: any) {
      if (!email && !password) {
      Alert.alert('Please enter your email and password.', 'Please try again.');
    } else if (email === '') {
      Alert.alert('Please enter your email', 'Please try again.');
    } else if (password === '') {
      Alert.alert('Please enter your password', 'Please try again.');
    } else if (error.code === 'auth/network-request-failed') {
      Alert.alert('Please check your internet connection.');
    } else if (error.code === 'auth/invalid-credential') {
      Alert.alert('Incorrect Email or Password.', 'Please try again.');
      console.log(error);
    } else if (error.code === 'auth/invalid-email') {
      Alert.alert('Incorrect Email Address.', 'Please try again.');
    } else {
      console.log(error);
      Alert.alert('Sign in Failed', error.message);
    }
  }
};

export const signUp = async (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
  navigation: any,
  setEmail: (email: string) => void,
  setPassword: (password: string) => void,
  setConfirmPassword: (confirmPassword: string) => void ) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Account Created Successfully!');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigation.navigate('Signin');
    } catch (error) {
      if (!username && !email && !password && !confirmPassword) {
        Alert.alert('Please enter all the credentials.', 'Please try again.');
      } else if (username.trim() === '') {
        Alert.alert('Please enter your username', 'Please try again.');
      } else if (email.trim() === '') {
        Alert.alert('Please enter your email', 'Please try again.');
      } else if (password.trim() === '') {
        Alert.alert('Please enter your password', 'Please try again.');
      } else if (confirmPassword.trim() === '') {
        Alert.alert('Please re-enter your password', 'Please try again.');
      } else if (password.length < 8) {
        Alert.alert('Password must be at least 8 characters', 'Please try again.');
      } else if (password !== confirmPassword) {
        Alert.alert('Passwords didn’t match!', 'Please try again.');
      } else if (!emailRegex.test(email)) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
      } else if (error.code === 'auth/network-request-failed') {
        Alert.alert('Please check your internet connection.');
      } else if (error.code === 'auth/email-already-in-use') {
        Alert.alert("Email already in use", "Please try again.");
      }
  }
}