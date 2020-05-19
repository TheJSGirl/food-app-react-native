import React from 'react';
import {View, Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from './ResultDetail';

const ResultList = ({results, title, navigation}) => {
    if(!results.length) {
        return null;
    }
    return <View style= {{marginBottom: 10}}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data = {results}
            keyExtractor = {(result) => result.id }
            renderItem = {({item}) => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {
                    id: item.id
                })}>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
                )
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
export default withNavigation(ResultList);
