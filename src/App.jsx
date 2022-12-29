import './App.css';
import Layouts from './layouts/Layouts';
import Carousel from './components/Carousel';

import indexRouter from './router/index'; // Importo el enrutador principal
import { RouterProvider } from 'react-router-dom'; // Importo el componente que inyecta las rutas a la app
//El componente lee el enrutador y renderiza la vistas definidas

function App() {

  return (
    <Layouts>
      <Carousel/>
      <RouterProvider router={indexRouter}/>
      {/*  a travez del atributo router conecto las rutas con la app  */}
    </Layouts>
    
  );
}

export default App;
