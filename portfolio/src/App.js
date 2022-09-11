import "./App.css";
import Particles from "./Particles";
import NavigationBar from "./screens/navigationBar/NavigationBar";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Particles />
      <AboutMe />
    </div>
  );
}

export default App;
