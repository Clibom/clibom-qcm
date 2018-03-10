import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const Question = (props) => (
      <Text style={styles.heading}>{props.questionTitle}</Text>
  );

const styles = StyleSheet.create({
  heading: {
    color: '#212121',
    backgroundColor: '#2286c3',
    marginTop: 30,
    marginRight: 5,
    marginLeft: 5,
    fontSize: 22,
  },
});

export default Question;
