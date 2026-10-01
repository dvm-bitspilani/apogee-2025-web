import { Link } from "react-router";
import Navbar from "./Navbar/Navbar";
import Menu from "./Menu/Menu";
import clouds from "../../src/assets/ComingSoon/background.webp";

export default function LandingArtwork() {
  return <main className="landing-artwork">
    <img className="landing-artwork-sky" src={clouds} alt="" />
    <Navbar alwaysAvailable />
    <Menu alwaysAvailable />
    <nav className="landing-artwork-links" aria-label="Explore APOGEE">
      {[["/about", "About Us"], ["/events", "Events"], ["/speakers", "Speakers"], ["/contact", "Contact Us"]].map(([to, label]) => <Link to={to} key={to}>{label}</Link>)}
    </nav>
  </main>;
}
