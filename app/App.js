import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

// Define an array of English words starting with "C" for the user to guess
const allWords = new Set(['cat', 'car', 'cake', 'computer', 'cow', 'cloud', 'cup']);

export default function App() {
  // State to track the user's current guess and the index of the current word to guess
  const [guess, setGuess] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle when the user submits their guess
  const handleGuessSubmit = () => {
    console.log(`Guess: ${guess}`);
    const currentWord = allWords[currentIndex];
    if (guess.toLowerCase() === currentWord) {
      Alert.alert('Correct!', `The word was "${currentWord}".`);
    } else {
      Alert.alert('Incorrect', `Try again!`);
    }
    // Move to the next word to guess
    setCurrentIndex((prevIndex) => prevIndex + 1);
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
