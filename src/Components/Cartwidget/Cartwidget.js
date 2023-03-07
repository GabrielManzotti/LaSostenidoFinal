import React from 'react'
import './styles.css'

const Cartwidget = ({ quantity }) => {
    return (
        <div className='circleShoppCart'>
            <a>{quantity}</a>
        </div>
    )
}

export default Cartwidget


