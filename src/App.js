import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Educator from './pages/educator/educator.jsx';
import Contacts from './pages/contacts/contacts.jsx';

function App() {
  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/educator" element={<Educator />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>



  );
}

export default App;