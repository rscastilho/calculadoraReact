import React from 'react'
import styles from './BotaoResultado.module.css'

const BotaosResultado = ({ valor, setTotal, number, total, setNumber }) => {

    const handleCalcular = () => {
     
        if (valor === "C") {
            setNumber('');
            setTotal('');
        }
        else {
            let totalValor = eval(number)
            setTotal(totalValor)
            console.log(total)
            setNumber('')
        }
    }

    return (
        <div>
            <button
                className={`${styles.button} btn btn-danger`}
                onClick={handleCalcular}
            >
                {valor}
            </button>
        </div>
    )
}

export default BotaosResultado