import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home"
import About from "./views/About"
import Header from './components/white_paper_page/header/Header';


function App() {
  return (
    <div className="w-full h-full bg-[#070707]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
