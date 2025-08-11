import style from "./Pattern.module.css";
import React, { useContext } from "react";
import { PatternContext } from "../Header/NavBar/NavBar";

export default function Pattern() {
  const pattern = useContext(PatternContext);
  return <div className={pattern === "light" ? style.light : style.dark}></div>;
}
