import axios from "axios";

const baseUrl = "http://www.simpletwitter2023.site/api";
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

// 取得所有的推文
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

// 回覆推文
export const replyTweet = async (tweet_id, comment) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/${basePath}/${tweet_id}/replies`, {
      comment,
    });
    return res;
  } catch (error) {
    console.error("[Post Reply Failed]: ", error);
  }
};

// 對推文按讚
export async function likeTweet(TweetId) {
  try {
    const { data } = await axiosInstance.post(
      `${baseUrl}/${basePath}/${TweetId}/like`
    )
    return data
  } catch (err) {
    return {
      success: false,
      message: `[Like tweet failed]: ${err}`,
    }
  }
}

// 對推文取消按讚
export async function dislikeTweet(tweetId) {
  try {
    const { data } = await axiosInstance.post(
      `${baseUrl}/${basePath}/${tweetId}/unlike`
    )
    return data
  } catch (err) {
    return {
      success: false,
      message: `[Dislike tweet failed]: ${err}`,
    }
  }
}

// 取得該貼文所有的回覆
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