import { Routes, Route} from "react-router-dom";

import Header from "../src/components/header";
import Footer from "./components/Footer";

// Components (Home Page)
import Hero from "../src/components/hero";
import BusinessSection from "./components/BusinessSection";
import SolutionsGrid from "./components/SolutionsGrid";
import StatsCircleSection from "./components/StatsCircleSection";
import TestimonialSlider from "./components/TestimonialSlider";

// Pages
// import SignIn from "./components/SignIn";
// import CreateAccount from "./components/CreateAccount";
import SuccessStories from "./pages/SuccessStories";
import BusinessSolutions from "./pages/BusinessSolutions";
import ContactUs from "./pages/ContactUs";
import OurTeam from "./pages/OurTeam";

function App() {
  // const location = useLocation();

  // const hideHeaderFooter =
  //   location.pathname === "/" || location.pathname === "/signup";

  return (
    <div className="w-full">

      {/* Header hide on SignIn + SignUp */}
      {/* {!hideHeaderFooter && <Header />} */}
      <Header />

      <Routes>
        
        {/* <Route path="/" element={<SignIn />} />

        
        <Route path="/signup" element={<CreateAccount />} /> */}

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <BusinessSection />
              <SolutionsGrid />
              <StatsCircleSection />
              <TestimonialSlider />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/business-solutions" element={<BusinessSolutions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-team" element={<OurTeam />} />
      </Routes>

      {/* Footer hide on SignIn + SignUp */}
      {/* {!hideHeaderFooter && <Footer />} */}
      <Footer />
    </div>
  );
}

export default App;
