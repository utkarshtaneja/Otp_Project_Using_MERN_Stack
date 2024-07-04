import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/user/otp' element={<Otp />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </>
  );
}

export default App;
