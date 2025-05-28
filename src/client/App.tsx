import "./App.css";
import Layout from "./components/Layout/Layout.js";
import Blog from "./components/Blog.js";
import Books from "./components/Books.js";
import Home from "./components/Home.js";
import Header from "./Header.js";
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route index element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/books" element={<Books />}/>
            <Route path="/header" element={<Header/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
