# Simple Twitter

此專案使用React參考Twitter打造一個社交平台Alphitter，讓使用者可以使用此平台進行註冊、登入、發文、點讚、回覆以及跟隨別人等功能。

## 專案介紹

- 目前主要包含四個主路徑/頁面
  - 註冊頁 http://localhost:3000/simple-twitter/signup
  - 登入頁 http://localhost:3000/simple-twitter/login
  - 個人主頁(登入才可使用) http://localhost:3000/simple-twitter/main
  - 後台登入頁 http://localhost:3000/simple-twitter/admin_login
  
- 線上部署後的主要頁面
  - 註冊頁 https://johnnytsai81.github.io/simple-twitter/signup
  - 登入頁 https://johnnytsai81.github.io/simple-twitter/login
  - 個人主頁(登入才可使用) https://johnnytsai81.github.io/simple-twitter/main
  - 後台登入頁 https://johnnytsai81.github.io/simple-twitter/admin_login
  
## 專案功能

- 使用者
  - 可以透過註冊頁註冊自己的帳號
  - 可以從登入頁進到個人首頁
  - 可以在首頁瀏覽其他使用者的推文和回覆
  - 可以瀏覽自己的推文/回覆/喜歡的內容
  - 可以對其他使用者進行跟隨/取消跟隨
  - 可以更新個人資料，修改帳戶設定、大頭照、個人首頁封面照
  - 點擊單一則推文可進入此推文的單一畫面
  - 透過點擊推文下方的愛心icon可對此推文表示喜歡

- 管理者
  - 可以從後台登入頁登入
  - 可以在推文清單瀏覽/刪除所有使用者的推文
  - 可以在使用者列表瀏覽所有已註冊的使用者，並可看到每位使用者的推文數、喜歡的推文數以及跟隨/被跟隨的數量

## 專案畫面

### 1. 註冊頁
![圖片](https://upload.cc/i1/2022/12/25/7FmWuP.jpg)

### 2. 一般使用者登入頁
![圖片](https://upload.cc/i1/2022/12/25/Cp9G0F.jpg)

### 3. 後台登入頁
![圖片](https://upload.cc/i1/2022/12/25/fnCmFH.jpg)

### 4. 個人主頁
![圖片](https://upload.cc/i1/2022/12/25/rsagOI.jpg)

### 5. 個人資料頁
![圖片](https://upload.cc/i1/2022/12/25/4QaSxd.jpg)

### 6. 帳戶設定頁
![圖片](https://upload.cc/i1/2022/12/25/4QaSxd.jpg)

### 7. 單一推文畫面
![圖片](https://upload.cc/i1/2022/12/25/jJ1Osu.jpg)

### 8. 後台推文清單
![圖片](https://upload.cc/i1/2022/12/25/nIMOTJ.jpg)

### 9. 後台使用者列表
![圖片](https://upload.cc/i1/2022/12/25/Fz5MrQ.jpg)


## 環境建置

  - Node.js: v14.18.1
  - react: v18.2.0
  - react-bootstrap: v2.7.0
  - react-icons: v4.7.1
  - react-dom: v18.2.0
  - react-router-dom: v6.4.1
  - react-scripts: v4.0.3

## 使用指南

1. 將專案 clone 至本地，至終端機輸入：

   ```
   git clone https://github.com/johnnytsai81/simple-twitter.git
   ```
   
2. 在終端機中輸入以下文字進入專案資料夾：

   ```
   cd simple-twitter
   ```
   
3. 在終端機中輸入以下以安裝相關套件：

   ```
   npm install
   ```
   
4. 在終端機中輸入以下便可執行專案：

   ```
   npm start
   ```
   
3. 瀏覽器將會自動開啟 "http://localhost:3000/simple-twitter/login" ，即可瀏覽此專案。

4. 停止使用，至終端機輸入：
   ```
   ctrl + c
   ```

## Contributor 專案開發人員

- [Anthony Tsai](https://github.com/johnnytsai81)
- [Ashley Chou](https://github.com/ChunYingChou)
- [Mami](https://github.com/shanelin0904)
- [CK](https://github.com/Gincoolwant)

