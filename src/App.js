

import './App.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from './protectedrouter/Productedrouter';
import Login from './components/auth/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Signup from './components/auth/register/Signup';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route element={<ProtectedRoutes></ProtectedRoutes>}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
