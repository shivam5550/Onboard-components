import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Metaverse from './Metaverse.tsx'
import GetStarted from './GetStarted.tsx';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/metaverse' element={<Metaverse/>} />
            <Route path='/get' element={<GetStarted/>}></Route>
          </Routes>
        </header>
      </div>
    </Router>

  )
}





export default App;

