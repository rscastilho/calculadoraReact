import React from 'react'
import Calculadora from '../../Components/Calculadora/Calculadora'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={`${styles.principal} `}>


      <Calculadora />


    </div>
  )
}

export default Home