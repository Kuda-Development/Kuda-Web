import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const theme = localStorage.getItem("theme") || "dark";

  useEffect(() => {
    const html = document.querySelector("html");
    html?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
