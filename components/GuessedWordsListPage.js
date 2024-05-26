import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import allWords from '../constants/c_words';
import { clearGuessedWords, loadGuessedWords } from '../utils/storage';
import { globalStyles, colors } from './globalStyles';

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

  const renderItem = ({ item }) => (
    <View style={styles.wordItem}>
      <Text style={[styles.wordText, { fontFamily: 'TrainFont' }]}>
        {guessedWords.has(item) ? item : '******'}
      </Text>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.title, styles.title]}>GUESSED WORDS</Text>
      <Text style={[globalStyles.title, styles.title]}>{guessedWords.size} / {allWords.size}</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={Array.from(allWords)}
          keyExtractor={(item) => item}
          renderItem={renderItem}
          style={styles.flatList}
        />
      </View>
      <View style={globalStyles.footerContainer}>
        <TouchableOpacity onPress={handleClearGuesses}>
          <Text style={globalStyles.buttonText}>clear guesses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          console.log(guessedWords.size);
          navigation.navigate('Home', { guessedWords: Array.from(guessedWords) });
        }}>
          <Text style={globalStyles.buttonText}>home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.primary,
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  flatList: {
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  wordItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.accent,
  },
  wordText: {
    fontSize: 18,
    color: colors.white,
  },
  footerContainer: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GuessedWordsListPage;
