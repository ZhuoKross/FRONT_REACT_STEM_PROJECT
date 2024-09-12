import { useState } from 'react';
import Create from './Create';
import View from './View';
import Home from './Home';
import Login from './forms/Login';
import Content from './contents/Content';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />}>
            <Route path='Login' element= {<Login />}/>
            <Route path='Create' element= {<Create />} />
            <Route path='view' element = {<Content />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
