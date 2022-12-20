import { useState } from "react";
import { patchUser } from "../mock/api";
import { mockUser } from "../mock/user";
import Swal from "sweetalert2";

const useUpdateUser = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  // eslint-disable-next-line
  const [data, setData] = useState(mockUser);
  const updateUser = async (user) => {
    try {
      if (isUpdating) {
        return;
      }

      setIsUpdating(true);

      await patchUser({
        user,
      });

      setData(() => {
        return {
          ...data,
          introduction: user.introduction,
          name: user.name,
          coverImage: user.coverImage,
          avatar: user.avatar,
        };
      });

      console.log("新資料", data);
      // 登入成功訊息
      Swal.fire({
        position: "top",
        title: "個人資料更新成功！",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });

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
