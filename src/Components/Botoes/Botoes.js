import React from 'react'
import styles from './Botoes.module.css'

const Botoes = ({ valor, setNumber, number, total }) => {

    const handleAddNumber = () => {
        console.log(number)
        if (!number.length === 0 && valor === '+') {
            return
        } else {
            setNumber([total, ...number, valor].join(''))
        }

    }

    const botoesAcao = () => {
        if (valor === "-" && !number.length) {
            return true;
        }
        if (valor === "+" && !number.length) {
            return true;
        }
        if (valor === "/" && !number.length) {
            return true;
        } if (valor === "*" && !number.length) {
            return true;
        }
        if (valor === "=" && !number.length) {
            return true;
        } 
        if (valor === "C" && !number.length) {
            return true;
        }
        if (valor === "." && !number.length) {
            return true;
        }

    }



    return (
        <div>
            <button
                className={`btn btn-warning ${styles.button}`}
                disabled={botoesAcao()}
                onClick={handleAddNumber}
            >
                {valor}
            </button>
        </div>
    )
}

export default Botoes