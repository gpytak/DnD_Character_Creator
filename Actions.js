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

const Actions = ({route, navigation}) => {
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

  const [action, setAction] = useState(character.actions.action);
  const [bonus, setBonus] = useState(character.actions.bonus);
  const [reaction, setReaction] = useState(character.actions.reaction);
  const [other, setOther] = useState(character.actions.other);

  function showActions() {
    return (
      <View>
      {orientation === 'portrait' ? (
        <View style={styles.listStats}>
        <Text style={styles.title}>Actions</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Actions</Text>
          <TextInput style={styles.charInfo} placeholder={character.actions.action} onChangeText={setAction} value={action}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Bonus Actions</Text>
          <TextInput style={styles.charInfo} placeholder={character.actions.bonus} onChangeText={setBonus} value={bonus}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Reactions</Text>
          <TextInput style={styles.charInfo} placeholder={character.actions.reaction} onChangeText={setReaction} value={reaction}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Other</Text>
          <TextInput style={styles.charInfo} placeholder={character.actions.other} onChangeText={setOther} value={other}/>
        </View>
      </View>
      ) : (
        <View style={styles.listStats}>
        <Text style={styles.title}>Actions</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Actions</Text>
          <TextInput style={styles.charInfo} placeholder={character.actions.action} onChangeText={setAction} value={action}/>
          <Text style={styles.label}>Bonus Actions</Text>
          <TextInput style={styles.charInfo} placeholder={character.actions.bonus} onChangeText={setBonus} value={bonus}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Reactions</Text>
          <TextInput style={styles.charInfo} placeholder={character.actions.reaction} onChangeText={setReaction} value={reaction}/>
          <Text style={styles.label}>Other</Text>
          <TextInput style={styles.charInfo} placeholder={character.actions.other} onChangeText={setOther} value={other}/>
        </View>
      </View>
      )}
    </View>
    )
  }

  return (
    <View style={styles.screen}>
      {showActions()}
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, actions: {action, bonus, reaction, other}});
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


export default Actions;
