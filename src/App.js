import { Routes, Route } from 'react-router-dom';
// import Nav from './pages/nav/nav.jsx'
// import Footer from './pages/footer/footer.jsx'
import Home from './pages/home/home.jsx';
import Educator from './pages/educator/educator.jsx';
import Test from './pages/home/test.jsx';

function App() {
  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/educator" element={<Educator />} />
      <Route path="/test" element={<Test />} />
    </Routes>



  );
}

export default App;