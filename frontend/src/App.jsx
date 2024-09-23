import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignUpPerDet from './pages/SignUpPerDet';

export default function App(){
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/sign-in' element={<SignIn/>} />
    <Route path='/sign-up' element={<SignUp/>} />
    <Route path='/sign-up-detail' element={<SignUpPerDet/>} />


  </Routes>
  
  </BrowserRouter>
}