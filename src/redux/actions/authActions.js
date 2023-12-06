export const loginSuccess = (userData) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userData,
  };
};

export const logoutSuccess = () => {
  return {
    type: "LOGOUT_SUCCESS",
  };
};
