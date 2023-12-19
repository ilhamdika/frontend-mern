import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import ListProduk from './pages/ListProduk';
import AddProduk from './pages/AddProduk';
import ProdukEdit from './pages/ProdukEdit';
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(localStorage.getItem('token') !== null)
  const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list-produk" element={<ListProduk />} />
        <Route path="/add-produk" element={<AddProduk />} />
        <Route path="/edit-produk/:id" element={<ProdukEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
