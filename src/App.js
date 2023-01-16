import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import NavBar from './Components/NavBar'
import { UserList } from './Pages/UsersList';
import { UserDetail } from './Pages/UserDetail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/users' element={<UserList />} ></Route>
        <Route path='/users/:userId' element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
