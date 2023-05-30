import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Countrs } from './Component/Countrys/Country';
import { Find } from './Component/Find/Find';
import { Header } from './Component/Header/Header';
import { SinglePage } from './Component/SinglePage/SinglePage';

function App() {
  return (
    <div className="App"> 
        <Header/>
        <Find/>
        <div className="country-page">
          
        </div>
        <Routes>
        <Route path='/' element={<Countrs />}/>
        <Route path='/name/:name' element={<SinglePage/>}/>
        </Routes>
    </div>
  );
}

export default App;
