export const patchUser = ({ user }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: {
          user
        }
      });
    }, 2000);
  });
};
