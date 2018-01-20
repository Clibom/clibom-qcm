import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

const Question = (props) => {
  return (
      <Text style={styles.heading}>{props.questionTitle}</Text>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    backgroundColor: '#c8e6c9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  heading: {
    color: '#c8e6c9',
    marginTop: 10,
    fontSize: 22,
  },
});

export default Question;
