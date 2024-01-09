import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import Dashboard from "./Dashboard";
function App() {
  

  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<Layout />} >
                  <Route  index={true} element={<Dashboard/>}/>
          
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
