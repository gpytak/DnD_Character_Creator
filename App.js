import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppContext from './AppContext';
import Home from './Home';
import About from './About';
import Editor from './Editor';
import Character from './Character';
import Abilities from './Abilities';
import Saves from './Saves';
import Senses from './Senses';
import Skills from './Skills';
import Proficency from './Proficency';
import Description from './Description';

const Stack = createNativeStackNavigator();

const App = () => {
  const [characters, setCharacters] = useState([]);

  const addCharacter = (newCharacter) => {
    setCharacters([...characters, {
      id: Date.now().toString(),
      char: {
        name: newCharacter.char.name,
        level: newCharacter.char.level,
        xp: newCharacter.char.xp,
        race: newCharacter.char.race,
        classs: newCharacter.char.classs,
        speed: newCharacter.char.speed,
        ac: newCharacter.char.ac,
        hp: newCharacter.char.hp,
        prof: newCharacter.char.prof,
        initiative: newCharacter.char.initiative
      },
      abilities: {
        str: newCharacter.abilities.str,
        dex: newCharacter.abilities.dex,
        con: newCharacter.abilities.con,
        int: newCharacter.abilities.int,
        wis: newCharacter.abilities.wis,
        chr: newCharacter.abilities.chr
      },
      saves: {
        strSave: newCharacter.saves.strSave,
        dexSave: newCharacter.saves.dexSave,
        conSave: newCharacter.saves.conSave,
        intSave: newCharacter.saves.intSave,
        wisSave: newCharacter.saves.wisSave,
        chrSave: newCharacter.saves.chrSave
      },
      senses: {
        passPer: newCharacter.senses.passPer,
        passInv: newCharacter.senses.passInv,
        passIns: newCharacter.senses.passIns
      },
      skills: {
        acro: newCharacter.skills.acro,
        animal: newCharacter.skills.animal,
        arcana: newCharacter.skills.arcana,
        athl: newCharacter.skills.athl,
        decep: newCharacter.skills.decep,
        history: newCharacter.skills.history,
        insight: newCharacter.skills.insight,
        intim: newCharacter.skills.intim,
        invest: newCharacter.skills.invest,
        med: newCharacter.skills.med,
        nature: newCharacter.skills.nature,
        percep: newCharacter.skills.percep,
        perfor: newCharacter.skills.perfor,
        pers: newCharacter.skills.pers,
        religion: newCharacter.skills.religion,
        sleight: newCharacter.skills.sleight,
        stealth: newCharacter.skills.stealth,
        survival: newCharacter.skills.survival
      },
      prof: {
        armor: newCharacter.prof.armor,
        weapons: newCharacter.prof.weapons,
        tools: newCharacter.prof.tools,
        lang: newCharacter.prof.lang
      },
      desc: {
        background: newCharacter.desc.background,
        align: newCharacter.desc.align,
        gender: newCharacter.desc.gender,
        eyes: newCharacter.desc.eyes,
        size: newCharacter.desc.size,
        height: newCharacter.desc.height,
        faith: newCharacter.desc.faith,
        hair: newCharacter.desc.hair,
        skin: newCharacter.desc.skin,
        age: newCharacter.desc.age,
        weight: newCharacter.desc.weight,
        traits: newCharacter.desc.traits,
        ideals: newCharacter.desc.ideals,
        bonds: newCharacter.desc.bonds,
        flaws: newCharacter.desc.flaws,
        appear: newCharacter.desc.appear
      }
    }]);
  };

  const removeCharacter = (characterId) => {
    setCharacters(characters.filter((t) => t.id !== characterId));
    console.log("(App) removing ", characterId);
  };

  const updateCharacter = (updatedCharacter) => {
    setCharacters(characters.map((t) => t.id == updatedCharacter.id ? updatedCharacter : t))
  };

  const contextValue = {
    characters,
    addCharacter,
    removeCharacter,
    updateCharacter
  };

  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About}/>
          <Stack.Screen name="Editor" component={Editor}/>
          <Stack.Screen name="Character" component={Character}/>
          <Stack.Screen name="Abilities" component={Abilities}/>
          <Stack.Screen name="Saves" component={Saves}/>
          <Stack.Screen name="Senses" component={Senses}/>
          <Stack.Screen name="Skills" component={Skills}/>
          <Stack.Screen name="Proficency" component={Proficency}/>
          <Stack.Screen name="Description" component={Description}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
 }

  export default App;
