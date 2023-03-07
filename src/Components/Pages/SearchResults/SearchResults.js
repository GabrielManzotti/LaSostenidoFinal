import React from 'react'
import Search from '../../Search/Search'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import { fetchCopyDrinks } from '../../Utils/FetchCopyDrinks'
import { mockedProducts } from '../../Utils/Products'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemListContainerSearch from '../../ItemListContainerSearch/ItemListContainerSearch'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.css"
import { db } from '../../../Firebase/FirebaseConfig'
import { collection, query, where, getDocs } from 'firebase/firestore'



function SearchResults() {
  const [searchDataResult, setSearchDataResult] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const getDrinks = async () => {
      const q = query(collection(db, "drinks"), where("brand", "==", id))
      const querySnapshot = await getDocs(q)
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setSearchDataResult(docs)
    }
    getDrinks()
  }, [id])

  return (
    <div>
      <div className='search-div'>
        <h2 className='search-title'>Resultado de la búsqueda:</h2>
      </div>
      <div className='search-div'>
        <Search></Search>
      </div>
      {searchDataResult ? <ItemListContainerSearch search={searchDataResult} /> : null}
    </div>
  )
}

export default SearchResults