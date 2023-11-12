import React, { useState } from 'react';
import AppContext from './AppContext';
import {
  StyleSheet,
  View,
  Button,
  Text,
  FlatList
} from 'react-native';

const Home = ({navigation}) => {
  const context = React.useContext(AppContext);

  function createCharacter() {
    context.addCharacter({
      id: Date.now().toString(),
      char: {name: 'New Character', level: "0", xp: "0", race: 'Race', classs: 'Class', speed: "0", ac: "0", hp: "0", prof: "0", initiative: "0"},
      abilities: {str: "0", dex: "0", con: "0", int: "0", wis: "0", chr: "0"},
      saves: {strSave: "0", dexSave: "0", conSave: "0", intSave: "0", wisSave: "0", chrSave: "0"},
      senses: {passPer: "0", passInv: "0", passIns: "0"},
      skills: {acro: "0", animal: "0", arcana: "0", athl: "0", decep: "0", history: "0", insight: "0", intim: "0", invest: "0", med: "0", nature: "0", percep: "0", perfor: "0", pers: "0", religion: "0", sleight: "0", stealth: "0", survival: "0"},
      prof: {armor: 'Armor', weapons: 'Weapons', tools: 'Tools', lang: 'Languages'},
      desc: {background: 'Background', align: 'Alignment', gender: 'Gender', eyes: 'Eyes', size: 'Size', height: 'Height', faith: 'Faith', hair: 'Hair', skin: 'Skin', age: "0", weight: "0", traits: 'Personality Traits', ideals: 'Ideals', bonds: 'Bonds', flaws: 'Flaws', appear: 'Appearance'}
    });
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Dungeons & Dragons</Text>
      <Text style={styles.title2}>Character Creator</Text>
      <View style={styles.listButtons}>
        <Button title="New Character" color="#008000" onPress={() => {createCharacter()}}/>
        <Button title="About" onPress={() => {navigation.navigate('About')}}/>
      </View>

      <FlatList
        data={context.characters}
        renderItem={({ item }) =>
          <View style={styles.charContainer}>
            <Text style={styles.charItem}>{item.char.name}</Text>
            <Text style={styles.charItem}>{item.char.race}</Text>
            <Text style={styles.charItem}>{item.char.level}</Text>
            <View style={styles.itemButtons}>
              <Button title="Edit" color="#008000" onPress={() => {navigation.navigate('Editor', { characterID: item.id })}}/>
              <Button title="X" color="red" onPress={() => context.removeCharacter(item.id)}/>
            </View>
          </View>
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10
  },
  title: { 
    color: 'black',
    fontSize: 30,
    textAlign: 'center'
  },
  title2: { 
    color: 'black',
    fontSize: 27,
    padding: 5,
    textAlign: 'center'
  },
  listButtons: {
    padding: 10,
    flexDirection: 'row',
    gap: 175,
    alignItems: 'center',
    borderColor: 'grey'
  },
  charContainer: {
    padding: 15,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 5
  },
  charItem: { 
    color: 'black',
    fontSize: 14,
    flex: 1
  },
  itemButtons: {
    gap: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey'
  }
});


export default Home;
