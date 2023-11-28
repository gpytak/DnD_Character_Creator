import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  Dimensions
} from 'react-native';

const Inventory = ({route, navigation}) => {
  const context = React.useContext(AppContext);
  const { characterID } = route.params;
  const [character] = context.characters.filter((t) => t.id == characterID);
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get('window');
      setOrientation(width > height ? 'landscape' : 'portrait');
    };
    
    Dimensions.addEventListener('change', handleOrientationChange);

    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  const [equip, setEquip] = useState(character.inventory.equip);
  const [attune, setAttune] = useState(character.inventory.attune);
  const [other, setOther] = useState(character.inventory.other);

  function showInventory() {
    return (
      <View>
      {orientation === 'portrait' ? (
        <View style={styles.listStats}>
        <Text style={styles.title}>Inventory</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Equipment</Text>
          <TextInput style={styles.charInfo} placeholder={character.inventory.equip} onChangeText={setEquip} value={equip}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Attuned Items</Text>
          <TextInput style={styles.charInfo} placeholder={character.inventory.attune} onChangeText={setAttune} value={attune}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Other Possessions</Text>
          <TextInput style={styles.charInfo} placeholder={character.prof.other} onChangeText={setOther} value={other}/>
        </View>
      </View>
      ) : (
        <View style={styles.listStats}>
        <Text style={styles.title}>Inventory</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Equipment</Text>
          <TextInput style={styles.charInfo} placeholder={character.inventory.equip} onChangeText={setEquip} value={equip}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Attuned Items</Text>
          <TextInput style={styles.charInfo} placeholder={character.inventory.attune} onChangeText={setAttune} value={attune}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Other Possessions</Text>
          <TextInput style={styles.charInfo} placeholder={character.prof.other} onChangeText={setOther} value={other}/>
        </View>
      </View>
      )}
    </View>
    )
  }

  return (
    <View style={styles.screen}>
      {showInventory()}
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, inventory: {equip, attune, other}});
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


export default Inventory;
