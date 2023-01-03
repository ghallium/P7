import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import NavBar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/footer';


const Default = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Default;
