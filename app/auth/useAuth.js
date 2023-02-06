import jwtDecode from "jwt-decode";
import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };
  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return { user, logOut, login };
};
