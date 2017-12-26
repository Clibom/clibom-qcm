import Expo, { Font } from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform, Alert } from 'react-native';
import {
  Text,
  Button,
  Icon,
} from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

export default class App extends React.Component {
  state={
    //TODO Change this with POO Logic with component and state
    color1: colors.darkgray,
    color2: colors.darkgray,
    color3: colors.darkgray,
    color4: colors.darkgray,
    answer1:"Réponse 1",
    answer2:"Réponse 2",
    answer3:"Réponse 3",
    answer4:"Réponse 4",
  };

  _onClickAnswer = () => {
    if(this.state.color == socialColors.linkedin){
      this.setState({
        color: colors.darkgray
      });
    } else {
      this.setState({
        color: colors.linkedin
      });
    };
    // this._changeButtonColor;
  };

  _changeButtonColor = () => {

  };

  _validateAnswer = () => {};

  render() {
    return (
      <ScrollView>
        <View style={styles.hero}>
            <Icon color="white" name="whatshot" size={62} type="material" />
            <Text style={styles.heading}>Question</Text>
          </View>
          <Button
            backgroundColor={this.state.color}
            onPress={this._onClickAnswer}
            title={this.state.answer1}
            buttonStyle={styles.button}
          />
          <Button
            backgroundColor={this.state.color}
            onPress={this._onClickAnswer}
            title={this.state.answer2}
            buttonStyle={styles.button}
          />
          <Button
            backgroundColor={this.state.color}
            onPress={this._onClickAnswer}
            title={this.state.answer3}
            buttonStyle={styles.button}
          />
          <Button
            backgroundColor={this.state.color}
            onPress={this._onClickAnswer}
            title={this.state.answer4}
            buttonStyle={styles.button}
          />
          <Button
            backgroundColor={socialColors.coolgreen}
            onPress={this._validateAnswer}
            title="VALIDER"
            buttonStyle={styles.button}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2,
  },
  titleContainer: {},
  button: {
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black,
      },
    }),
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
