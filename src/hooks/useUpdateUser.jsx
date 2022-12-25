import { useState } from "react";
import { getUserInfo } from "../API/user";
import { Toast } from "../utilities/sweetalert";

const useUpdateUser = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const updateUser = async ({ coverImage, avatar, name, introduction }, id) => {
    try {
      if (isUpdating) {
        return;
      }
      setIsUpdating(true);
      const postStatus = await getUserInfo(
        {
          coverImage,
          avatar,
          name,
          introduction,
        },
        id
      );
      if (postStatus.status === "success") {
        Toast.fire({
          title: "個人資料更新成功",
          icon: "success",
        });
      } else {
        Toast.fire({
          title: "個人資料更新失敗",
          icon: "success",
        });
      }

      setIsUpdating(false);
    } catch (error) {
      console.error(error);
      setIsUpdating(false);
    }
  };

  return {
    isUpdating,
    updateUser,
  };
};

export default useUpdateUser;
