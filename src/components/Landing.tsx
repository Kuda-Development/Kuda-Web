import { memo } from "react";
import "../styles/Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section className="app_landing">
      <div className="landing_content">
        <h1 className="landing_title">
          We generate <b>Code</b>, fast and <b>Secure</b> for you.
        </h1>
        <p className="landing_description">
          Kuda Team stands out as a <span>leading software development</span>{" "}
          company, occupying a prominent position in the industry.
        </p>
        <div className="landing_btns">
          <Link to="/" className="landing_btn get_started">
            Get Started
          </Link>
          <Link to="/" className="landing_btn discover">
            Discover
          </Link>
        </div>
      </div>
    </section>
  );
}

export default memo(Landing);
