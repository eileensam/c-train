import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import allWords from '../constants/c_words';
import { loadGuessedWords, saveGuessedWords, clearGuessedWords } from '../utils/storage';
import GuessInput from '../components/GuessInput';
import * as Font from 'expo-font';
import ProgressBar from '../components/ProgressBar';

export default function App() {
  const [guess, setGuess] = useState('');
  const [guessedWords, setGuessedWords] = useState(new Set());
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

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

  useEffect(() => {
    if (route.params?.guessedWords) {
      setGuessedWords(new Set(route.params.guessedWords));
    }
  }, [route.params?.guessedWords]);

  const handleGuessSubmit = async () => {
    const lowerCaseGuess = guess.toLowerCase().trim();

    // Check if the guess is empty and return early if it is
    if (lowerCaseGuess === '') {
      return;
    }

    console.log(`Guess: ${lowerCaseGuess}`);
    if (allWords.has(lowerCaseGuess)) {
      if (guessedWords.has(lowerCaseGuess)) {
        Alert.alert(`You already guessed ${lowerCaseGuess}.`);
      } else {
        Alert.alert('Nice!');
        const newGuessedWords = new Set(guessedWords);
        newGuessedWords.add(lowerCaseGuess);
        setGuessedWords(newGuessedWords);
        await saveGuessedWords(newGuessedWords);
      }
    } else {
      Alert.alert('Invalid word.');
    }
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          key={1}
          source={require('../assets/images/c_train_logo.png')}
          style={styles.image}
        />
        <Text style={styles.title}>TRAIN</Text>
      </View>
      <GuessInput guess={guess} setGuess={setGuess} handleGuessSubmit={handleGuessSubmit} />
      <ProgressBar guessedWords={guessedWords} />
      <TouchableOpacity onPress={() => navigation.navigate('GuessedWordsListPage', { guessedWords: Array.from(guessedWords) })}>
        <Text style={[styles.navLinks, { fontFamily: 'TrainFont' }]}>view guessed words</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AboutPage')}>
        <Text style={[styles.navLinks, { fontFamily: 'TrainFont' }]}>about</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    fontFamily: 'TrainFont',
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 20,
    marginRight: 10,
  },
  buttonText: {
    color: '#0065bd',
  },
  navLinks: {
    color: '#0065bd',
    marginBottom: 20,
  }
});
