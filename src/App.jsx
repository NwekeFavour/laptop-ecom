// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'flowbite'
import Home from './views/home'
import { useRoutes } from 'react-router-dom'
import About from './views/about'
import Header from "./components/header";
import './assets/index.css'

function App() {
  // const [count, setCount] = useState(0)
  const Routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    }
  ])

  return (
    <>
      <div>
        <Header name="LaptopTote"/>
        {Routes}
      </div>
    </>
  )
}

export default App
