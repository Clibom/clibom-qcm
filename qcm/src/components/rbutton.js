import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ResponseButton = (props) => {
  return (
      <Button
        buttonStyle={styles.button}
        title={props.buttonTitle}
      />
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    backgroundColor: '#3e4444',
  }
});

export default ResponseButton;
