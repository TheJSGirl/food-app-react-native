import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';

import yelp from '../api/yelp';


const SearchScreen = () => {
    const [term, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const filterResultByPrice = (price) => {
        return results.filter(result => result.price === price)
    }

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
    return < >
        <SearchBar 
            term={term} 
            onTermChange = {newTerm => setSearchTerm(newTerm)} 
            onTermSubmit = {searchApi}
        />
        {/* {errorMsg ? <Text>{errorMsg}</Text> : null} */}
        <ScrollView>
            <ResultList results={filterResultByPrice('$')} title="Cost Effective" />
            <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />
            <ResultList results={filterResultByPrice('$$')} title="Big Spender" />
        </ScrollView>
    </>
}

export default SearchScreen;
