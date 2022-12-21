import { Outlet } from "react-router-dom";
import NavBar from '../components/Navbar/Navbar';


const Default = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Default;
