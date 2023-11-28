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

const Character = ({route, navigation}) => {
  const context = React.useContext(AppContext);
  const { characterID } = route.params;
  const [character] = context.characters.filter((t) => t.id == characterID);

  useEffect(() => {
    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get('window');
      context.setOrientation(width > height ? 'landscape' : 'portrait');
    };
    
    Dimensions.addEventListener('change', handleOrientationChange);

    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  const [name, setName] = useState(character.char.name);
  const [level, setLevel] = useState(character.char.level);
  const [xp, setXP] = useState(character.char.xp);
  const [race, setRace] = useState(character.char.race);
  const [classs, setClass] = useState(character.char.classs);
  const [speed, setSpeed] = useState(character.char.speed);
  const [ac, setAC] = useState(character.char.ac);
  const [hp, setHP] = useState(character.char.hp);
  const [prof, setProf] = useState(character.char.prof);
  const [initiative, setInitiative] = useState(character.char.initiative);

  function showCharacter () {
    return (
      <View>
      {context.orientation === 'portrait' ? (
        <View style={styles.listStats}>
        <Text style={styles.title}>Character</Text>
          <View style={styles.charContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.name} onChangeText={setName} value={name}/>
            <Text style={styles.label}>Race</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.race} onChangeText={setRace} value={race}/>
          </View>
          <View style={styles.charContainer}>
            <Text style={styles.label}>Class</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.classs} onChangeText={setClass} value={classs}/>
            <Text style={styles.label}>Level</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.level} onChangeText={setLevel} value={level}/>
          </View>
          <View style={styles.charContainer}>
            <Text style={styles.label}>XP</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.xp} onChangeText={setXP} value={xp}/>
            <Text style={styles.label}>Speed</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.speed} onChangeText={setSpeed} value={speed}/>
          </View>
          <View style={styles.charContainer}>
            <Text style={styles.label}>Armor Class</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.ac} onChangeText={setAC} value={ac}/>
            <Text style={styles.label}>Hit Points</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.hp} onChangeText={setHP} value={hp}/>
          </View>
          <View style={styles.charContainer}>
            <Text style={styles.label}>Proficency</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.prof} onChangeText={setProf} value={prof}/>
            <Text style={styles.label}>Initiative</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.initiative} onChangeText={setInitiative} value={initiative}/>
          </View>
      </View>
      ) : (
        <View style={styles.listStats}>
        <Text style={styles.title}>Character</Text>
          <View style={styles.charContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.name} onChangeText={setName} value={name}/>
            <Text style={styles.label}>Race</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.race} onChangeText={setRace} value={race}/>
            <Text style={styles.label}>Class</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.classs} onChangeText={setClass} value={classs}/>
            <Text style={styles.label}>Level</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.level} onChangeText={setLevel} value={level}/>
            <Text style={styles.label}>XP</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.xp} onChangeText={setXP} value={xp}/>
          </View>
          <View style={styles.charContainer}>
            <Text style={styles.label}>Speed</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.speed} onChangeText={setSpeed} value={speed}/>
            <Text style={styles.label}>Armor Class</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.ac} onChangeText={setAC} value={ac}/>
            <Text style={styles.label}>Hit Points</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.hp} onChangeText={setHP} value={hp}/>
            <Text style={styles.label}>Proficency</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.prof} onChangeText={setProf} value={prof}/>
            <Text style={styles.label}>Initiative</Text>
            <TextInput style={styles.charInfo} placeholder={character.char.initiative} onChangeText={setInitiative} value={initiative}/>
          </View>
      </View>
      )}
    </View>
    )
  }

  return (
    <View style={styles.screen}>
      {showCharacter()}
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, char: {name, level, xp, race, classs, speed, ac, hp, prof, initiative}});
        // context.setOrientation(context.orientation);
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
    color: 'black'
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


export default Character;
