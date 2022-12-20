import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons'
import { styles } from './styles';
import axios from 'axios';

import Card from '../../components/Card';


const itemData = [
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
]

const API_KEY = "AIzaSyBYWBxXu0P7eETdZTnRcnZYnt0VeoJeulM"
const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books"
const GET_BOOKS_BY_NAME_ENDPOINT = "/v1/volumes?q="
const KEY_HEADER = "&key" + API_KEY

export default function Home() {
    const [search, setSearch] = useState("")
    console.log(search)

    const searchBook = (evt) => {
        if (evt.key === "return") {
            axios.get(GOOGLE_BOOKS_URL + GET_BOOKS_BY_NAME_ENDPOINT + search + KEY_HEADER)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.title}>My Books</Text>
                <TouchableOpacity>
                    <Entypo name="menu" size={28} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.section1}>
                <TextInput 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        style={styles.input}
                        onKeyPress={searchBook}
                        placeHolder="Enter Your Book Name"
                        placeholderTextColor="#6B6B6B"
                        
                    />
                <Text style={styles.title2}>Find Your Book</Text>
            </View>

            <FlatList
                numColumns={2} 
                data={itemData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ ({ item } ) => (<Card card={item}/>)}
             
             />
            
           
           
        </View>
    )
}