import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
