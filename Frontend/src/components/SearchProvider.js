import {useState, createContext} from 'react';
import getSearch from "../API/GetSearchProduct.js";
export const SearchContext = createContext("");

function SearchProvider ({children}){
    const [products, setProducts] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const searchUpdate = (searchValue, category, sort) =>{
        getSearch(searchValue, category, sort)
        .then(data=>{
            setProducts(data.products);
        })
        setIsSearched(true);
    }

    const getBack = () =>{
        setIsSearched(false)
    }

    return(
        <SearchContext.Provider value={{products, setProducts, isSearched, setIsSearched, searchUpdate, getBack}}>
        {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider