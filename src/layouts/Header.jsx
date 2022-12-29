import React, {useState} from 'react'

const Header = () => {

  const [variable, setVariable] = useState(false)

  const handleMenu = () => {
    setVariable(!variable)

    // if (variable === true){
    //   setVariable(false)
    // }
    // if (variable === false){
    //   setVariable(true)
    // }

  }

  return (
    <div>
        <nav>
        <p onClick={handleMenu}>ICONO</p>
       {
        variable
        ?(
          <div>
            <a href="#">Home</a>
            <a href="">Comics</a>
            <a href="">About Us</a>

          </div>
        ): null
       }
            <a href="./comics.html">Comics</a>
            <a class="login-button" href="#">Iniciar Sesión</a>
        </nav>
        <div class="section">
            <span span>
                Anunciamos nuestra próxima ronda de financiación. <a>Leer más →</a>
            </span>
            <h1>Tu tienda de comics favorita</h1>
            <p class="center">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <a class="button-started" href="./comics.html">Empezar → </a>
        </div>
    </div>
  )
}

export default Header