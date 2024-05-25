import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import allWords from '../constants/c_words';

const ProgressBar = ({ guessedWords }) => {
  const progress = guessedWords.size / allWords.size;

  return (
    <View style={styles.container}>
      <Progress.Bar progress={progress} width={200} />
      <Text style={styles.progressText}>{`${guessedWords.size} / ${allWords.size}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'TrainFont',
  },
});

export default ProgressBar;