import './App.css';
import { Routes, Route } from "react-router-dom";
import Title from './Components/Title';
import About from './Components/About';
import AppDesign from './Components/AppDesign';
import Contact from './Components/Contact';
import GraphicDesign from './Components/GraphicDesign';
import Home from './Components/Home';
import Locations from './Components/Locations';
import WebDesign from './Components/WebDesign';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Title />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/app-design' element={<AppDesign />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/graphic-design' element={<GraphicDesign />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/web-design' element={<WebDesign />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
