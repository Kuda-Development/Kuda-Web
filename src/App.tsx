import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const theme = (localStorage.getItem("theme") as "dark" | "light") || "dark";

  useEffect(() => {
    const html = document.querySelector("html");
    html?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={null} />
      </Routes>
    </Suspense>
  );
}

export default App;
