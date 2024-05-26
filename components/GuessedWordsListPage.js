import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import allWords from '../constants/c_words';

const GuessedWordsListPage = ({ route, navigation }) => {
  const { guessedWords } = route.params;

  const handleClearGuesses = async () => {
    Alert.alert(
      'Clear Guesses',
      'Are you sure you want to clear all guessed words?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            setGuessedWords(new Set());
            await clearGuessedWords();
          },
        },
      ],
      { cancelable: false }
    );
  };

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
      <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.button} onPress={handleClearGuesses}>
            <Text style={[styles.buttonText, { fontFamily: 'TrainFont' }]}>clear guesses</Text>
          </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[styles.buttonText, { fontFamily: 'TrainFont' }]}>home</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 50,
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 30, // Add vertical padding
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
  footerContainer: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Align items on opposite sides
  },
});

export default GuessedWordsListPage;
