
import Footer from './Components/Footer/Footer'
import Navbare from './Components/Navbare/Navbare'
import HomePage from './pages/HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import Demo from './pages/Demo/Demo'
function App() {
  return (
    <div >
      <Navbare />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Sign-up' element={<SignUp />} />
        <Route path='/demo' element={<Demo />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
