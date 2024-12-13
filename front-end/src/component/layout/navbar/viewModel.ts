import { useNavigate } from "react-router-dom";
import { PROTECTED_PATH, UNPROTECTED_PATH } from "../../../constant/api.route";
const useViewModel = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(UNPROTECTED_PATH.HOME);
  };
  const navigateToCart = () => {
    navigate(PROTECTED_PATH.CART);
  };

  return {
    navigateToHome,
    navigateToCart,
  };
};
export default useViewModel;
