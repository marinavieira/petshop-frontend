import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from "./componentes/telas/Home";
import Pet from "./componentes/telas/pet/Pet";
import Cliente from "./componentes/telas/cliente/Cliente";
import Login from "./componentes/telas/login/Login";
import MenuPublico from "./componentes/telas/MenuPublico";
import MenuPrivado from "./componentes/telas/MenuPrivado";

const router = createBrowserRouter([
  {
    path : "/",
    element : <MenuPublico/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "login",
        element : <Login/>
      }   
    ]
  },
  {
    path : "/privado",
    element : <MenuPrivado/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "pets",
        element :  <Pet/>
      }
      ,
      {
        path : "clientes",
        element :  <Cliente/>
      },
      {
        path : "login",
        element : <Login/>
      }   
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
