import React from 'react';
import { TextInput, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const GuessInput = ({ guess, setGuess, handleGuessSubmit }) => (
  <View style={styles.container}>
    <TextInput
      style={[styles.input, { fontFamily: 'TrainFont' }]}
      onChangeText={setGuess}
      value={guess}
      placeholder="guess"
      autoCapitalize="none"
    />
    <TouchableOpacity style={styles.button} onPress={handleGuessSubmit}>
      <Text style={[styles.buttonText, { fontFamily: 'TrainFont' }]}>submit</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  button: {
    backgroundColor: '#0065bd',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default GuessInput;
