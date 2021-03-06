import React from 'react';
import { AppRegistry, ScrollView, View } from 'react-native';
import ResponseButton from './src/components/rbutton';
import ValidationButton from './src/components/vbutton';
import Question from './src/components/question';

const App = () => (
  <View
    style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
  >
      <Question
        questionTitle={'Quelles déclarations concernant l’endroit'
        + ' d’exécution d’un jet franc sont correctes ? '}
      />
    <ScrollView
      style={{
        flex: 1
      }}
    >
      <ResponseButton
        buttonTitle={'L’adversaire peut exécuter le jet franc depuis l’endroit où le ballon se trouve si le ballon n’est pas immédiatement posé au sol après une décision de jet franc'} />
      <ResponseButton
        buttonTitle={'Après un changement irrégulier, le jet franc peut être exécuté depuis l’endroit où se trouve le ballon au lieu de la zone de remplacement si cela représente un avantage pour l’équipe exécutant le jet franc'} />
      <ResponseButton
        buttonTitle={' Le jet franc pour jeu passif est toujours joué depuis l’endroit où le ballon se trouve au moment du coup de sifflet'} />
      <ResponseButton
        buttonTitle={'La tolérance latérale est plus ou moins la même lors d’un jet franc sur la ligne médiane que lors d’un engagement'} />
    </ScrollView>
      <ValidationButton
        buttonTitle={'Valider'}
      />
  </View>
);

AppRegistry.registerComponent('qcm', () => App);
