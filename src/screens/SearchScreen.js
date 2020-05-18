import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        searchApi('');
    
    }, [])
    const searchApi = async () => {
       try {
        const response = await yelp.get('/search', {
            params: {
             limit: 50,
             term,
             location: 'san jose'
            }
         });
         setResults(response.data.businesses);
       }
       catch(err) {
           setErrorMsg('Something went wrong')
       }
    }
    return <View>
        <SearchBar 
            term={term} 
            onTermChange = {newTerm => setSearchTerm(newTerm)} 
            onTermSubmit = {searchApi}
        />
        {/* {errorMsg ? <Text>{errorMsg}</Text> : null} */}
        <Text>result {results.length}</Text>
    </View>
}

export default SearchScreen;