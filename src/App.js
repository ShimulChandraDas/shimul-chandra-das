import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className=' bg-base-300' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
