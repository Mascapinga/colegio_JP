import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History'; 
import MissionVision from './pages/MissionVision'; 
import Levels from './pages/Levels';
import Directives from './pages/Directives';
import Teachers from './pages/Teachers';
import Administrativos from './pages/Administrativos';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Developers from './pages/Developers';
import Staff from './pages/Staff';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: '1' }}>
        <Routes>
          {/* Página Principal */}
          <Route path="/" element={<Home />} />
          
          {/* Sección Nosotros */}
          <Route path="/nosotros" element={<About />} />
          <Route path="/nosotros/historia" element={<History />} />
          <Route path="/nosotros/mision-vision" element={<MissionVision />} />
          
          {/* Sección Niveles */}
          <Route path="/niveles" element={<Levels />} />
          
          {/* Sección Personal */}
          <Route path="/personal" element={<Staff />} />
          <Route path="/personal/directivos" element={<Directives />} />
          <Route path="/personal/docentes" element={<Teachers />} />
          <Route path="/personal/administrativos" element={<Administrativos />} />
          
          {/* Otras Secciones */}
          <Route path="/comunidad" element={<Community />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/developers" element={<Developers />} />
          
          {/* Redirecciones para mantener compatibilidad */}
          <Route path="/academico" element={<Levels />} />
          <Route path="/academico/niveles" element={<Levels />} />
          <Route path="/academico/directivos" element={<Directives />} />
          <Route path="/docentes" element={<Teachers />} />
          <Route path="/administrativos" element={<Administrativos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;