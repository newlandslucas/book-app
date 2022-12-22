import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Pressable } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import { styles } from './styles';
import axios from 'axios';

import Card from '../../components/Card';

const API_KEY = "AIzaSyBYWBxXu0P7eETdZTnRcnZYnt0VeoJeulM"
const GOOGLE_BOOKS_URL = "https://www.googleapis.com/books"
const GET_BOOKS_BY_NAME_ENDPOINT = "/v1/volumes?q="
const KEY_HEADER = "&key" + API_KEY
const maxResults = "&maxResults=40"

export default function Home({ navigation }) {
    const [search, setSearch] = useState("")
    const [bookData, setBookData] = useState([])

    function searchBook() {
        if (search) {
            axios.get(GOOGLE_BOOKS_URL + GET_BOOKS_BY_NAME_ENDPOINT + search + KEY_HEADER + maxResults)
                .then(res => setBookData(res.data.items))
                .catch(err => console.log(err))
        }
    }

    function GoBack() {
        navigation.navigate('login')
    }

    function GoNextScreen() {
        navigation.navigate('modalTest')
    }



    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.title}>IBM Books</Text>

                <TouchableOpacity onPress={GoBack}>
                    <Ionicons name="exit-outline" size={30} color="black" style={{ marginTop: 35 }} />
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


                    <EvilIcons name="search" size={26} color="black" style={{ marginRight: 10 }} />
                </View>
                <View style={styles.categoryName}>
                    <Text style={styles.findText}>All Books</Text>
                </View>
            </View>

            <ScrollView horizontal="true" showsHorizontalScrollIndicator="false" s>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Card book={bookData} />


                </View>
            </ScrollView>
        </View>

    )
}