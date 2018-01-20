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
    backgroundColor: '#97b498',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});

export default ResponseButton;
