import { memo } from "react";
import "../styles/Home.css";
import Landing from "./Landing";

function Home() {
  return (
    <main className="app_main">
      <Landing />
    </main>
  );
}

export default memo(Home);
