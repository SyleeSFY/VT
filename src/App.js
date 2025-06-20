import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/nav/nav.jsx'
import Home from './pages/home/home.jsx';
import Test from './pages/home/test.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>


  );
}

export default App;