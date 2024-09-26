import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import Navigation from './Component/Navigation';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';
function App() {
 return(
  <>
  <BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/Dashboard' element={<Dashboard/>}/>
  <Route path='/Navigation' element={<Navigation/>}/>
  <Route path='/Profile' element={<Profile/>}/>
  <Route path='/Logout' element={<Logout/>}/>
</Routes>
  </BrowserRouter>
  </>
 )

}

export default App;
