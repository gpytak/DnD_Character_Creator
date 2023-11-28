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

const Proficency = ({route, navigation}) => {
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

  const [armor, setArmor] = useState(character.prof.armor);
  const [weapons, setWeapons] = useState(character.prof.weapons);
  const [tools, setTools] = useState(character.prof.tools);
  const [lang, setLang] = useState(character.prof.lang);

  function showProf() {
    return (
      <View>
      {orientation === 'portrait' ? (
        <View style={styles.listStats}>
        <Text style={styles.title}>Proficencies and Languages</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Armor</Text>
          <TextInput style={styles.charInfo} placeholder={character.prof.armor} onChangeText={setArmor} value={armor}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Weapons</Text>
          <TextInput style={styles.charInfo} placeholder={character.prof.weapons} onChangeText={setWeapons} value={weapons}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Tools</Text>
          <TextInput style={styles.charInfo} placeholder={character.prof.tools} onChangeText={setTools} value={tools}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Languages</Text>
          <TextInput style={styles.charInfo} placeholder={character.prof.lang} onChangeText={setLang} value={lang}/>
        </View>
      </View>
      ) : (
        <View style={styles.listStats}>
        <Text style={styles.title}>Proficencies and Languages</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Armor</Text>
          <TextInput style={styles.charInfo} placeholder={character.prof.armor} onChangeText={setArmor} value={armor}/>
          <Text style={styles.label}>Weapons</Text>
          <TextInput style={styles.charInfo} placeholder={character.prof.weapons} onChangeText={setWeapons} value={weapons}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Tools</Text>
          <TextInput style={styles.charInfo} placeholder={character.prof.tools} onChangeText={setTools} value={tools}/>
          <Text style={styles.label}>Languages</Text>
          <TextInput style={styles.charInfo} placeholder={character.prof.lang} onChangeText={setLang} value={lang}/>
        </View>
      </View>
      )}
    </View>
    )
  }

  return (
    <View style={styles.screen}>
      {showProf()}
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, prof: {armor, weapons, tools, lang}});
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


export default Proficency;
