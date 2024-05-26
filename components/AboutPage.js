import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { globalStyles, colors } from './globalStyles';

const AboutPage = ({ route, navigation }) => {

  const handleLinkPress = () => {
    Linking.openURL('https://users.cs.duke.edu/~ola/ap/linuxwords');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>about</Text>
      <Text style={globalStyles.text}>
        born out of boredom waiting for the mta c train to come, the purpose of c train is simple: try to guess as many words starting with c as you can.
      </Text>
      <Text style={globalStyles.text}>
        the list of words was fed with {' '}
         <Text style={globalStyles.link} onPress={handleLinkPress}>
          this list of english words
         </Text>
         .
      </Text>
      <Text style={globalStyles.text}>
        if you think of a word that should be on the list or have other feedback, feel free to submit it by tapping the feedback button below.
      </Text>
      <View style={globalStyles.footerContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Home', {  })}>
        <Text style={globalStyles.buttonText}>home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('FeedbackForm', {  })}>
        <Text style={globalStyles.buttonText}>feedback</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    marginTop: 10,
  },
  navLinks: {
    color: '#0065bd',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'TrainFont',
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default AboutPage;
