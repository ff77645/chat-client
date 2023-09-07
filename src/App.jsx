import {useRoutes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register/index'
import Chat from './pages/Chat'
import Error from './pages/Error'
import Forgot from './pages/Forgot'


function App() {
  const routes = useRoutes([
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/forgot',
      element:<Forgot/>
    },
    {
      path:'/chat',
      element:<Chat/>
    },
    {
      path:'*',
      element:<Error/>
    },
  ])
  return (
    <>
      {routes}
    </>
  )
}

export default App
