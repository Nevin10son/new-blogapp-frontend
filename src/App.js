import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import ViewallPost from './components/ViewallPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/create' element={<CreatePost/>} />
        <Route path='/viewallpost' element={<ViewallPost/>} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
