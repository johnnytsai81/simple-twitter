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
import UserFollowerPage from './pages/UserFollowerPage';
import UserFollowingPage from './pages/UserFollowingPage';
import SettingPage from './pages/SettingPage';
import ReplyPage from './pages/ReplyPage';
import HomePage from './pages/HomePage';
import { AuthContextProvider } from './contexts/AuthContext'

const basename = process.env.PUBLIC_URL

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <AuthContextProvider>
          <Routes>
          <Route path="signup" element={<SignUpPage />} /> 
          <Route path="login" element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="admin_login" element={<AdminLoginPage />} />
          <Route path="admin_main" element={<AdminMainPage />} />
          <Route path="admin_users" element={<AdminUsersPage />} />
          <Route path='user/:UserId' element={<Navigate to={'tweet'} />}></Route>
          <Route path="user/:UserId/tweet" element={<ProfileTweets />} />
          <Route path="user/:UserId/replied_tweets" element={<ProfileReply />} />
          <Route path="user/:UserId/likes" element={<ProfileLikes />} />
          <Route path="user/:UserId/followers" element={<UserFollowerPage />} />
          <Route path="user/:UserId/following" element={<UserFollowingPage />} />
          <Route path="user/setting" element={<SettingPage />} />
          <Route path="tweet/:TweetId/replies" element={<ReplyPage />} />
          <Route path="*" element={<HomePage />} /> 
          {/* 
          <Route path="*">
            <NoMatch404 />
          </Route> */}
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
