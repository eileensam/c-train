import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Button, Image } from 'react-native';
import allWords from '../constants/c_words';
import { loadGuessedWords, saveGuessedWords, clearGuessedWords } from '../utils/storage';
import GuessInput from '../components/GuessInput';
import GuessedWordsList from '../components/GuessedWordsList';
import * as Font from 'expo-font';

export default function App() {
  const [guess, setGuess] = useState('');
  const [guessedWords, setGuessedWords] = useState(new Set());
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'TrainFont': require('../assets/fonts/nycta-r46.ttf'),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
      loadFonts();
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

  const handleClearGuesses = async () => {
    setGuessedWords(new Set());
    await clearGuessedWords();
  };

  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            key={1}
            source={require('../assets/images/c_train_logo.png')}
            style={styles.image}
          />
          <Text style={[styles.title, { fontFamily: 'TrainFont' }]}>TRAIN</Text>
        </View>
      <GuessInput guess={guess} setGuess={setGuess} handleGuessSubmit={handleGuessSubmit} />
      <GuessedWordsList guessedWords={guessedWords} />
      <Button title="Clear Guesses" onPress={handleClearGuesses} titleStyle={{ fontFamily: 'TrainFont' }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 30, // Add vertical padding
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
  image: {
    width: 60, // Adjust this value to change the image size
    height: 60, // Adjust this value to change the image size
    marginBottom: 20,
    marginRight: 10
  },
});
