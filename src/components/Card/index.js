import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Modal from '../Modal';
import { styles } from './style';


export default function Card({ book }) {
   const [show, setShow] = useState(false)
   const [bookItem, setItem] = useState()
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                    if (amount != undefined) {
                        return (
                            <>
                            <TouchableOpacity style={styles.container} onPress={() => {setShow(true), setItem(item)}}>
                                <View style={styles.image}>
                                    <Image source={{uri: thumbnail}} style={styles.image1} resizeMode="contain"/>
                                </View>
                                <View style={styles.bottom}>
                                    <Text style={styles.title}>{item.volumeInfo.title}</Text>
                                    <Text style={styles.price}>R$ {amount}</Text>
                                </View>

                            </TouchableOpacity>
                            <Modal show={show} item={bookItem}/>
                            </>
                        )
                        
                    }
                })
            }
            
           
        </>

    )
}