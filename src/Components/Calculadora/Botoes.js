import React from 'react'
import styles from './Botoes.module.css'

const Botoes = ({ valor, setNumber, number,total }) => {

    const handleAddNumber = () => {
        console.log(number)
        if (!number.length === 0 && valor === '+') {
            return
        } else {
            setNumber([total,...number, valor].join(''))
        }

    }

    return (
        <div>
            <button
                className={`${styles.button}`}
                disabled={((valor === "C" && number.length===0) || (valor === "+" && number.length===0)) ? true : false}
                onClick={handleAddNumber}
            >
                {valor}
            </button>
        </div>
    )
}

export default Botoes