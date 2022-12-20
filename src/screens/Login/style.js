import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#006699',
    },
    section: {
        marginTop: 75,
        marginLeft: 30

    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF'
    },
    subTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FFF'
    },
    loginButtonWrapper: {
        marginTop: 350,
        width: '100%',
        height: 150,
        alignItems: 'center',
        backgroundColor: '#006699'
    },
    loginButton: {
        width: 280,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    registerWrapper: {
        marginTop: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        color: '#FFF'
    }
})