import axios from "axios";

const baseUrl = "https://ck-mami-2022-twitter.herokuapp.com/api";
const basePath = "tweets";

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

export async function getAllTweets() {
  try {
    const { data } = await axiosInstance.get(`${baseUrl}/${basePath}`);
    // if fetch success: [], else {success: false, message: '...'}
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get tweets failed]: ${err}`,
    };
  }
}

// For Ashley use (後台取得所有推文)
export const getAllTweets2 = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/tweets`);
    return res.data;
  } catch (error) {
    console.error("[Get All Tweets failed]:", error);
  }
};

// For Ashley use (後台刪除推文)
export const deleteTweet2 = async (id) => {
  try {
    const { data } = await axiosInstance.delete(
      `${baseUrl}/admin/tweets/${id}`
    );
    return data.deletedTweet;
  } catch (error) {
    console.error("[Delete tweet failed]:", error);
  }
};

// 取得指定推文
export async function getTweet(tweetId) {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/${basePath}/${tweetId}`
    );
    // if fetch success: [], else {success: false, message: '...'}
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get tweet failed]: ${err}`,
    };
  }
}

// 上傳推文
export async function addTweet(description) {
  try {
    const { data } = await axiosInstance.post(`${baseUrl}/${basePath}`, {
      description,
    });
    return data;
  } catch (err) {
    return {
      success: false,
      message: `[Get tweet failed]: ${err}`,
    };
  }
}

export async function deleteTweet(tweetId) {
  try {
    const { data } = await axiosInstance.delete(
      `${baseUrl}/admin/${basePath}/${tweetId}`
    );
    return data;
  } catch (err) {
    return {
      success: false,
      message: `[Detele tweet failed]: ${err}`,
    };
  }
}

// export async function likeTweet(tweetId) {
//   try {
//     const { data } = await axiosInstance.post(
//       `${baseUrl}/${basePath}/${tweetId}`
//     );
//     return data;
//   } catch (err) {
//     return {
//       success: false,
//       message: `[Like tweet failed]: ${err}`,
//     };
//   }
// }

// export async function dislikeTweet(tweetId) {
//   try {
//     const { data } = await axiosInstance.post(
//       `${baseUrl}/${basePath}/${tweetId}`
//     );
//     return data;
//   } catch (err) {
//     return {
//       success: false,
//       message: `[Dislike tweet failed]: ${err}`,
//     };
//   }
// }

export async function getAllReplies(tweetId) {
  try {
    const { data } = await axiosInstance.get(
      `${baseUrl}/${basePath}/${tweetId}/replies`
    );
    // if fetch success: [], else {success: false, message: '...'}
    if (data.success === false) return { ...data };
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Get Replies failed]: ${err}`,
    };
  }
}

export async function addReply(data) {
  const { tweetId, comment } = data;
  try {
    const { data } = await axiosInstance.post(
      `${baseUrl}/${basePath}/${tweetId}/replies`,
      { comment }
    );
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      message: `[Add Reply failed]: ${err}`,
    };
  }
}
