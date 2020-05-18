import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search');
        setResults(response.data.business);
    }
    return <View>
        <SearchBar term={term} onTermChange= {newTerm => setSearchTerm(newTerm)} />
        <Text>Search Screen</Text>
    </View>
}

export default SearchScreen;