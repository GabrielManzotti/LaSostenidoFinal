import React from 'react'
import { collection, query, where, getDocs, FieldPath, isEqualTo, doc } from 'firebase/firestore'
import { db } from '../../../Firebase/FirebaseConfig'
import { useEffect } from 'react'
import { useState } from 'react'

function Ticket() {

    const order = JSON.parse(localStorage.getItem("order"));

    console.log(order.cart[0].price)


    return (
        <div>Ticket</div>
    )
}

export default Ticket