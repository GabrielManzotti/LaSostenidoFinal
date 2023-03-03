import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Search from '../../Search/Search';
import "./styles.css"
import { useState } from 'react'
import { useEffect } from 'react'
import {db} from "../../../Firebase/FirebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore"

 
function Home(selected) {

  return (
    <div>
      <div className='search-div'>
    <Search></Search>
      </div>
    <ItemListContainer></ItemListContainer>
    </div>
  )
}

export default Home