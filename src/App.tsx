import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarLinks from './Componentes/Navbar';
import { NewsBoard } from './Componentes/NewsBoard';

function App() {
  const [category, setCategory] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavbarLinks setCategory={setCategory}/> }/> 
        </Routes>
      </BrowserRouter>
      <NewsBoard category={category} />
    </>
  )
}

export default App
