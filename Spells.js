import React, {useEffect, useState } from 'react';
import AppContext from './AppContext';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Spells = ({route, navigation}) => {
  const context = React.useContext(AppContext);
  const { characterID } = route.params;
  const [character] = context.characters.filter((t) => t.id == characterID);

  const [spells, setSpells] = useState(character.spells);
  const [spellsByName, setSpellsByName] = useState([]);
  const [selectedSpell, setSelectedSpell] = useState([]);
  
  useEffect(() => {
    (async () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://www.dnd5eapi.co/api/spells", requestOptions)
          .then(response => response.json())
          .then(result => setSpellsByName(result.results))
          .catch(error => console.log('error', error));
      } catch (err) {
        console.log('Error occured when fetching spells');
      }
  })();
}, []);

  function showSpells () {
    return (
      <View style={styles.listStats}>
        <Text style={styles.title}>Spells</Text>
          <View style={styles.container}>
            <Picker
              style={styles.picker}
              prompt="Choose Spells"
              selectedValue={selectedSpell}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedSpell(itemValue);
                }}>
              {
               spellsByName.length ? spellsByName.map(spell => (
                  <Picker.Item key={spell.index} label={spell.name} value={spell.name} />
                )) : <Picker.Item label="(Spells not loaded)" value={null} />
              }
            </Picker>
        </View>
      </View>
    )
  }

  const addSpell = (spellName) => {
    if(spells.filter((t) => t !== spellName))
      setSpells(spells => [...spells, selectedSpell]);
  };

  const removeSpell = (spellName) => {
    setSpells(spells.filter((t) => t !== spellName));
  };

  function displaySpells()
  {
    if(spells != null)
    {
      return (
        spells.map((item) => (
          <View style={styles.listSpells}>
            <Text style={styles.listStats}>
              {item}
            </Text>
            <Button title="X" color = "red" onPress={() => { removeSpell(item) }}/>
          </View>
      )))
    }
  }

  return (
    <View style={styles.screen}>
      {showSpells()}
      {displaySpells()}

      <Button title="Add Spell" onPress={() => { addSpell(selectedSpell) }}/>
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, spells});
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
  picker: {
    color: 'black'
  },
  listSpells: { 
    color: 'black',
    flexDirection: "row",
    justifyContent: "space-between"
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


export default Spells;
