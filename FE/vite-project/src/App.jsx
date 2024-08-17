import { Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute'; 
import './relo.css';
import AddEvents from './AddEvents';
import Home from './Home';
import ArtistDetails from './ArtistDetails';

function App() {
  return (
    <>
      <nav>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        <Link to="/addevents" style={{ color: 'white' }}>Add Your Events</Link>
        <div>
          <Link to="/register" style={{ color: 'white' }}>Register / </Link>
          <Link to="/login" style={{ color: 'white' }}>Log-in</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addevents" element={<AddEvents />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/show" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/artist/:id" element={<ArtistDetails />} />
      </Routes>
    </>
  );
}

export default App;
