import AsyncStorage from '@react-native-async-storage/async-storage';

const GUESSED_WORDS_KEY = 'guessed_words';

export const loadGuessedWords = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(GUESSED_WORDS_KEY);
    return jsonValue != null ? new Set(JSON.parse(jsonValue)) : new Set();
  } catch (e) {
    console.error('Failed to load guessed words', e);
    return new Set();
  }
};

export const saveGuessedWords = async (guessedWords) => {
  try {
    const jsonValue = JSON.stringify(Array.from(guessedWords));
    await AsyncStorage.setItem(GUESSED_WORDS_KEY, jsonValue);
  } catch (e) {
    console.error('Failed to save guessed words', e);
  }
};

export const clearGuessedWords = async () => {
  try {
    await AsyncStorage.removeItem(GUESSED_WORDS_KEY);
  } catch (e) {
    console.error('Failed to clear guessed words', e);
  }
};
