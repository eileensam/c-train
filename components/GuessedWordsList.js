import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const GuessedWordsList = ({ guessedWords }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guessed Words:</Text>
      <FlatList
        data={Array.from(guessedWords)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.wordItem}>
            <Text style={styles.wordText}>{item}</Text>
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
