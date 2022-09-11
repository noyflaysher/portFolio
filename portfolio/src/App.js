import "./App.css";
import Particles from "./Particles";
import NavigationBar from "./screens/navigationBar/NavigationBar";
import Header from "./screens/header/Header";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Particles />
    </div>
  );
}

export default App;
