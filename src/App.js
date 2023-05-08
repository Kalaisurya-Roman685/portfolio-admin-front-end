
import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './protectedrouter/Productedrouter';
import Login from './components/auth/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/auth/register/Signup';
import Default from './components/dashboard/defaultlayer/Default';
import Projectjs from './components/projects/Projectjs';
import Profile from './components/profile/Profile';
import Resetpassword from './components/auth/resetpassword/Resetpassword';
import Forgetpassword from './components/auth/resetpassword/forgetpassword/Forgetpassword';
function App() {
  return (
    <div className="App ">
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
        <Route path="/reset-password/:token" element={<Resetpassword />}></Route>
        <Route element={<ProtectedRoutes></ProtectedRoutes>}>
          <Route path="portfolio" element={<Default />}>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="projects" element={<Projectjs />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
