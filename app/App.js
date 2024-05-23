import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import allWords from '../constants/c_words';
import { loadGuessedWords, saveGuessedWords } from '../utils/storage';
import GuessInput from '../components/GuessInput';
import GuessedWordsList from '../components/GuessedWordsList';

export default function App() {
  const [guess, setGuess] = useState('');
  const [guessedWords, setGuessedWords] = useState(new Set());

  useEffect(() => {
    const fetchGuessedWords = async () => {
      const loadedGuessedWords = await loadGuessedWords();
      setGuessedWords(loadedGuessedWords);
    };

    fetchGuessedWords();
  }, []);

  const handleGuessSubmit = async () => {
    const lowerCaseGuess = guess.toLowerCase();
    console.log(`Guess: ${lowerCaseGuess}`);
    if (allWords.has(lowerCaseGuess)) {
      if (guessedWords.has(lowerCaseGuess)) {
        Alert.alert(`You already guessed ${lowerCaseGuess}.`);
      } else {
        Alert.alert(`Nice!`);
        const newGuessedWords = new Set(guessedWords);
        newGuessedWords.add(lowerCaseGuess);
        setGuessedWords(newGuessedWords);
        await saveGuessedWords(newGuessedWords);
      }
    } else {
      Alert.alert('Invalid word');
    }
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the C Word:</Text>
      <GuessInput guess={guess} setGuess={setGuess} handleGuessSubmit={handleGuessSubmit} />
      <GuessedWordsList guessedWords={guessedWords} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
