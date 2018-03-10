import React from 'react';
import { View } from 'react-native';

const Card = () => (
      <View style={styles.containerStyle} />
  );
  
const styles = {
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#000',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marinTop: 10,
  }
};

export default Card;
