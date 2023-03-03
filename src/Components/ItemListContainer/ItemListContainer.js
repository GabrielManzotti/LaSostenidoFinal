import React, { useContext } from 'react'
import './styles.css'
import { mockedProducts } from '../Utils/Products'
import { fetchCopyDrinks } from '../Utils/FetchCopyDrinks'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Search from '../Search/Search'
import SearchResults from '../Pages/SearchResults/SearchResults'
import { db } from '../../Firebase/FirebaseConfig'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { CartContext } from '../ItemContext/ItemContext'


function ItemListContainer(children, search) {



  const [products, setProducts] = useState([]);

  const { addProduct, cart } = useContext(CartContext)

  console.log(cart)

  useEffect(() => {
    const getDrinks = async () => {
      const q = query(collection(db, "drinks"))
      const querySnapshot = await getDocs(q)
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setProducts(docs)
    }
    getDrinks()
  }, [])



  return (
    <div>
      <div className='section-itemListContainer '>
        <ItemList products={products} />
      </div>
    </div>
  )
}

export default ItemListContainer