import React, { useState } from 'react'
import InputPrincipal from './InputPrincipal'
import styles from "./Calculadora.module.css"
import Botoes from './Botoes'
import BotaosResultado from './BotaoResultado'

const Calculadora = () => {

    const [number, setNumber] = useState([])
    const [total, setTotal] = useState()


    return (
        <div className={`${styles.principal}`}>
            <div>
                <InputPrincipal
                    number={number ? number : total}
                />
            </div>
            <div className={`${styles.buttons}`}>
                <div>
                    <Botoes
                        valor={1}
                        setNumber={setNumber}
                        number={number}
                    />
                </div>

                <div>
                    <Botoes
                        valor={2}
                        setNumber={setNumber}
                        number={number}
                    />
                </div>

                <div>
                    <Botoes
                        valor={3}
                        setNumber={setNumber}
                        number={number}
                    />
                </div>
                    <div className={`${styles.buttons}`}>

                <div>
                    <Botoes
                        valor={4}
                        setNumber={setNumber}
                        number={number}
                    />
                </div>
                    </div>
                <div>
                    <Botoes
                        valor={5}
                        setNumber={setNumber}
                        number={number}
                        />
                </div>
                <div>
                    <Botoes
                        valor={6}
                        setNumber={setNumber}
                        number={number}
                    />
                </div>
                <div>
                    <Botoes
                        valor={7}
                        setNumber={setNumber}
                        number={number}
                    />
                </div>
                <div>
                    <Botoes
                        valor={8}
                        setNumber={setNumber}
                        number={number}
                    />
                </div>
                <div>
                    <Botoes
                        valor={9}
                        setNumber={setNumber}
                        number={number}
                    />
                </div>
                
                
                <div>
                    <Botoes
                        valor={0}
                        setNumber={setNumber}
                        number={number}
                        />
                </div>
                
                <div>
                    <Botoes
                        valor={'+'}
                        setNumber={setNumber}
                        number={number}
                        total={total}
                    />
                </div>
                <div>
                    <Botoes
                        valor={'-'}
                        setNumber={setNumber}
                        number={number}
                        total={total}
                    />
                </div>
                        </div>
                        <div className={`${styles.buttons}`}>

                <div>
                    <Botoes
                        valor={'*'}
                        setNumber={setNumber}
                        number={number}
                        total={total}
                    />
                </div>

                <div>
                    <Botoes
                        valor={'/'}
                        setNumber={setNumber}
                        number={number}
                        total={total}
                    />
                </div>
                <div>
                    <BotaosResultado
                        valor={'='}
                        number={number}
                        setTotal={setTotal}
                        total={total}
                        setNumber={setNumber}
                    />
                </div>

                <div className={`${styles.buttons}`}>

                <div>

                    <BotaosResultado
                        valor={"C"}
                        number={number}
                        setTotal={setTotal}
                        total={total}
                        setNumber={setNumber}

                    />
                </div>
                </div>
</div>




        </div>
    )
}

export default Calculadora