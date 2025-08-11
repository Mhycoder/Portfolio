import { PiStarFourFill } from "react-icons/pi";

export default function AboutMe() {
  const stats = [
    [0, 0, 10],
    ["Clients", "Years of Experience", "Projects Done"],
  ];

  return (
    <div className="section" id="about">
      <div className="section-title">
        <PiStarFourFill />
        <p>About Me</p>
      </div>
      <h1 className="section-text">
        Bringing ideas to life through clean, modern code
      </h1>
      <div className="container">
        {[0, 1, 2].map((i) => (
          <div key={i} className="boxes">
            <h1>{stats[0][i]}+</h1>
            <p>{stats[1][i]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
