import Navbar from "./navbar";
import { ReactNode } from "react";
const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-8 mt-20 my-8">{children}</div>
    </div>
  );
};
export default Layout;
