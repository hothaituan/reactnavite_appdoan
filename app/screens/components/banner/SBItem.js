import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const SBItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.image }} style={styles.image} />

  </View>
);

const styles = StyleSheet.create({
  itemContainer: {

    width: 350, height: 210, alignItems: 'center', justifyContent: 'center',



  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
});
