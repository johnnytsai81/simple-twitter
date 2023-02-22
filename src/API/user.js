import axios from "axios";

const baseUrl = "http://3.210.171.218:3000/api";
const basePath = "users";

const axiosInstance = axios.create({
  baseURL: `${baseUrl}`,
  validateStatus: (status) => status >= 200 && status <= 500,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (err) => console.error(err)
);

// 取得所有使用者
export async function getAllUsers() {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/admin/${basePath}`);
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get users failed]: ${err}`,
    };
  }
}

// For Ashley use (後台取得所有推文)
export const getAllUsers2 = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/admin/users`);
    return res.data;
  } catch (error) {
    console.error("[Get All Users failed]:", error);
  }
};

// 取得前10名追蹤者
export async function getTop10Users() {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/${basePath}/top`);
    // if fetch success: [], else {success: false, message: '...'}
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get top10 users failed]: ${err}`,
    };
  }
}

// 取得該使用者的個人資料
export async function getUser(userId) {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/${basePath}/${userId}`
    );
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get User failed]: ${err}`,
    };
  }
}

// 取得該使用者的所有推文
export async function getUserTweets(userId) {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/${basePath}/${userId}/tweets`
    );
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get User failed]: ${err}`,
    };
  }
}

// 取得該使用者回覆的所有推文
export async function getUserReplied(userId) {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/${basePath}/${userId}/replied_tweets`
    );
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get User failed]: ${err}`,
    };
  }
}

// 取得該使用者喜愛的所有推文
export async function getUserLiked(userId) {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/${basePath}/${userId}/likes`
    );
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get User failed]: ${err}`,
    };
  }
}

// 取得該使用者的追隨者
export async function getUserFollowers(userId) {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/${basePath}/${userId}/followers`
    );
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get User failed]: ${err}`,
    };
  }
}

// 取得該使用者跟隨中的人
export async function getUserFollowing(userId) {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/${basePath}/${userId}/followings`
    );
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get User failed]: ${err}`,
    };
  }
}

// 設定個人帳密
export const getUserSetting = async (payload, id) => {
  const { account, name, email, password, checkPassword } = payload;
  try {
    const res = await axiosInstance.put(`${baseUrl}/users/${id}/setting`, {
      account,
      name,
      email,
      password,
      checkPassword,
    });
    return res.data;
  } catch (error) {
    console.log("[Get UserSetting Failed]:", error.response.data);
  }
};

// 設定個人資料
export const getUserInfo = async (payload, id) => {
  const { coverImage, avatar, name, introduction } = payload;
  console.log("send", payload);
  try {
    const res = await axiosInstance.put(
      `${baseUrl}/users/${id}`,
      {
        coverImage,
        avatar,
        name,
        introduction,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("[Get UserSetting Failed]:", error.response.data);
  }
};

// 追蹤對方
export async function followUser(userId) {
  try {
    const { data } = await axiosInstance.post(`${baseUrl}/followships`, {
      id: userId,
    });
    return data;
  } catch (err) {
    return {
      success: false,
      message: `[Follow user failed]: ${err}`,
    };
  }
}

// 取消追蹤對方
export async function unfollowUser(userId) {
  try {
    const { data } = await axiosInstance.delete(
      `${baseUrl}/followships/${userId}`
    );
    return data;
  } catch (err) {
    return {
      success: false,
      message: `[Unfollow user failed]: ${err}`,
    };
  }
}