import React, { useState } from 'react';
import AppContext from './AppContext';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput
} from 'react-native';

const Features = ({route, navigation}) => {
  const context = React.useContext(AppContext);
  const { characterID } = route.params;
  const [character] = context.characters.filter((t) => t.id == characterID);

  const [classs, setClasss] = useState(character.feat.classs);
  const [racial, setRacial] = useState(character.feat.racial);
  const [feats, setFeats] = useState(character.feat.feats);

  function showSenses () {
    return (
      <View style={styles.listStats}>
        <Text style={styles.title}>Features and Traits</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Class Features</Text>
          <TextInput style={styles.charInfo} placeholder={character.feat.classs} onChangeText={setClasss} value={classs}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Racial Traits</Text>
          <TextInput style={styles.charInfo} placeholder={character.feat.racial} onChangeText={setRacial} value={racial}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Feats</Text>
          <TextInput style={styles.charInfo} placeholder={character.feat.feats} onChangeText={setFeats} value={feats}/>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      {showSenses()}
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, feat: {classs, racial, feats}});
        navigation.goBack()
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5
  },
  title: { 
    color: 'red',
    fontSize: 25,
    padding: 5,
    textAlign: 'center'
  },
  label: { 
    color: 'black',
    fontSize: 17.5,
  },
  listStats: { 
    color: 'black',
  },
  charContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    fontSize: 12.5,
    gap: 10,
    padding: 5,
  },
  charInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 0.5,
    fontSize: 14,
    padding: 5,
    color: 'black'
  }
});


export default Features;
