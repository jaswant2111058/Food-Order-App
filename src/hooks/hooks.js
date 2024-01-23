import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const DateContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useData = () => {
  return useContext(DateContext);
};

const baseURL = "https://foodserver-c5lx.onrender.com";


export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [field, setField] = useState("All");
  const [getItem, setItem] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState({})
  const [recipt, setRecipt] = useState({})

  const source = axios.CancelToken.source();

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const isUser = async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
          setUser(JSON.parse(value))
        } else {
          console.log('No data found');
        }
      } catch (error) {
        console.error('Error retrieving data: ', error);
      }
    };
    isUser();
    return () => {
      source.cancel('Component unmounted');
    };
  }, []);

  useEffect(() => {
    const performSearch = async () => {
      try {
        startLoading();
        source.cancel('Previous request canceled'); // Cancel previous request
        const response = await axios.get(`${baseURL}/getitem?field=${field}&q=${query}`, { cancelToken: source.token });
        if (response) {
          setItem(response.data);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error searching:', error);
        }
      } finally {
        stopLoading(); // Stop loading regardless of success or error
      }
    };

    if (query.length > 2) {
      performSearch();
    } else {
      setSearchResult([]);
      stopLoading(); // Stop loading if query is not valid
    }

    return () => {
      source.cancel('Request canceled due to query or field change');
    };
  }, [query, field]);




  useEffect(() => {
    const getFoodItem = async () => {
      try {
        
        const response = await axios.get(`${baseURL}/getallitem`);
        if (response) {
          console.log(response.data)
          setItem(response.data);
        }
      } catch (error) {
          console.log('Request canceled:', error.message);
        } 
       finally {
        stopLoading(); // Stop loading regardless of success or error
      }
    };
   if (user) getFoodItem();
  }, []);

  // ... (remaining code)

  return (
    <DateContext.Provider value={{
      query,
      setQuery,
      isLoading,
      startLoading,
      stopLoading,
      user,
      setUser,
      searchResult,
      field,
      setField,
      getItem,
      setItem,
      selectedItem,
      setSelectedItem,
      baseURL,
      recipt,
      setRecipt
    }}>
      {children}
    </DateContext.Provider>
  );
};
