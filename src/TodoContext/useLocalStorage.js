import {useState} from 'react';
import {useEffect} from 'react';

function useLocalStorage(itemName, initialValue){ 

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      console.log('test');
      setTimeout( () => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else{
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
          console.log(error);
        }
        
      }, 1000)
    })
  
    const saveItem = (newItem) => {
      try {
        const stringfiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringfiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem, 
      loading,
      error
    };
  }

export default useLocalStorage;