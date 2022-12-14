import './App.css';
import './assets/all.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { SignUpPage, LoginPage, MainPage, ProfilePage, ReplyPage, UserFollowerPage, UserOtherPage, AdminMainPage, AdminUsersPage } from './pages';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminMainPage from './pages/AdminMainPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<SignUpPage />} /> 
          <Route path="login" element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="Adminlogin" element={<AdminLoginPage />} />
          <Route path="Adminmain" element={<AdminMainPage />} />
          {/* <Route path="" element={<ProfilePage />} />
          <Route path="" element={<ReplyPage />} />
          <Route path="" element={<UserFollowerPage />} />
          <Route path="" element={<UserOtherPage />} />
          <Route path="" element={<AdminMainPage />} />
          <Route path="" element={<AdminUsersPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
