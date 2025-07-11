
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Players from './Pages/players';
import AboutUs from './Pages/AboutUs';
import Selva from './Pages/selva';
import Prashanth from './Pages/prashanth';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/players1/:id" element={<Players/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/selva" element={<Selva/>}/>
          <Route path="/prashanth" element={<Prashanth/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
