import { SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import styles from './App.style';

//Components
import Header from './components/Header';
import Search from './components/Search';
import Products from './components/Products';

//Datas
import prooducts from './assets/json/products.json';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'PATİKASTORE'} />
      
      <Products header={<Search placeholder='Ara...' value={search} onchange={setSearch} />} prooducts={prooducts} />
    </SafeAreaView>
  );
};

export default App;
