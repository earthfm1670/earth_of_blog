import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar, HeroSection, Footer } from "./Components/WebSection";
import ArticleSearch from "./Components/ArticleSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ArticleSearch />
      <Footer />
    </>
  );
}

export default App;
