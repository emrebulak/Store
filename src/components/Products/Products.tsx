import { FlatList, Text } from 'react-native';
import React from 'react';
import Product from '../Product';

const Products = ({ header, prooducts }: any) => {
    const renderItem = ({ item }: any) => <Product url={item.imgURL} title={item.title} price={item.price} />

    return (
        <FlatList ListHeaderComponent={header} keyExtractor={(item) => item.id} numColumns={2} data={prooducts} renderItem={renderItem} />
    )
}

export default Products;