import './styles/App.css';
import Home from './Home.js'
import Landing from './Landing.js'
import Contact from './Contact.js'
import Analyse from './Analyse.js'
import {Routes, BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <div> 
      <BrowserRouter>
      
      <Routes>
        <Route path='/' exact element={<Landing/>}></Route>
        <Route path='/Home' exact element={<Home/>}></Route>
        <Route path='/Analyse' exact element={<Analyse/>}></Route>
        <Route path='/Contact' exact element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
