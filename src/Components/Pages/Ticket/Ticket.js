import React, { useContext } from 'react'
import { collection, query, where, getDocs, FieldPath, isEqualTo, doc } from 'firebase/firestore'
import { db } from '../../../Firebase/FirebaseConfig'
import { useEffect } from 'react'
import { useState } from 'react'
import "./styles.css"
import { Provider } from 'react-redux'
import TicketProducts from '../../ticketProducts/ticketProducts'
import { CartContext } from '../../ItemContext/ItemContext'

function Ticket() {
    const order = JSON.parse(localStorage.getItem("order"));
    let cardNumber = order.values.NroTarjeta
    let cardNumberEnmask = cardNumber.slice(-4)
    let orderProducts = order.cart
    const { cart } = useContext(CartContext)

    return (
        <div className='contenedorDatosTicket'>
            <div className='contenedorTicket'>
                <div className='contenedorFila'>
                    <div className="valorFijo">
                        <p>Nombres:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{order.values.Nombre}</p>
                    </div>
                </div>
                <div className="contenedorFila">
                    <div className="valorFijo">
                        <p>Apellido:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{order.values.Apellido}</p>
                    </div>
                </div>
                <div className="contenedorFila">
                    <div className="valorFijo">
                        <p>Email:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{order.values.Email}</p>
                    </div>
                </div>
                <div className="contenedorFila">
                    <div className="valorFijo">
                        <p>DNI:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{order.values.DNI}</p>
                    </div>
                </div>
                <div className="contenedorFila">
                    <div className="valorFijo">
                        <p>Provincia:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{order.values.Provincia}</p>
                    </div>
                </div>
                <div className="contenedorFila">
                    <div className="valorFijo">
                        <p>Dirección:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{order.values.Direccion}</p>
                    </div>
                </div>
                <div className="contenedorFila">
                    <div className="valorFijo">
                        <p>Código Postal:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{order.values.CP}</p>
                    </div>
                </div>
                <div className="contenedorFila">
                    <div className="valorFijo">
                        <p>Total orden de compra:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{`$ ${order.total},00`}</p>
                    </div>
                </div>

                <div className="contenedorFila">
                    <div className="valorFijo">
                        <p>Medio de pago:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{`${order.values.MarcaTarjeta} ${order.values.TipoTarjeta}`}</p>
                    </div>
                </div>
                <div className="contenedorFila">
                    <div className="valorFijo">
                        <p>Tarjeta número:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{`***${cardNumberEnmask}`}</p>
                    </div>
                </div>
                <div className="contenedorFila">
                    <div className="valorFijo">
                        <p>Cantidad de cuotas:</p>
                    </div>
                    <div className="valorVariable">
                        <p>{order.values.Cuotas}</p>
                    </div>
                </div>
                <div className='contenedor-final'>
                    <p>Muchas gracias por su compra</p>
                </div>
            </div>
            <div className='contenedor-productos'>
                <p>PRODUCTOS</p>
                {cart.map((producto) => {
                    return (
                        <TicketProducts product={producto} key={producto.brand} />
                    )
                })}
            </div>
        </div>
    )
}

export default Ticket