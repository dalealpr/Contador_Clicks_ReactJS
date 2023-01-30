import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types' //Importar PropTypes


function Contador({ value }) {

     //useState
     const [counter, setCounter] = useState(value)

     //Funciones
     const handleAdd = () => {
         if (counter >= 0) {
             setCounter(counter + 1)
         }
     }
 
     const handleRest = () => {
         if (counter > 0) {
             setCounter(counter - 1)
         }else{
             alert('ERROR: El contador no puede ser menor a cero')
         }
     }
 
     const handleReset = () => {
         setCounter(value)
     }

     
    return (
        <div className='cont_contador'>
            <span className='numero'>{counter}</span>

            <div className='cont-button'>
                <button onClick={handleAdd}>+</button>
                <button onClick={handleRest}>-</button>
            </div>

            <button onClick={handleReset} className='resetBtn'>Reset</button>

        </div>
    )
}

export default Contador