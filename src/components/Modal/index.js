import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export default function Modal({show, item}) {
    if (!show) {
        return null
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
    return(
        <>
            <View style={styles.container}>
                <Image source={{uri: thumbnail}} style={styles.image}/>
                <View styles={styles.info}>
                    <Text>{item.volumeInfo.title}</Text>
                    <Text>{item.volumeInfo.authors}</Text>
                    <Text>{item.volumeInfo.publisher}</Text>
                    <Text>{item.volumeInfo.publishedDate}</Text>
                </View>

                <View style={styles.description}>
                    <Text>{item.volumeInfo.description}</Text>
                </View>
            </View>
        </>
    )
}