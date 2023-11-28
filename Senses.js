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

const Senses = ({route, navigation}) => {
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

  const [passPer, setPassPer] = useState(character.senses.passPer);
  const [passInv, setPassInv] = useState(character.senses.passInv);
  const [passIns, setPassIns] = useState(character.senses.passIns);

  function showSenses () {
    return (
      <View>
      {orientation === 'portrait' ? (
        <View style={styles.listStats}>
        <Text style={styles.title}>Senses</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Passive Perception</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.passPer} onChangeText={setPassPer} value={passPer}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Passive Investigation</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.passInv} onChangeText={setPassInv} value={passInv}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Passive Insight</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.passIns} onChangeText={setPassIns} value={passIns}/>
        </View>
      </View>
      ) : (
        <View style={styles.listStats}>
        <Text style={styles.title}>Senses</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Passive Perception</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.passPer} onChangeText={setPassPer} value={passPer}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Passive Investigation</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.passInv} onChangeText={setPassInv} value={passInv}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Passive Insight</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.passIns} onChangeText={setPassIns} value={passIns}/>
        </View>
      </View>
      )}
    </View>
    )
  }

  return (
    <View style={styles.screen}>
      {showSenses()}
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, senses: {passPer, passInv, passIns}});
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


export default Senses;
