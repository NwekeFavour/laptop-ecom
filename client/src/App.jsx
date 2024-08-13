// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'flowbite'
import Home from './views/home'
import { useRoutes } from 'react-router-dom'
import Help from './views/help'
import Header from "./components/header";
import './assets/index.css'
import Footer from './components/footer'
import Register from './views/admin/register'
import Login from './views/admin/login'

function App() {
  // const [count, setCount] = useState(0)
  const Routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/help-center',
      element: <Help/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/login',
      element: <Login/>
    }
  ])

  return (
    <>
      <div>
        <Header name="LaptopTote"/>
        {Routes}
        <Footer name="LaptopTote"/>
      </div>
    </>
  )
}
export default App
