import './App.css'
import { BrowserRouter as Router,Switch,Route, Routes } from 'react-router-dom'
import {Navbar,SideBar} from './components'
import { Home } from './components/Home'
import { About } from './components/About'

function App() {

  

  return (
    <>
      <Router>
        <Navbar />
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<StripeCheckout />} />


        </Routes>
      </Router>
    </>
  )
}

export default App
