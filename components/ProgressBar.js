import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import allWords from '../constants/c_words';

const ProgressBar = ({ guessedWords }) => {
  const progress = guessedWords.size / allWords.size;
  const totalBlocks = 20; // Number of blocks in the progress bar
  const filledBlocks = Math.round(progress * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        {[...Array(filledBlocks)].map((_, index) => (
          <View key={index} style={[styles.block, styles.filledBlock]} />
        ))}
        {[...Array(emptyBlocks)].map((_, index) => (
          <View key={index} style={[styles.block, styles.emptyBlock]} />
        ))}
      </View>
      <Text style={styles.progressText}>{`${guessedWords.size} / ${allWords.size}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  progressBar: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  block: {
    width: 10, // Width of each block
    height: 10, // Height of each block
    marginRight: 2,
  },
  filledBlock: {
    backgroundColor: '#0065bd',
  },
  emptyBlock: {
    backgroundColor: '#ccc',
  },
  progressText: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'TrainFont',
  },
});

export default ProgressBar;
