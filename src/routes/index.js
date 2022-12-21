import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from '../layouts/Blank';
import Default from '../layouts/Default';
import Error from '../components/Error/Error';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Profile from '../components/Profile/Profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profil/:id" element={<Profile />} />
      </Route>

        <Route element={<Blank />}>
          <Route path="*" element={<Error />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
