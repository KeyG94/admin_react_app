import React from 'react';
import './index.css';
import Header from "./components/Header";
import TableList from "./components/Table";
import Features from "./components/Features";


function App() {
  return (
    <div className="container">
      <Header/>
      <TableList/>
      <Features/>
    </div>
  );
}

export default App;