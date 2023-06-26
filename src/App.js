
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Notes from './pages/notes/Notes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/' element={<Navigate to={'/login'}/>}/>
      </Routes>
    </div>
  );
}

export default App;
