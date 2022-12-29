/* Router carpeta que va a contener todos los conponentes que rendericen paginas( Home, comics, Aboutus, Sign In, etc)
index.js va a funcionar como enrutador, es decir en base a la URL que lee reenderiza una pagina o la que corresponda*/

import { createBrowserRouter} from 'react-router-dom'
import Comics from './Comics/Comics'
import Carousel from '../components/Carousel'

const indexRoute = createBrowserRouter([//Este metodo creador de rutas requiere un array con todas las rutas de la aplicacion

    {path: "/", element: <Carousel/>},// La primer ruta que define es la principal (con la barrita) y va a renderizar el elemento Carousel
    // Cada objeto esta compuesto por dos propiedades path que es la URL y element que es el componente de pagina que va a renderizar esa ruta
    {path:"/comics", element:<Comics/>}
])

export default indexRoute
