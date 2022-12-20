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
import OtherProfileTweets from './pages/OtherProfileTweets';
import OtherProfileReply from './pages/OtherProfileReply';
import OtherProfileLikes from './pages/OtherProfileLikes';
import UserFollowerPage from './pages/UserFollowerPage';
import UserFollowingPage from './pages/UserFollowingPage';
import SettingPage from './pages/SettingPage';
import ReplyPage from './pages/ReplyPage';
import { AuthProvider } from './contexts/AuthContext'; // 引用封裝好的資訊

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
          <Route path="signup" element={<SignUpPage />} /> 
          <Route path="login" element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="admin_login" element={<AdminLoginPage />} />
          <Route path="admin_main" element={<AdminMainPage />} />
          <Route path="admin_users" element={<AdminUsersPage />} />
          <Route path='user/self' element={<Navigate to={'tweet'} />}></Route>
          <Route path="user/self/tweet" element={<ProfileTweets />} />
          <Route path="user/self/replied_tweets" element={<ProfileReply />} />
          <Route path="user/self/likes" element={<ProfileLikes />} />
          <Route path="user/self/followers" element={<UserFollowerPage />} />
          <Route path="user/self/following" element={<UserFollowingPage />} />
          <Route path="user/setting" element={<SettingPage />} />
          <Route path="tweet/1/replies" element={<ReplyPage />} />
          <Route path="user/1/tweet" element={<OtherProfileTweets />} />
          <Route path="user/1/replied_tweets" element={<OtherProfileReply />} />
          <Route path="user/1/likes" element={<OtherProfileLikes />} />
          {/* 
          <Route path="*">
            <NoMatch404 />
          </Route> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
