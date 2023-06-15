import {View, Text} from 'react-native';
import React from 'react';
import styles from './Header.style';
const Header = ({title}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
