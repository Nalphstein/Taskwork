
import React, { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Login } from "./Login";
import { Register } from "./Register";
import {Dashboard} from "./Dashboard";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm (formName);
  }


  // const onLogin = () => {
  //   history.push('/dashboard');
  // };
  return (
      <div className='App'>

        <BrowserRouter>

        
        <Routes>
          <Route index element={currentForm === "login" ? <Login onformSwitch={toggleForm} />  : <Register onformSwitch={toggleForm} />} />
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
        
        </BrowserRouter>
        
        </div>
  )
}

export default App;
