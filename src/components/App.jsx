import Create from './Create';
import Home from './Home';
import Login from './forms/Login';
import Content from './contents/Content';
import UserProfile from './users/UserProfile';
import Favorite from './contents/Favorite';
import Works from './users/Works';
import {BrowserRouter, Routes, Route} from "react-router-dom";


{/* <Route path='Login' element= {<Login />}/>
<Route path='Create' element= {<Create />} /> */}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />}>
            <Route path='Content' element = {<Content />} />
            <Route path='Profile' element = {<UserProfile />} />
            <Route path='Favorite' element = {<Favorite />} />
            <Route path='Works' element = {<Works />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
