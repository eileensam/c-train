import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import allWords from '../constants/c_words';

const GuessedWordsList = ({ guessedWords }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'TrainFont' }]}>GUESSED WORDS</Text>
      <Text style={[styles.title, { fontFamily: 'TrainFont' }]}>{guessedWords.size} / {allWords.size}</Text>
      <FlatList
        data={Array.from(allWords)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.wordItem}>
            <Text style={[styles.wordText, { fontFamily: 'TrainFont' }]}>
              {guessedWords.has(item) ? item : '******'}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  wordItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  wordText: {
    fontSize: 18,
  },
});

export default GuessedWordsList;
