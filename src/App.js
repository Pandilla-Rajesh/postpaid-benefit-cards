import logo from './logo.svg';
import './App.css';
import Approutes from './Approutes';
import { Outlet } from 'react-router-dom';

function App() {
  return (

   <>
     <Approutes/>
    <Outlet/>
   </>

  );
}

export default App;
