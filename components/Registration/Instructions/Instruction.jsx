import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useRegistrationClosed } from "../../../src/ui/RegistrationClosed";
import LandingArtwork from "../../Landing/LandingArtwork";

export default function Registration() {
  const openRegistration = useRegistrationClosed();
  const navigate = useNavigate();
  useEffect(() => { openRegistration(() => navigate("/", { replace: true })); }, [openRegistration, navigate]);
  return <LandingArtwork />;
}
