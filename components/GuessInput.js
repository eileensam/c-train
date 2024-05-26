import React from 'react';
import { TextInput, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { globalStyles, colors } from './globalStyles';

const GuessInput = ({ guess, setGuess, handleGuessSubmit }) => (
  <View style={styles.container}>
    <TextInput
      style={[styles.input]}
      placeholderTextColor={colors.white}
      onChangeText={setGuess}
      value={guess}
      placeholder="guess"
      autoCapitalize="none"
      onSubmitEditing={handleGuessSubmit}
    />
    <TouchableOpacity style={styles.button} onPress={handleGuessSubmit}>
      <Text style={[styles.buttonText, { fontFamily: 'TrainFont' }]}>go</Text>
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
    borderColor: colors.white,
    borderRadius: 5,
    padding: 10,
    flex: 1,
    fontFamily: 'TrainFont',
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
