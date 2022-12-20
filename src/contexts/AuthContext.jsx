// import { createContext, useState } from 'react';
// import { checkPermission, login, register } from '../API/auth';
import * as jwt from 'jsonwebtoken'; //引入jwt解析工具
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useContext } from 'react';

// const defaultAuthContext = {
//   isAuthenticated: false, // 使用者是否登入的判斷依據，預設為 false，若取得後端的有效憑證，則切換為 true
//   currentMember: null, // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料
//   register: null, // 註冊方法
//   login: null, // 登入方法
//   logout: null, // 登入方法
// };

// const AuthContext = createContext(defaultAuthContext);
// // useContext hook 讓子層可以調用
// const useAuth = () => useContext(AuthContext);
// function AuthProvider(props) {
//   // 先放兩個狀態，一個是登入驗證是否還有效，一個拿來裝payload使用者資料
//   const [isAuth, setIsAuth] = useState(false);
//   const [payload, setPayload] = useState(null);
//   const { pathname } = useLocation(); //當前頁面路徑
//   // useEffect 確定checkPermission狀態
//   useEffect(() => {
//     // 驗證localStorage token是否還有效
//     const checkTokenIsValid = async () => {
//       const authToken = localStorage.getItem('authToken');
//       if (!authToken) {
//         // 取消登入狀態
//         setIsAuth(false);
//         setPayload(null);
//         return;
//       }
//       // 如果有token的話 再次驗證
//       const result = await checkPermission(authToken);
//       if (result) {
//         setIsAuth(true);
//         const resPayload = jwt.decode(authToken);
//         setPayload(resPayload);
//       } else {
//         setIsAuth(false);
//         setPayload(null);
//       }
//     };
//     checkTokenIsValid();
//   }, [pathname]);

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated: isAuth,
//         currentMember: payload,
//         register: async (data) => {
//           // 使用註冊register API
//           const { success, authToken } = await register({
//             username: data.username,
//             email: data.email,
//             password: data.password,
//           });
//           // 解析回傳token成payload資料
//           const resPayload = jwt.decode(authToken);
//           // 如果有回傳token，存入localStorage
//           if (resPayload) {
//             setIsAuth(true);
//             setPayload(resPayload);
//             localStorage.setItem('authToken', authToken);
//           } else {
//             setIsAuth(false);
//             setPayload(null);
//           }
//           // success 有可能是true or false去判斷註冊成功與否
//           return success;
//         },
//         login: async (data) => {
//           const { success, authToken } = await login({
//             username: data.username,
//             password: data.password,
//           });
//           // 解析回傳token成payload資料
//           const resPayload = jwt.decode(authToken);
//           // 如果有回傳token，存入localStorage
//           if (resPayload) {
//             setIsAuth(true);
//             setPayload(resPayload);
//             localStorage.setItem('authToken', authToken);
//           } else {
//             setIsAuth(false);
//             setPayload(null);
//           }
//           // success 有可能是true or false去判斷註冊成功與否
//           return success;
//         },
//         // logout 只要清除localstorage token
//         logout: () => {
//           localStorage.removeItem('authToken');
//           setIsAuth(false);
//           setPayload(null);
//         },
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// }

// export { AuthProvider, useAuth };