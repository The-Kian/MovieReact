'use strict';
import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export const screenStyle = StyleSheet.create({
    default: {
        backgroundColor: Colors.primaryMedium
    },
});

export const resultStyles = StyleSheet.create({
  resultContainer: {
    flex:1,
    borderRadius: 6,
    padding: 64,
    backgroundColor: Colors.primaryMedium,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: 16
  },
})

export const buttonStyles = StyleSheet.create({
    buttons: {
      borderRadius: 6,
      paddingVertical: 12,
      paddingHorizontal: 12,
      backgroundColor: Colors.primaryMedium,
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      marginTop: 0
    },
    flatButton: {
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
    iconButton: {
      margin: 8,
      borderRadius: 20,
    },
    buttonPressed: {
      opacity: 0.7,
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    },
  })