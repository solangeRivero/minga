import React from 'react'
import "../styles/Main.css"

const Main = (props) => {
    let {texto} = props
  return (
    <div className='Main'>
        <h2>Este es el Main</h2>
        <p>{texto}</p>
    </div>
  )
}

export default Main