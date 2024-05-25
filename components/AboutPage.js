import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AboutPage = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.content, { fontFamily: 'TrainFont' }]}>
        born out of boredom waiting for the mta C train to come, the purpose of C train is simple: try to guess as many words starting with C as you can.
      </Text>
    <TouchableOpacity onPress={() => navigation.navigate('Home', {  })}>
            <Text style={[styles.navLinks, { fontFamily: 'TrainFont' }]}>home</Text>
          </TouchableOpacity>
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
  },
  navLinks: {
    color: '#0065bd',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  }
});

export default AboutPage;
