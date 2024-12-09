import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { ref, onValue, set } from 'firebase/database';
import { database } from './firebaseConfig'; // Adjust the path as necessary

const ButtonComponent = () => {
  const [buttonStates, setButtonStates] = useState({
    button1: "off",
    button2: "off",
    button3: "off",
  });

  useEffect(() => {
    const button1Ref = ref(database, 'button1');
    const button2Ref = ref(database, 'button2');
    const button3Ref = ref(database, 'button3');

    const unsubscribe1 = onValue(button1Ref, (snapshot) => {
      const data = snapshot.val();
      setButtonStates((prev) => ({ ...prev, button1: data }));
    });

    const unsubscribe2 = onValue(button2Ref, (snapshot) => {
      const data = snapshot.val();
      setButtonStates((prev) => ({ ...prev, button2: data }));
    });

    const unsubscribe3 = onValue(button3Ref, (snapshot) => {
      const data = snapshot.val();
      setButtonStates((prev) => ({ ...prev, button3: data }));
    });

    // Cleanup listeners on unmount
    return () => {
      unsubscribe1();
      unsubscribe2();
      unsubscribe3();
    };
  }, []);

  const toggleButton = (buttonKey) => {
    const newState = buttonStates[buttonKey] === "off" ? "on" : "off";
    set(ref(database, buttonKey), newState);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Button 1 is {buttonStates.button1}</Text>
      <Button title={`Toggle Button 1`} onPress={() => toggleButton('button1')} />
      
      <Text>Button 2 is {buttonStates.button2}</Text>
      <Button title={`Toggle Button 2`} onPress={() => toggleButton('button2')} />
      
      <Text>Button 3 is {buttonStates.button3}</Text>
      <Button title={`Toggle Button 3`} onPress={() => toggleButton('button3')} />
    </View>
  );
};

export default ButtonComponent;