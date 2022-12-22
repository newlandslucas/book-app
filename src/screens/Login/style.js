import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    section: {
        marginTop: 75,
        marginLeft: 30

    },
    title: {
        fontSize: 45,
       
        color: '#FFF'
    },
    subTitle: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FFF'
    },
    loginButtonWrapper: {
        marginTop: 350,
        width: '100%',
        height: 150,
        alignItems: 'center',
        backgroundColor: '#000'
    },
    loginButton: {
        width: 280,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC'
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: '#DCDCDC',
        width: 175,
        height: 50
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