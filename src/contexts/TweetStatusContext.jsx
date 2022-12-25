import { createContext, useState, useContext } from "react";

const defaultTweetStatusContext = {
  isReplyTweetUpdate: false,
  isUserTweetUpdate: false,
  isGlobalTweetUpdate: false,
};

//export useAuth
const TweetStatusContext = createContext(defaultTweetStatusContext);
const useTweetStatus = () => useContext(TweetStatusContext);

//
function TweetStatusProvider ({ children }) {
  const [isUserInfoUpdate, setIsUserInfoUpdate] = useState(true);
  const [isGlobalTweetUpdate, setIsGlobalTweetUpdate] = useState(true);
  const [isReplyTweetUpdate, setIsReplyTweetUpdate] = useState(true);

  return (
    <TweetStatusContext.Provider
      value={{
        isUserInfoUpdate,
        isGlobalTweetUpdate,
        isReplyTweetUpdate,
        setIsUserInfoUpdate,
        setIsGlobalTweetUpdate,
        setIsReplyTweetUpdate,
      }}
    >
      {children}
    </TweetStatusContext.Provider>
  );
};

export { useTweetStatus, TweetStatusProvider }