import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dock from "./components/Dock";
import Bootscreen from "./components/Bootscreen";

function App() {
  return (
    <main className="relative">
      <Bootscreen/>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  );
}

export default App;