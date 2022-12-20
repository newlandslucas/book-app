import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons'
import { styles } from './styles';
import axios from 'axios';

import Card from '../../components/Card';


// const itemData = [
//     <Card />
    
// ]

const API_KEY = "AIzaSyBYWBxXu0P7eETdZTnRcnZYnt0VeoJeulM"
const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books"
const GET_BOOKS_BY_NAME_ENDPOINT = "/v1/volumes?q="
const KEY_HEADER = "&key" + API_KEY
const maxResults = "&maxResults=40"

export default function Home() {
    const [search, setSearch] = useState("")
    const [bookData, setBookData] = useState([])
    console.log('book data:', bookData)

    function searchBook() {
        if(search) {
            axios.get(GOOGLE_BOOKS_URL + GET_BOOKS_BY_NAME_ENDPOINT + search + KEY_HEADER + maxResults)
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    function handleSearchBook() {
        searchBook(search)
    }

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.title}>IBM Books</Text>
                <TouchableOpacity>
                    <Entypo name="menu" size={28} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.section1}>
                <View style={styles.section2}>
                <TextInput 
                        value={search}
                        onChangeText={search => setSearch(search)}
                        style={styles.input}
                        onKeyPress={searchBook}
                        placeHolder="Enter Your Book Name"
                        placeholderTextColor="#1d3557"
                        
                    />
                    
                </View>
            </View>

            {/* <FlatList
                numColumns={2} 
                data={bookData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ ({ item } ) => (<Card card={item}/>)}
             
             /> */}

             <ScrollView>
                <Card book={bookData}/>
             </ScrollView>
        </View>
    )
}