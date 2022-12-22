import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    Header: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24,
        borderRadius: 24,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 5, 
    }, 
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 35
    },
    section1: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        radius: 15
    },
    title2: {
        fontSize: '14',
        fontWeight: 'bold',
        color: '#6B6B6B'

    },
    input: {
        width: 250,
        height: 45,
        backgroundColor: '#DCDCDC',
        borderRadius: 30,
        color: '#000',
        padding: 16,
        fontSize: 18,
        marginBottom: 10,
        

    },
    findText: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    FlatList: {
       flex: 1,
        flexDirection: 'row',
        
    },
    section2: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#DCDCDC',
        borderRadius: 30,
        marginBottom: 20
    },
    searchButtonWrapper: {
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#00acee',
        justifyContent: 'center',
        alignItems: 'center'
    },

    categoryName: {
        width: 100,
        marginRight: 250,
        marginBottom: 20

    }
    
})