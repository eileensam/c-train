import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import allWords from '../assets/c_words';

export default function App() {
  // State to track the user's current guess and the index of the current word to guess
  const [guess, setGuess] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guessedWords, setGuessedWords] = useState(new Set());

  // Function to handle when the user submits their guess
  const handleGuessSubmit = () => {
    console.log(`Guess: ${guess.toLowerCase()}`);
    // Check if guess is a valid word
    if (allWords.has(guess.toLowerCase())) {
      // If so, check if it has already been guessed
      if (guessedWords.has(guess.toLowerCase())) {
        Alert.alert(`You already guessed ${guess.toLowerCase()}.`);
      } else {
        Alert.alert(`Nice!`);
        guessedWords.add(guess.toLowerCase());
        setGuessedWords(new Set(guessedWords)); // Update the state
      }

    } else {
      // If not, alert the user
      Alert.alert('Invalid word');
    }
    // If so, check if it has already been guessed
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
