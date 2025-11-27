import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Educator from './pages/educator/educator.jsx';
import Contacts from './pages/contacts/contacts.jsx';
import Discipline from './pages/discipline/discipline.jsx';

function App() {
  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/educator" element={<Educator />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/discipline" element={<Discipline />} />
    </Routes>



  );
}

export default App;