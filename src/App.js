
import './App.css';
import Navbar from "./Navbar";
import Content from "./Home";
import Deposit from "./Deposit";

import{ BrowserRouter as Router, Route , Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
      <Content/>
      
      <div className="container">
      
      <Routes>
      <Route  path='/' element={<Content/>}/>
      <Route  path='/Deposit' element={<Deposit/>}/>
      


             
          
              
       </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
