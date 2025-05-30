import "./App.css";
import Blog from "./components/Blog/Blog.js";
import Books from "./components/Books/Books.js";
import Home from "./components/Home/Home.js";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
