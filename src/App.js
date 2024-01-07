import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar.js';
import LineChart from './components/LineChart/LineChart.js';
import BarChart from './components/BarChart/BarChart.js';
import DeltaNeutral from './pages/DeltaNeutral.js';

function App() {
  // const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    
    <div className="App">
      <header className="App-header">
        {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={()=> setSidebarOpen(!isSidebarOpen)}/> */}
         
        <Router>
          <Sidebar/> 
          <Routes>
              {/* <Route exact path ='/home' component={Home}/> */}
            <Route path="/delta-neutral-engine" element={<DeltaNeutral/>} />
            {/* <Route path="/eth-usd" component={Page2} /> */}
          </Routes>
        </Router>
        <div className='Chart-container'>
       {/* <BarChart title="Test" xAxisData={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} seriesData={[120, 200, 150, 80, 70, 110, 130]}/> */}
       </div>
       
       
      </header>
    </div>
    
  );
}

export default App;
