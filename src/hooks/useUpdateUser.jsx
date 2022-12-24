import { useState } from "react";
import { getUserInfo } from "../API/user";
import Swal from "sweetalert2";

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
        console.log(postStatus)
        Swal.fire({
          position: "top",
          title: "個人資料更新成功",
          timer: 1000,
          icon: "success",
          showConfirmButton: false,
        });
      } else {
        console.log(postStatus)
        Swal.fire({
          position: "top",
          title: "個人資料更新失敗",
          timer: 1000,
          icon: "error",
          showConfirmButton: false,
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
