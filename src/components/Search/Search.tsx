import { View, TextInput } from 'react-native';
import React from 'react';
import styles from './Search.style';

const Search = ({ value, onchange,placeholder }: any) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onchange} />
    </View>
  );
};

export default Search;
