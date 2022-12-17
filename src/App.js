

import Navbar from "./Navbar";
import Content from "./Home";
import Deposit from "./Deposit";
import DepositInfo from "./DepositInfo";
import DepositReview from "./DepositReview";

import{ BrowserRouter as Router, Route , Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
       <Navbar/>
      {/* <Content/> */}
      
      <div className="container">
      
      <Routes>
      <Route  path='/' element={<Content/>}/>
      <Route  path='/Deposit' element={<Deposit/>}/>
      <Route  path='/DepositInfo' element={<DepositInfo/>} updateForm/>
      <Route  path='/DepositReview' element={<DepositReview/>}/>
      
      


             
          
              
       </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
