import {BrowserRouter , Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
function App() {
  console.log(process.env.REACT_APP_API_KEY);
    console.log(process.env.REACT_APP_OTHER_VALUE);

 
    
  return (
    <BrowserRouter>
    <Header/>
    
    
    <Routes>
    <Route path="/Home" element={<Home/>}/>
 
    </Routes>
    
    </BrowserRouter>
    
   
      
      

  );
}

export default App;
