const { default: apiClient } = require("./client");

const register = (pushtoken) =>
  apiClient.post("/expoPushTokens", { token: pushtoken });
export default {
  register,
};
