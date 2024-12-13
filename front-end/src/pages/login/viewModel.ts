import { UserService } from "../../service/remotes/user/user";
import { UserRepository } from "../../service/repositories/user/userRepository";

import { useAuth } from "../../auth/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UNPROTECTED_PATH } from "../../constant/api.route";
const useViewModel = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth();
  const [error, setError] = useState<string>();

  const userInfo = new UserRepository(new UserService());
  const handleUsernameOnChange = (data: string) => {
    setUsername(data);
  };
  const handlePasswordOnChange = (data: string) => {
    setPassword(data);
  };
  const navigateToHome = () => {
    navigate(UNPROTECTED_PATH.HOME);
  };
  const handleOnSubmitLogin = (e: any) => {
    const { username, password } = e;
    userInfo
      .postLogin({ username: username, password: password })
      .then((res) => {
        auth?.setCredential(res);
        console.log(res);

        if (auth?.user) {
          navigateToHome();
        }
      })
      .catch((err) => {
        handleUsernameOnChange("");
        handlePasswordOnChange("");
        setError(err.response.data.error);
      });
  };
  return {
    username,
    password,
    error,
    handleOnSubmitLogin,
    handleUsernameOnChange,
    handlePasswordOnChange,
    navigateToHome,
  };
};
export default useViewModel;
