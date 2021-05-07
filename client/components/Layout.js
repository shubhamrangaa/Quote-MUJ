import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
