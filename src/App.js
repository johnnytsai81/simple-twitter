import './App.css';
import './assets/all.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { SignUpPage, LoginPage, MainPage, ProfilePage, ReplyPage, UserFollowerPage, UserOtherPage, AdminMainPage, AdminUsersPage,AdminLoginPage } from 'pages';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminMainPage from './pages/AdminMainPage';
import AdminUsersPage from './pages/AdminUsersPage';
import ProfileTweets from './pages/ProfileTweets';
import ProfileReply from './pages/ProfileReply';
import ProfileLikes from './pages/ProfileLikes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="signup" element={<SignUpPage />} /> 
        <Route path="login" element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="adminlogin" element={<AdminLoginPage />} />
        <Route path="adminmain" element={<AdminMainPage />} />
        <Route path="adminusers" element={<AdminUsersPage />} />
        <Route path="user/self/" element={<ProfileTweets />} />
        <Route path="user/self/replied_tweets" element={<ProfileReply />} />
        <Route path="user/self/likes" element={<ProfileLikes />} />
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
