import "./About.sass";
import { useEffect, React } from "react";
import { Footer } from "../../components/index.js";
import Certifications from "./Certifications.js";
import Languages from "./Languages.js";
import Stack from "./Stack.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop.js";

const About = () => {
  useEffect(() => {
    document.title = "About | Sophia Martinez";
    window.scrollTo(0, 0);
  })
  return (
    <main className="about">
      <Stack />
      {/* <DownloadResume />
      <Experience />
      <Education />
      <Languages />
      <DownloadResume />
      <Certifications />
      <ScrollButton /> */}
      <Footer />
    </main>
  );
};

export default About;
