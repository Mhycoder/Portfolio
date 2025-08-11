import "./App.css";
import NavBar from "./components/Header/NavBar/NavBar";
import UserProfile from "./components/UserProfile/UserProfile";
import Main from "./components/MainBody/Main";

function App() {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Main />
    </>
  );
}

export default App;
