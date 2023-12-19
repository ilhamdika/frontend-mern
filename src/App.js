import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Card from './component/Card';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
