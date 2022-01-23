import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Starter from "./sections/Starter";
import Why from "./sections/Why";
import Blogs from "./sections/Blogs";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";
import ProjectTitle from "./sections/ProjectTitle";
import Dreams from "./sections/Dreams";
import Website from "./sections/Website";
import Marketplace from "./sections/Marketplace";
import Possum from "./sections/Possum";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Starter />
      <About />
      <ProjectTitle />
      <Dreams />
      <Website />
      <Marketplace />
      <Possum />
      <Blogs />
      <Footer />
    </motion.div>
  );
}

export default App;
