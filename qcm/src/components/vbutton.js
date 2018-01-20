import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ValidationButton = (props) => {
  return (
      <Button
        large
        title={props.buttonTitle}
        color='#388e3c'
      />
  );
};

// const styles = StyleSheet.create({
//   button: {
//     marginTop: 15,
//     backgroundColor: '#388e3c',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     elevation: 2,
//     position: 'relative'
//   }
// });

export default ValidationButton;
