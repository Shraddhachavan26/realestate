import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Flats from "./Pages/Fltas";
import Plots from "./Pages/Plots";
import FurnishedFlats from "./Pages/FurnishedFlats";
import OurServices from "./Pages/OurServices";
import Reviews from "./Pages/Reviews";
import "./App.css";
import Blogs from "./Pages/Blogs";
import Agents from "./Pages/Agents";
import Seller from "./Pages/Seller";
import RowHouses from "./Pages/RowHouses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/properties/flats" element={<Flats />} />
      <Route path="/properties/plots" element={<Plots />} />    
        <Route path="/properties/rowhouses" element={<RowHouses />} />
      <Route path="/properties/furnishedflats" element={<FurnishedFlats />} />
      <Route path="/properties/ourservices" element={<OurServices />} />
      <Route path="/properties/reviews" element={<Reviews />} />
    </Routes>
  );
}

export default App;
