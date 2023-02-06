import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
const key = "auth_key";
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth key", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.removeToken(key);
  } catch (error) {
    console.log("error removing the auth key", error);
  }
};
const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};
export default {
  getUser,
  storeToken,
  removeToken,
  getToken,
};
