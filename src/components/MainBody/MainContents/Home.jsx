import { PiStarFourFill } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

export default function Home() {
  return (
    <div id="home">
      <div className="section-title">
        <PiStarFourFill />
        <p>Let's Talk!</p>
      </div>
      <div>
        {[
          "I'm Aian Mhyco Nuñez",
          "Front-End   Developer",
          "Soon to be Full Stack.",
        ].map((text, i) => (
          <h1 key={i} className="home-text">
            {text}
          </h1>
        ))}
      </div>
      <a href="#" className="button">
        Works
        <RxDashboard />
      </a>
    </div>
  );
}
