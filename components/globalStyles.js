import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#0F0F0F', // Dark gray
  secondary: '#0065bd', // C train blue
  accent: '#FFBF00', // LED sign amber
  white: '#ffffff',
  black: '#000000'
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'TrainFont',
  },
  title: {
    color: colors.accent,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'TrainFont',
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
      color: colors.accent,
      padding: 10,
      borderWidth: 1,
      borderColor: colors.accent,
      fontFamily: 'TrainFont',
      marginBottom: 20,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.accent,
  },
  listItemText: {
    color: colors.white,
    fontSize: 18,
  },
});
