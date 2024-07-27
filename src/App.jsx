import Navbar from "./Components/Navbar/Navbar";
import Slider from './Components/Carasouel/Slider'
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
import UniversityCertificates from "./Components/Home/University";
import Statistics from "./Components/Home/Statistics";
import TestimonialSlider from "./Components/Home/Testimonials";
import LogoSlider from "./Components/Home/LogoSlider";
import SkillsSection from "./Components/Home/Skills";
import MediaSpotlight from "./Components/Home/Media";

export default function App() {
  return (
    <>
    <div className="bg-gray-100">     
      <Navbar />
     <Slider />
     <Courses />
     <UniversityCertificates />
     <Statistics />
     <TestimonialSlider />
     <LogoSlider />
     <SkillsSection />
     <MediaSpotlight />
     <Footer />
     </div>

    </>
  )
}