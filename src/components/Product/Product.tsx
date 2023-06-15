import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from './Product.style';

const Product = ({ url, title, price }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={{ uri: url }} />

                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>


        </View>
    )
}

export default Product;