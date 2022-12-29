import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layouts = (props) => {
    //Elementos que se repiten en todas las paginas NAV Y FOOTER
  return (
    <div>
        <Header/>
        <div>{props.children}</div>
        <Footer/>
    </div>
  )
}

export default Layouts