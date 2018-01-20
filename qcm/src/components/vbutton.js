import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ValidationButton = (props) => {
  return (
      <Button
        large
        buttonStyle={styles.button}
        title={props.buttonTitle}
        textStyle={styles.text}
      />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9be7ff',
    flex: 2
  },
  text: {
    color: '#212121'
  }
});

export default ValidationButton;
