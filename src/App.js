import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import './App.css';

// https://github.com/pauljeffreys1974/pjcdev.com
// https://www.zovirl.com/2011/07/22/solarized_cheat_sheet/
// https://www.pjcdev.com/

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<section>Home</section>} />
          <Route path='/about' element={<section>About</section>} />
          <Route path='/resume' element={<section>Resume</section>} />
          <Route path='/contact' element={<section>Contact</section>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
