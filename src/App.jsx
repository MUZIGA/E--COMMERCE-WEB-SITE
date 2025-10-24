
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import About from './components/About'
import Footer from './Components/Footer'
import Contact from "./components/contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Products' element={<Product />}/>
        <Route path='/About' element={<About />}/>
        
         <Route path='/Contact' element={<Contact />}>
         </Route>
      </Routes>
      <Footer />
    </Router>
  )
}
export default App