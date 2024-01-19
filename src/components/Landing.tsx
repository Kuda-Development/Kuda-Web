import { memo } from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

function Landing() {
  return (
    <section className="app_landing">
      <div className="principal">
        <h1 className="title">
          Let's generate <b>Code</b> for you
        </h1>
        <p className="description">
          Kuda LLC stands out as a leading software development company,
          occupying a prominent position in the industry.
        </p>
        <div className="links">
          <Link className="link" to="#">
            Discover
          </Link>
          <Link
            className="link discord"
            target="_blank"
            to="https://discord.gg/qDRcUqhU46"
          >
            Discord
          </Link>
        </div>
      </div>
      <div className="terminal"></div>
    </section>
  );
}

export default memo(Landing);
