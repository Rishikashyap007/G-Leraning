import Navbar from "./Components/Navbar/Navbar";
import Slider from './Components/Carasouel/Slider'
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
    <div className="bg-gray-100">     
      <Navbar />
     <Slider />
     <Courses />
     <Footer />
     </div>

    </>
  )
}