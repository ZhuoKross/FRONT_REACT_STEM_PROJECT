import { useState } from 'react';
import Menu from "./Menu";
import Create from './Create';
import View from './View';
import Home from './Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />}>
            <Route path='Create' element= {<Create />} />
            <Route path='view' element = {<View />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
