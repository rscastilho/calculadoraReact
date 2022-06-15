import React, { useState } from 'react'
import InputPrincipal from '../InputPrincipal/InputPrincipal'
import styles from "./Calculadora.module.css"
import Botoes from "../Botoes/Botoes"
import BotaosResultado from '../BotaoResultado/BotaoResultado'

const Calculadora = () => {

    const [number, setNumber] = useState([])
    const [total, setTotal] = useState()


    return (
        <div className={`${styles.principal} `}>
            <div>
                <InputPrincipal
                    number={number ? number : total}
                />
            </div>
            <table className=''>
                <thead>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <Botoes
                                    valor={1}
                                    setNumber={setNumber}
                                    number={number}
                                />
                            </div>
                        </td>
                        <td>
                            <div>
                                <Botoes
                                    valor={2}
                                    setNumber={setNumber}
                                    number={number}
                                />
                            </div>

                        </td>
                        <td>

                            <div>
                                <Botoes
                                    valor={3}
                                    setNumber={setNumber}
                                    number={number}
                                />
                            </div>
                        </td>
                        <td>
                            <div>
                                <Botoes
                                    valor={4}
                                    setNumber={setNumber}
                                    number={number}
                                />
                            </div>

                        </td>
                        <td>
                            <div>
                                <Botoes
                                    valor={5}
                                    setNumber={setNumber}
                                    number={number}
                                />
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <Botoes
                                    valor={6}
                                    setNumber={setNumber}
                                    number={number}
                                />
                            </div>

                        </td>
                        <td>

                            <div>
                                <Botoes
                                    valor={7}
                                    setNumber={setNumber}
                                    number={number}
                                />
                            </div>
                        </td>
                        <td>

                            <div>
                                <Botoes
                                    valor={8}
                                    setNumber={setNumber}
                                    number={number}
                                />
                            </div>
                        </td>
                        <td>
                            <div>
                                <Botoes
                                    valor={9}
                                    setNumber={setNumber}
                                    number={number}
                                />
                            </div>

                        </td>
                        <td>
                            <div>
                                <Botoes
                                    valor={0}
                                    setNumber={setNumber}
                                    number={number}
                                />
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <Botoes
                                    valor={'.'}
                                    setNumber={setNumber}
                                    number={number}
                                    total={total}
                                />
                            </div>

                        </td>
                        <td>

                            <div>
                                <Botoes
                                    valor={'/'}
                                    setNumber={setNumber}
                                    number={number}
                                    total={total}
                                />
                            </div>
                        </td>
                        <td>
                            <div>
                                <Botoes
                                    valor={'+'}
                                    setNumber={setNumber}
                                    number={number}
                                    total={total}
                                />
                            </div>

                        </td>
                        <td>
                            <div>
                                <Botoes
                                    valor={'-'}
                                    setNumber={setNumber}
                                    number={number}
                                    total={total}
                                />
                            </div>

                        </td>
                        <td>

                            <div>
                                <Botoes
                                    valor={'*'}
                                    setNumber={setNumber}
                                    number={number}
                                    total={total}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <BotaosResultado
                                    valor={'='}
                                    number={number}
                                    setTotal={setTotal}
                                    total={total}
                                    setNumber={setNumber}
                                />
                            </div>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                            <div>

                                <BotaosResultado
                                    valor={"C"}
                                    number={number}
                                    setTotal={setTotal}
                                    total={total}
                                    setNumber={setNumber}

                                />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    )
}

export default Calculadora