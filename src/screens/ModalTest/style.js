import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 350,
    },
    imageWrapper: {
        width: '100%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -80,
        backgroundColor: '#141417',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    info: {
        marginTop: 20,
        marginLeft: 10,
        width: '100%',
    },
    title: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold'
    },
    author: {
        fontSize: 20,

    },
    description: {
        fontSize: 14,
        marginTop: 10,
    },
    footer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 90,
        marginLeft: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: '#007aff',
        width: 175,
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    buttonPurchase: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 12,
        backgroundColor: '#FFF',
        width: 175,
        height: 60,
        marginLeft: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
})