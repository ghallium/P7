import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "../layouts/Blank";
import Default from "../layouts/Default";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Logements from "../Pages/Logements/logements";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logements />} />
        </Route>

        <Route element={<Blank />}>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
