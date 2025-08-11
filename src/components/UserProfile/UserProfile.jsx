import style from "./UserProfile.module.css";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import profilePicture from "./../../assets/profilePicture.jpg";

export default function UserProfile() {
  return (
    <div className={style.sideProfile}>
      <div className={style.logoContainer}>
        <FaCode size={32} color="var(--accent)" />
        <h1>Maycoder</h1>
      </div>
      <img
        src={profilePicture}
        alt="profile-picture"
        className={style.profilePicture}
      />
      <div className={style.information}>
        <p>Status</p>
        <h4>Upcoming 2nd Year CS Student</h4>
      </div>
      <div className={style.information}>
        <p>Specialization</p>
        <h4>Front-End Web Developer</h4>
      </div>
      <div className={style.wrapper}>
        <div className={style.socialLinks}>
          <a href="#">
            <FaFacebook className={style.icons} />
          </a>
          <a href="#">
            <FaInstagram className={style.icons} />
          </a>
          <a href="#">
            <FaGithub className={style.icons} />
          </a>
          <a href="#">
            <FaLinkedin className={style.icons} />
          </a>
        </div>
        <button>Let's Work Together!</button>
      </div>
    </div>
  );
}
