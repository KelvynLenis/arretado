import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";

function App() {

  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipe/:recipe" element={<Recipe />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
