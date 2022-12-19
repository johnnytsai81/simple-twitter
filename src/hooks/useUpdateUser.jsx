import { useState } from "react";
import { patchUser } from "../mock/api";

const useUpdateUser = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const updateUser = async (user) => {
    try {
      if (isUpdating) {
        return;
      }

      setIsUpdating(true);

      await patchUser({
        user,
      });

      alert("個人資料更新成功！");
      console.log("新資料", user);

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
