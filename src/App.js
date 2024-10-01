
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import Main from './components/Main';

function App() {
  const [form,setForm]=useState([
    {
      text:"Learn React",
      completed:true
    },
  ]);
  


  return (
    <div>
      <section className="todoapp">
	    <Header form={form} addForm={setForm} />
	
	    <Main form={form} setForm={setForm} />

	    <Footer/>
    </section>

    <Info/>
    </div>
  );
}

export default App;
