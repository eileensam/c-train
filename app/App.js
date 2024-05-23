import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import allWords from '../assets/c_words';

export default function App() {
  // State to track the user's current guess and the index of the current word to guess
  const [guess, setGuess] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guessedWords, setGuessedWords] = useState(new Set());

  useEffect(() => {
    const loadGuessedWords = async () => {
      try {
        const storedGuessedWords = await AsyncStorage.getItem('guessedWords');
        if (storedGuessedWords !== null) {
          setGuessedWords(new Set(JSON.parse(storedGuessedWords)));
        }
      } catch (e) {
        console.error('Failed to load guessed words.', e);
      }
    };

    loadGuessedWords();
  }, []);


  // Function to handle when the user submits their guess
    const handleGuessSubmit = async () => {
      const lowerCaseGuess = guess.toLowerCase();
      console.log(`Guess: ${lowerCaseGuess}`);
      // Check if guess is a valid word
      if (allWords.has(lowerCaseGuess)) {
        // If so, check if it has already been guessed
        if (guessedWords.has(lowerCaseGuess)) {
          Alert.alert(`You already guessed ${lowerCaseGuess}.`);
        } else {
          Alert.alert(`Nice!`);
          const newGuessedWords = new Set(guessedWords);
          newGuessedWords.add(lowerCaseGuess);
          setGuessedWords(newGuessedWords);

          // Save to AsyncStorage
          try {
            await AsyncStorage.setItem('guessedWords', JSON.stringify(Array.from(newGuessedWords)));
          } catch (e) {
            console.error('Failed to save guessed words.', e);
          }
        }
      } else {
        // If not, alert the user
        Alert.alert('Invalid word');
      }
      // Clear the input field
      setGuess('');
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the C Word:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setGuess}
        value={guess}
        placeholder="Enter your guess"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleGuessSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
