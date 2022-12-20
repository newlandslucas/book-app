import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    Header: {
        backgroundColor: '#006699',
        width: '100%',
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24,
        flexDirection: 'row',
        borderRadius: 10,
        
    }, 
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF'
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
        height: 50,
        backgroundColor: '#DCDCDC',
        borderRadius: 25,
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
        borderRadius: 25,
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