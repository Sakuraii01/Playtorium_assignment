// import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
// import { useToken, clearToken } from "../utils/useLocalStorage";
import { PROTECTED_PATH, UNPROTECTED_PATH } from "../constant/api.route";
import { useAuth } from "../auth/useAuth";

import Home from "../pages/home";
import Login from "../pages/login";
import Cart from "../pages/cart";

const RequireAuth = () => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth?.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
};
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={UNPROTECTED_PATH.HOME} element={<Home />} />
        <Route path={UNPROTECTED_PATH.LOGIN} element={<Login />} />
      </Routes>

      <Routes>
        <Route element={<RequireAuth />}>
          <Route path={PROTECTED_PATH.CART} element={<Cart />} />
          <Route path={PROTECTED_PATH.CHECKOUT} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
