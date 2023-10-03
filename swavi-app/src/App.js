
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Blogpost from './component/Blogpost';
import Error from './component/Error';
// import { useState } from 'react';

function App() {
  // const[query,setQuery] = useState('')
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/About" element={<About />} />
        <Route exact="true" path="/Contact" element={<Contact />} />
        <Route exact="true" path="/Blogpost/:id" element={<Blogpost />} />
        <Route exact="true" path="*" element={<Error />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
