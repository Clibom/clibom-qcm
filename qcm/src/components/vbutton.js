import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ValidationButton = () => (
      <Button
        large
        title='Validate'
        buttonStyle={styles.button}
        textStyle={styles.text}
      />
  );

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9be7ff',
    margin: 30,
  },
  text: {
    color: '#212121'
  }
});

export default ValidationButton;
