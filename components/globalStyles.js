import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#0F0F0F', // Dark gray
  secondary: '#0065bd', // C train blue
  accent: '#f9f251', // LED sign amber
  white: '#ffffff',
  black: '#000000'
};

export const globalStyles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: colors.primary,
     alignItems: 'center',
     justifyContent: 'center',
     paddingTop: 50,
     paddingHorizontal: 20,
     paddingVertical: 30,
   },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'TrainFont',
    paddingTop: 30,
  },
  title: {
    color: colors.accent,
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'TrainFont',
    textAlign: 'center',
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
  link: {
    color: colors.accent,
  },
  footerContainer: {
     backgroundColor: colors.primary,
     alignItems: 'center',
     justifyContent: 'center',
     paddingTop: 50,
     paddingHorizontal: 20,
   },
  input: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 5,
    padding: 10,
    flex: 1,
    fontFamily: 'TrainFont',
    backgroundColor: colors.primary, // Set the background color of the input box
    color: colors.text,
  },
});
