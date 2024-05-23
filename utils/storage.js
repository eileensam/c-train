import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadGuessedWords = async () => {
  try {
    const storedGuessedWords = await AsyncStorage.getItem('guessedWords');
    return storedGuessedWords !== null ? new Set(JSON.parse(storedGuessedWords)) : new Set();
  } catch (e) {
    console.error('Failed to load guessed words.', e);
    return new Set();
  }
};

export const saveGuessedWords = async (guessedWords) => {
  try {
    await AsyncStorage.setItem('guessedWords', JSON.stringify(Array.from(guessedWords)));
  } catch (e) {
    console.error('Failed to save guessed words.', e);
  }
};
