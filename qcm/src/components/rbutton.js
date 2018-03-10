import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ResponseButton = (props) => (
      <Button
        title={props.buttonTitle}
        buttonStyle={styles.button}
        textStyle={styles.text}
      />
  );

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#64b5f6',
    marginTop: 10,
    width: 250,
    height: 100,
  },
  text: {
    color: '#212121',
    flex: 1
  }
});

export default ResponseButton;
