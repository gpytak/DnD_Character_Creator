import React, { useState } from 'react';
import AppContext from './AppContext';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput
} from 'react-native';

const Skills = ({route, navigation}) => {
  const context = React.useContext(AppContext);
  const { characterID } = route.params;
  const [character] = context.characters.filter((t) => t.id == characterID);

  const [acro, setAcro] = useState(character.skills.acro);
  const [animal, setAnimal] = useState(character.skills.animal);
  const [arcana, setArcana] = useState(character.skills.arcana);
  const [athl, setAthl] = useState(character.skills.athl);

  const [decep, setDecep] = useState(character.skills.decep);
  const [history, setHistory] = useState(character.skills.history);
  const [insight, setInsight] = useState(character.skills.insight);
  const [intim, setIntim] = useState(character.skills.intim);

  const [invest, setInvest] = useState(character.skills.invest);
  const [med, setMed] = useState(character.skills.med);
  const [nature, setNature] = useState(character.skills.nature);
  const [percep, setPercep] = useState(character.skills.percep);

  const [perfor, setPerfor] = useState(character.skills.perfor);
  const [pers, setPers] = useState(character.skills.pers);
  const [religion, setReligion] = useState(character.skills.religion);
  const [sleight, setSleight] = useState(character.skills.sleight);

  const [stealth, setStealth] = useState(character.skills.stealth);
  const [survival, setSurvival] = useState(character.skills.survival);

  function showSenses () {
    return (
      <View style={styles.listStats}>
        <Text style={styles.title}>Skills</Text>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Acrobatics</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.acro} onChangeText={setAcro} value={acro}/>
          <Text style={styles.label}>Animal Handling</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.animal} onChangeText={setAnimal} value={animal}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Arcana</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.arcana} onChangeText={setArcana} value={arcana}/>
          <Text style={styles.label}>Athletics</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.athl} onChangeText={setAthl} value={athl}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Deception</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.decep} onChangeText={setDecep} value={decep}/>
          <Text style={styles.label}>History</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.history} onChangeText={setHistory} value={history}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Insight</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.insight} onChangeText={setInsight} value={insight}/>
          <Text style={styles.label}>Intimidation</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.intim} onChangeText={setIntim} value={intim}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Investigation</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.invest} onChangeText={setInvest} value={invest}/>
          <Text style={styles.label}>Medicine</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.med} onChangeText={setMed} value={med}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Nature</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.nature} onChangeText={setNature} value={nature}/>
          <Text style={styles.label}>Perception</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.percep} onChangeText={setPercep} value={percep}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Performance</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.perfor} onChangeText={setPerfor} value={perfor}/>
          <Text style={styles.label}>Persuasion</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.pers} onChangeText={setPers} value={pers}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Religion</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.religion} onChangeText={setReligion} value={religion}/>
          <Text style={styles.label}>Sleight of Hand</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.sleight} onChangeText={setSleight} value={sleight}/>
        </View>
        <View style={styles.charContainer}>
          <Text style={styles.label}>Stealth</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.stealth} onChangeText={setStealth} value={stealth}/>
          <Text style={styles.label}>Survival</Text>
          <TextInput style={styles.charInfo} placeholder={character.senses.survival} onChangeText={setSurvival} value={survival}/>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      {showSenses()}
      <Button title="Done" color="#008000" onPress={() => {
        context.updateCharacter({...character, skills: {acro, animal, arcana, athl, decep, history, insight, intim, invest, med, nature, percep, perfor, pers, religion, sleight, stealth, survival}});
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
    fontSize: 12,
    padding: 5
  }
});


export default Skills;
