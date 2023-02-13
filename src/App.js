import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/contact"
              element={<Contact/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>

  );
}

export default App;
