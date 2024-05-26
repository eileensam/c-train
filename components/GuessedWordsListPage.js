import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import allWords from '../constants/c_words';
import {clearGuessedWords, loadGuessedWords } from '../utils/storage';

const GuessedWordsListPage = ({ route, navigation }) => {
  const { guessedWordsArray } = route.params;
  const [guessedWords, setGuessedWords] = useState(new Set(guessedWordsArray) || []);

  useEffect(() => {
    const fetchGuessedWords = async () => {
      const words = await loadGuessedWords();
      setGuessedWords(words);
    };

    fetchGuessedWords();
  }, []);

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
    <View style={styles.listContainer}>
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
      <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.button} onPress={handleClearGuesses}>
            <Text style={[styles.buttonText, { fontFamily: 'TrainFont' }]}>clear guesses</Text>
          </TouchableOpacity>
    <TouchableOpacity onPress={() => {
    console.log(guessedWords.size)
    navigation.navigate('Home', { guessedWords: guessedWords})}}>
            <Text style={[styles.buttonText, { fontFamily: 'TrainFont' }]}>home</Text>
          </TouchableOpacity>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 30, // Add vertical padding
  },
  listContainer: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,// Add vertical padding
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
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
  buttonText: {
      color: '#0065bd',
      padding: 10,
      borderWidth: 1,
      borderColor: '#0065bd',
      fontFamily: 'TrainFont',
    },
  footerContainer: {
    paddingVertical: 30,
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Align items on opposite sides
  },
});

export default GuessedWordsListPage;
