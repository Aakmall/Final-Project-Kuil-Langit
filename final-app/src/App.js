import Intro from "./component/intro/intro";
import Menu from "./component/menu/menu";
import Contact from "./component/contact/contact";
import About from "./component/about/about";
import "./App(import)";


function App() {
  return (
    // parent
    <div>
      {/* intro */}
      <Intro />
      {/* menu */}
      <Menu />
      {/* about */}
      <About />
      {/* contact */}
      <Contact />
    </div>
  );
}

export default App;
