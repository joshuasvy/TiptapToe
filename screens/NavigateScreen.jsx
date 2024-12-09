import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { database } from '../firebaseConfig';
import styles from '../layouts/NavigateLayout';

const NavigateScreen = ({navigation}) => {

    const [buttonOn, setButtonOn] = useState({
      "Red Button": "Red Button Off",
      "Green Button": "Button Off",
      "Yellow Button": "Button Off",
    });
  
    useEffect(() => {
      const redBtnRef = ref(database, 'Red Button');
      const greenBtnRef = ref(database, 'Green Button');
      const yellowBtnRef = ref(database, 'Yellow Button');

      set(redBtnRef, "Button Off");
      set(greenBtnRef, "Button Off");
      set(yellowBtnRef, "Button Off");
  
      const redButtonFunction = onValue(redBtnRef, (snapshot) => {
        const data = snapshot.val();
        setButtonOn((prev) => ({ ...prev, "Red Button": data }));
      });
  
      const greenButtonFunction = onValue(greenBtnRef, (snapshot) => {
        const data = snapshot.val();
        setButtonOn((prev) => ({ ...prev, "Green Button": data }));
      });
  
      const yellowButtonFunction = onValue(yellowBtnRef, (snapshot) => {
        const data = snapshot.val();
        setButtonOn((prev) => ({ ...prev, "Yellow Button": data }));
      });
  
      return () => {
        redButtonFunction();
        greenButtonFunction();
        yellowButtonFunction();
      };
    }, []);

    const activateButton = (buttonKey) => {
      const newState = buttonOn[buttonKey] === "Button Turned On" ? "Button Turned Off" : "Button Turned On";
      set(ref(database, buttonKey), newState);
    };

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
        <Text style={styles.buttonText}>Red {buttonOn["Red Button"]}</Text>
        <TouchableOpacity style={styles.redbutton} activeOpacity={0.7} onPress={() => activateButton('Red Button')} />
        <Text style={styles.buttonText}>Green {buttonOn["Green Button"]}</Text>
        <TouchableOpacity style={styles.greenbutton} activeOpacity={0.7} onPress={() => activateButton('Green Button')} />
        <Text style={styles.buttonText}>Yellow {buttonOn["Yellow Button"]}</Text>
        <TouchableOpacity style={styles.yellowButton} activeOpacity={0.7} onPress={() => activateButton('Yellow Button')} />
      </View>
    </SafeAreaView>
  )
}

export default NavigateScreen;