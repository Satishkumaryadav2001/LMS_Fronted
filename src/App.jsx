
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {

  return (
<>
<Routes>
  <Route path="/" element = {<HomePage />} ></Route>
  <Route path="/about" element = {<AboutUs />} ></Route>
  <Route path="/signup" element = {<Signup/>} />
  <Route path="/login" element = {<Login/>} />
  <Route path="*" element = {<NotFound/>} ></Route>
</Routes>

</>
  )
}

export default App
