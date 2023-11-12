import React from 'react';
import AppContext from './AppContext';

import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

const About = ({navigation}) => {
  const context = React.useContext(AppContext);

  return (
    <View style={styles.screen}>
      <Text style={styles.title} >D&D Character Sheet</Text>
      <Text style={styles.credit} >Created by: Gregory Pytak</Text>
      <Text style={styles.label} >Proposal Document</Text>
      <Text style={styles.desc} >https://docs.google.com/spreadsheets/d/1w3RuPB-WLQmP7YvpPZtFlT7mGPTBmWj41ml48gM3BcM/edit#gid=0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  title: { 
    color: 'black',
    fontSize: 30,
    textAlign: 'center'
  },
  credit: { 
    color: 'black',
    fontSize: 15,
    padding: 15,
    textAlign: 'center'
  },
  label: { 
    color: 'black',
    fontSize: 15,
    padding: 5,
    textAlign: 'center'
  },
  desc: { 
    color: 'black',
    fontSize: 15,
    textAlign: 'center'
  }
});


export default About;
