import "./App.css";
import { useState } from "react";
import Header from "./Header.js";
import axios from "axios";
import ResponsiveAppBar from "./components/ResponsiveAppBar.js";

function App() {
  return (
    <main>
      <ResponsiveAppBar />
    </main>
  );
}

export default App;
