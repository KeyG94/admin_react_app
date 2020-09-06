import React from 'react';
import './index.css';
import Header from "./components/Header";
import TableList from "./components/Table";
import Features from "./components/Features";
import TabCard from "./components/Tabs";
import FormSubmit from "./components/Form";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container">
      <Header/>
      <TableList/>
      <Features/>
      <TabCard/>
      <FormSubmit/>
      <Footer/>
    </div>
  );
}

export default App;