import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutPage = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'TrainFont' }]}>About</Text>
      <Text style={[styles.content, { fontFamily: 'TrainFont' }]}>
        Born out of boredom waiting for the MTA C train to come, the purpose of C Train is simple: try to guess as many words starting with c as you can.
      </Text>
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
});

export default AboutPage;
