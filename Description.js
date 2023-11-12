import React, { useState } from 'react';
import AppContext from './AppContext';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput
} from 'react-native';

const Description = ({route, navigation}) => {
  const context = React.useContext(AppContext);
  const { characterID } = route.params;
  const [character] = context.characters.filter((t) => t.id == characterID);

  const [background, setBackground] = useState(character.desc.background);
  const [align, setAlign] = useState(character.desc.align);
  const [gender, setGender] = useState(character.desc.gender);
  const [eyes, setEyes] = useState(character.desc.eyes);

  const [size, setSize] = useState(character.desc.size);
  const [height, setHeight] = useState(character.desc.height);
  const [faith, setFaith] = useState(character.desc.faith);
  const [hair, setHair] = useState(character.desc.hair);

  const [skin, setSkin] = useState(character.desc.skin);
  const [age, setAge] = useState(character.desc.age);
  const [weight, setWeight] = useState(character.desc.weight);
  const [traits, setTraits] = useState(character.desc.traits);

  const [ideals, setIdeals] = useState(character.desc.ideals);
  const [bonds, setBonds] = useState(character.desc.bonds);
  const [flaws, setFlaws] = useState(character.desc.flaws);
  const [appear, setAppear] = useState(character.desc.appear);

  function showSenses () {
    return (
      <View style={styles.listStats}>
        <Text style={styles.title}>Description</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Background</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.background} onChangeText={setBackground} value={background}/>
          <Text style={styles.label}>Alignment</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.align} onChangeText={setAlign} value={align}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Gender</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.gender} onChangeText={setGender} value={gender}/>
          <Text style={styles.label}>Eyes</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.eyes} onChangeText={setEyes} value={eyes}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Size</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.size} onChangeText={setSize} value={size}/>
          <Text style={styles.label}>Height</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.height} onChangeText={setHeight} value={height}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Faith</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.faith} onChangeText={setFaith} value={faith}/>
          <Text style={styles.label}>Hair</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.hair} onChangeText={setHair} value={hair}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Skin</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.skin} onChangeText={setSkin} value={skin}/>
          <Text style={styles.label}>Age</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.age} onChangeText={setAge} value={age}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Weight</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.weight} onChangeText={setWeight} value={weight}/>
          <Text style={styles.label}>Personality Traits</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.traits} onChangeText={setTraits} value={traits}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Ideals</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.ideals} onChangeText={setIdeals} value={ideals}/>
          <Text style={styles.label}>Bonds</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.bonds} onChangeText={setBonds} value={bonds}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Flaws</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.flaws} onChangeText={setFlaws} value={flaws}/>
          <Text style={styles.label}>Appearance</Text>
          <TextInput style={styles.charInfo} placeholder={character.desc.appear} onChangeText={setAppear} value={appear}/>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      {showSenses()}
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, desc: {background, align, gender, eyes, size, height, faith, hair, skin, age, weight, traits, ideals, bonds, flaws, appear}});
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


export default Description;
