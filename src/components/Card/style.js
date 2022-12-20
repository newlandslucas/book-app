import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 330,
        radius: 5,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    bottom: {
        color: '#fff',
        padding: 10,
        marginTop: 40
    },
    title: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },
    price: {
        fontSize: 12,
        color: '#000',
        marginTop: 5    
    },
    image: {
        width: '100%',
        height: 170,
        marginTop: 10
    },
    image1: {
        width: 200,
        height: 200
    }
})