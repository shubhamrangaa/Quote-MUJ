import Navbar from "../components/Navbar";
import styles from "../styles/Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
