import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';

const Question = (props) => {
  return (
      <Text style={styles.heading}>{props.questionTitle}</Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: '#212121',
    backgroundColor: '#2286c3',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    fontSize: 22,
  },
});

export default Question;
