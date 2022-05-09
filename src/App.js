import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/home" element={<Home></Home>}> </Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>


      </Routes>

    </div>
  );
}

export default App;
