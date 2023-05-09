import {BrowserRouter , Route, Routes} from 'react-router-dom'
import './App.css';
import Employee from './components/Employee/Employee';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import AddProject from './components/KPI/AddProject';
import AddSupportProject from './components/KPI/AddSupportProject';
import KPI1 from './components/KPI/KPI1';
import KPI2 from './components/KPI/KPI2';
import KPI3 from './components/KPI/KPI3';
import KPI4 from './components/KPI/KPI4';
import KPI5 from './components/KPI/KPI5'
import KPI from './components/KPI/KPI';
import Progess from './components/KpiBar/Progess';
import {useState} from 'react'
import PreviewForm from './components/KPI/PreviewForm';

function App() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState([]);
  // const handleFormSubmit = (data) => {
  //   setFormData(data);
  // };
  console.log(process.env.REACT_APP_API_KEY);
    console.log(process.env.REACT_APP_OTHER_VALUE);

 
    
  return (
    <BrowserRouter>
    <Header/>
    
    
    <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Employee" element={<Employee/>}></Route>
    <Route path="/KPI1" element={<KPI1 formData={formData}/>}></Route>
    <Route path="/AddProject" element={<AddProject/>}></Route>
    <Route path="/KPI2" element={<KPI2/>}></Route>
    <Route path="/AddSupportProject" element={<AddSupportProject setFormData={setFormData}/>}></Route>
    <Route path="/KPI3" element={<KPI3/>}></Route>
    <Route path="/KPI4" element={<KPI4/>}></Route>
    <Route path="/KPI5" element={<KPI5/>}></Route>
    <Route path="/KPI" element={<KPI formData={formData}/>}></Route>
    <Route path="/previewForm" element={<PreviewForm formData={formData}/>}></Route>
    <Route path="/Progess" element={<Progess />}></Route>
 
    </Routes>
    
    </BrowserRouter>
    
   
      
      

  );
}

export default App;
