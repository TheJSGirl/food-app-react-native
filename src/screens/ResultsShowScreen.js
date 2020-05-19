import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState([]);
    const id = navigation.getParam('id');


    const getResult = async(id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id)
    }, [])
   
    return <View style={styles.container}>
        <Text style={styles.name}>
            {result.name}
        </Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem = {({item}) => {
                return <Image style={styles.image} source={{uri: item}}/>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        marginVertical: 10

    },
    container: {
        marginLeft: 20
    },
    name: {
        fontSize: 20,
    }
})
export default ResultsShowScreen;