import './styles/App.css';
import Analyse from './Analyse.js'
import Home from './Home.js'
import Contact from './Contact.js'
import {Routes, BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <div> 
      <BrowserRouter>
      
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/Analyse' exact element={<Analyse/>}></Route>
        <Route path='/Contact' exact element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
