import {BrowserRouter , Route, Routes} from 'react-router-dom'
import './App.css';
import Employee from './components/Employee/Employee';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import KPI1 from './components/KPI/KPI1';
function App() {
  console.log(process.env.REACT_APP_API_KEY);
    console.log(process.env.REACT_APP_OTHER_VALUE);

 
    
  return (
    <BrowserRouter>
    <Header/>
    
    
    <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Employee" element={<Employee/>}></Route>
    <Route path="/KPI1" element={<KPI1/>}></Route>
 
    </Routes>
    
    </BrowserRouter>
    
   
      
      

  );
}

export default App;
