import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { globalStyles, colors } from './globalStyles';

const FeedbackForm = ({navigation}) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    if (!feedback) {
      Alert.alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xleqkozw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          feedback,
        }),
      });

      if (response.ok) {
        Alert.alert('Thank you for your feedback!');
        setFeedback('');
      } else {
        Alert.alert('There was an error submitting your feedback. Please try again.');
      }
    } catch (error) {
      Alert.alert('There was an error submitting your feedback. Please try again.');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={[styles.title, globalStyles.title]}>feedback</Text>
      <TextInput
        style={[globalStyles.input, styles.textArea]}
        placeholder="your feedback..."
        placeholderTextColor={colors.white}
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <TouchableOpacity style={[styles.button, globalStyles.button]} onPress={handleSubmit}>
        <Text style={styles.buttonText}>submit</Text>
      </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Home', {  })}>
        <Text style={globalStyles.buttonText}>home</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'TrainFont',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    fontFamily: 'TrainFont',
  },
  textArea: {
    height: 100,
  },
  button: {
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'TrainFont',
  },
      navLinks: {
        color: '#0065bd',
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'TrainFont',
      }
});

export default FeedbackForm;
