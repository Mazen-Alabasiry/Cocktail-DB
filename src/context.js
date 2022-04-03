import React, { useState, useContext, useEffect } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [cocktailList, setCocktailList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDrinks(searchText);
  }, [searchText])
  //
  const fetchDrinks = async (query) => {
    const response = await fetch(url + query);
    const resJson = await response.json();
    setLoading(false)
    setCocktailList(resJson.drinks)
  }
  //
  const handelSearchChange = (e) => {
    let query = e.currentTarget.value;
    setSearchText(query)
  }

  return <AppContext.Provider value={{ searchText, handelSearchChange, cocktailList, loading }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
