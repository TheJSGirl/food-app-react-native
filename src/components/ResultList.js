import React from 'react';
import {View, Text , StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultDetail';

const ResultList = ({results, title }) => {
    return <View style= {{marginBottom: 10}}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data = {results}
            keyExtractor = {(result) => result.id }
            renderItem = {({item}) => {
            return <ResultsDetail result={item}/>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
        marginLeft: 15
    }
})
export default ResultList;
