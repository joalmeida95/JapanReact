import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Service from './pages/Service';
import MensajeError from './pages/MensajeError';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="login" element={<Login />} />

          <Route path='*' element={<MensajeError />} />
        </Route>
      </Routes>

      
    </div>
  );
}

 export default App;
