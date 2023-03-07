import React from 'react'
import "./styles.css"

function LargeDescription({ data }) {
    const dataLargeDescription = data[0]
    return (
        <div>
            <div className='title-description'>
                <p>Descripción</p>
            </div>
            <div className='body-description'>
                {dataLargeDescription ? dataLargeDescription.largeDescription : null}
            </div>
        </div>
    )
}

export default LargeDescription