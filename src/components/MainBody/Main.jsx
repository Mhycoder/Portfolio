import Home from "./MainContents/Home";
import AboutMe from "./MainContents/AboutMe";
import Resume from "./MainContents/Resume";
import Projects from "./MainContents/Projects";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <Home />
      <AboutMe />
      <Resume />
      <Projects />
    </div>
  );
}
