import './App.css';
import './assets/all.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
import ProfileFollowers from './pages/ProfileFollowers';
import ProfileFollowing from './pages/ProfileFollowing';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="signup" element={<SignUpPage />} /> 
        <Route path="login" element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="admin_login" element={<AdminLoginPage />} />
        <Route path="admin_main" element={<AdminMainPage />} />
        <Route path="admin_users" element={<AdminUsersPage />} />
        <Route path='/user/self' element={<Navigate to={'tweet'} />}></Route>
        <Route path="user/self/tweet" element={<ProfileTweets />} />
        <Route path="user/self/replied_tweets" element={<ProfileReply />} />
        <Route path="user/self/likes" element={<ProfileLikes />} />
        <Route path="user/self/followers" element={<ProfileFollowers />} />
        <Route path="user/self/following" element={<ProfileFollowing />} />
        <Route path="user/setting" element={<SettingPage />} />
        {/* <Route path="" element={<ProfilePage />} />
        <Route path="" element={<ReplyPage />} />
        <Route path="" element={<UserFollowerPage />} />
        <Route path="" element={<UserOtherPage />} />
        <Route path="" element={<AdminMainPage />} />
        <Route path="" element={<AdminUsersPage />} />
        <Route path="*">
          <NoMatch404 />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
