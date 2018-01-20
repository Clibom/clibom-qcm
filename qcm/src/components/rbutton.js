import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ResponseButton = () => {
  return (
      <Button
        buttonStyle={styles.button}
      />
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    backgroundColor: '#cbd2d9'
  }
});

export default ResponseButton;
