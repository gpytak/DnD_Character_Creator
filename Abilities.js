import React, { useState } from 'react';
import AppContext from './AppContext';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput
} from 'react-native';

const Abilities = ({route, navigation}) => {
  const context = React.useContext(AppContext);
  const { characterID } = route.params;
  const [character] = context.characters.filter((t) => t.id == characterID);

  const [str, setStr] = useState(character.abilities.str);
  const [dex, setDex] = useState(character.abilities.dex);
  const [con, setCon] = useState(character.abilities.con);
  const [int, setInt] = useState(character.abilities.int);
  const [wis, setWis] = useState(character.abilities.wis);
  const [chr, setChr] = useState(character.abilities.chr);

  function showAbilities () {
    return (
      <View style={styles.listStats}>
        <Text style={styles.title}>Abilities</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Strength</Text>
          <TextInput style={styles.charInfo} placeholder={character.abilities.str} onChangeText={setStr} value={str}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Dexterity</Text>
          <TextInput style={styles.charInfo} placeholder={character.abilities.dex} onChangeText={setDex} value={dex}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Constitution</Text>
          <TextInput style={styles.charInfo} placeholder={character.abilities.con} onChangeText={setCon} value={con}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Intelligence</Text>
          <TextInput style={styles.charInfo} placeholder={character.abilities.int} onChangeText={setInt} value={int}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Wisdom</Text>
          <TextInput style={styles.charInfo} placeholder={character.abilities.wis} onChangeText={setWis} value={wis}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Charisma</Text>
          <TextInput style={styles.charInfo} placeholder={character.abilities.chr} onChangeText={setChr} value={chr}/>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      {showAbilities()}
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, abilities: {str, dex, con, int, wis, chr}});
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
    padding: 5
  }
});


export default Abilities;
