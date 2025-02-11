import Lottie from "lottie-react";
import preloaderData from "../../../src/assets/lotties/preloader.json";

export default function LottiePreloader() {
  return (
    <>
      <Lottie animationData={preloaderData} loop={true} />
    </>
  );
}
