import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#f5f6fa',
        margin: 10,
        borderRadius: 10,
        width:Dimensions.get('window').width/2,
        flex:1
    },
    header: {
        margin: 20,
    },
    image: {
        width: Dimensions.get('window').width / 2.8,
        height: Dimensions.get('window').height / 5,
        borderRadius: 10
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 22
    },
    price: {
        fontWeight: 'bold',
        fontSize: 19
    }
});