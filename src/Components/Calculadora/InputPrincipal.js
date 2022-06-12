import React, { useEffect, useRef, useState } from 'react'
import styles from './InputPrincipal.module.css'

const InputPrincipal = ({ number }) => {
  const inputRef = useRef();


  useEffect(() => {

    inputRef.current.focus()
  }, [])

  return (
    <div className={`${styles.principal}`}>
      <input
        type="text"
        readOnly
        value={number}
        ref={inputRef}
      />
    </div>
  )
}

export default InputPrincipal