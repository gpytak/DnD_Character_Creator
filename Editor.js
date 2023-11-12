import React, { useState } from 'react';
import AppContext from './AppContext';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { Drawer } from 'react-native-paper';

const Editor = ({route, navigation}) => {
  const context = React.useContext(AppContext);
  const { characterID } = route.params;
  const [character] = context.characters.filter((t) => t.id == characterID);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{character.char.name}</Text>
      <Drawer.Section>
        <Drawer.Item
          label="Character"
          onPress={() => navigation.navigate('Character', { characterID: character.id })}
        />
        <Drawer.Item
          label="Abilities"
          onPress={() => navigation.navigate('Abilities', { characterID: character.id })}
        />
        <Drawer.Item
          label="Saves"
          onPress={() => navigation.navigate('Saves', { characterID: character.id })}
        />
        <Drawer.Item
          label="Senses"
          onPress={() => navigation.navigate('Senses', { characterID: character.id })}
        />
        <Drawer.Item
          label="Skills"
          onPress={() => navigation.navigate('Skills', { characterID: character.id })}
        />
        <Drawer.Item
          label="Proficency"
          onPress={() => navigation.navigate('Proficency', { characterID: character.id })}
        />
        <Drawer.Item
          label="Description"
          onPress={() => navigation.navigate('Description', { characterID: character.id })}
        />
      </Drawer.Section>
      
      <Button title="Done" color="#008000" onPress={() => {
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
    color: 'blue',
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
  listButtons: {
    padding: 15,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    borderColor: 'grey'
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


export default Editor;
