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

const Saves = ({route, navigation}) => {
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

  const [strSave, setStrSave] = useState(character.saves.strSave);
  const [dexSave, setDexSave] = useState(character.saves.dexSave);
  const [conSave, setConSave] = useState(character.saves.conSave);
  const [intSave, setIntSave] = useState(character.saves.intSave);
  const [wisSave, setWisSave] = useState(character.saves.wisSave);
  const [chrSave, setChrSave] = useState(character.saves.chrSave);

  function showSaves () {
    return (
      <View>
      {orientation === 'portrait' ? (
        <View style={styles.listStats}>
        <Text style={styles.title}>Saves</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Strength Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.strSave} onChangeText={setStrSave} value={strSave}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Dexterity Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.dexSave} onChangeText={setDexSave} value={dexSave}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Constitution Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.conSave} onChangeText={setConSave} value={conSave}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Intelligence Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.intSave} onChangeText={setIntSave} value={intSave}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Wisdom Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.wisSave} onChangeText={setWisSave} value={wisSave}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Charisma Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.chrSave} onChangeText={setChrSave} value={chrSave}/>
        </View>
      </View>
      ) : (
        <View style={styles.listStats}>
        <Text style={styles.title}>Saves</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Strength Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.strSave} onChangeText={setStrSave} value={strSave}/>
          <Text style={styles.label}>Dexterity Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.dexSave} onChangeText={setDexSave} value={dexSave}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Constitution Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.conSave} onChangeText={setConSave} value={conSave}/>
          <Text style={styles.label}>Intelligence Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.intSave} onChangeText={setIntSave} value={intSave}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Wisdom Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.wisSave} onChangeText={setWisSave} value={wisSave}/>
          <Text style={styles.label}>Charisma Save</Text>
          <TextInput style={styles.charInfo} placeholder={character.saves.chrSave} onChangeText={setChrSave} value={chrSave}/>
        </View>
      </View>
      )}
    </View>
    )
  }

  return (
    <View style={styles.screen}>
      {showSaves()}
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, saves: {strSave, dexSave, conSave, intSave, wisSave, chrSave},});
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


export default Saves;
