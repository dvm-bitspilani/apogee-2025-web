import { OrbitControls, Environment, Float, Html } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { Leva, useControls } from "leva";
import EnergyOrb from "../EnergyOrb/EnergyOrb.jsx";
import { CityModel } from "./CityModel/CityModel.jsx";
import { Blimp } from "./Blimp/Blimp.jsx";
import Contact from "../Contact/Contact.jsx";

import { experienceAnimationsActions } from "../../store/experienceAnimationsSlice/experienceAnimationsSlice.js";

import { useDispatch, useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import {
  aboutToLanding,
  contactToLanding,
  eventsToLanding,
  landingToAbout,
  landingToContact,
  landingToEvents,
  landingToSpeakers,
  speakersToLanding,
} from "../../utils/AnimationHelpers/LandingAnimations.js";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";

import { getProject } from "@theatre/core";

import animationStates from "../../utils/animation_states/animations.json";
import { useFrame } from "@react-three/fiber";
import { Contactus } from "./ContactUs/ContactUs.jsx";

export const demoSheet = getProject("Demo Project", {
  state: animationStates,
}).sheet("Demo Sheet");

studio.initialize();
studio.extend(extension);

const CAMERA_POSITION_LANDING = {
  x: 0.014999999999999462,
  y: 0.8809999999999996,
  z: 2.4520800000000054,
};

export default function Experience() {
  const dispatch = useDispatch();

  const cameraTarget = useRef(new THREE.Vector3(0, 1.5, -0.012));
  const orb = useRef();
  const blackScreen = useRef();

  const animationStage = useSelector(
    (state) => state.experienceAnimations.animationStage
  );

  useGSAP(
    () => {
      // const timeline = gsap.timeline();

      gsap.to(blackScreen.current?.material, {
        opacity: 0,
        duration: 1.5,
      });
      gsap.to(orb.current.position, {
        y: 0.85,
        duration: 5,
        ease: "power2.inOut",
      });
      gsap.to(cameraTarget.current, {
        y: 0,
        z: 0,
        duration: 5.5,
        ease: "power2.inOut",
      });
    },
    { dependencies: [] }
  );

  useGSAP(
    () => {
      function cameraTargetPosHelper(pos) {
        gsap.to(cameraTarget.current, {
          x: pos[0],
          y: pos[1],
          z: pos[2],
          duration: 2,
          ease: "power2.inOut",
        });
      }
      if (animationStage === "landingToContact") {
        cameraTargetPosHelper([-0.72, 0.12, -0.663]);
      } else if (animationStage === "landingToEvents") {
        cameraTargetPosHelper([0.961, 0.078, -0.653]);
      } else if (animationStage === "landingToSpeakers") {
        cameraTargetPosHelper([-0.759, 0.58, 0.777]);
      } else {
        cameraTargetPosHelper([0, 0, 0]);
      }
    },
    { dependencies: [animationStage] }
  );

  useEffect(() => {
    let stopIntro;

    demoSheet.project.ready.then(() => {
      demoSheet.sequence.play({ iterationCount: 1 });
      stopIntro = setTimeout(() => {
        demoSheet.sequence.pause();
      }, 5500);
    });

    return () => {
      clearTimeout(stopIntro);
    };
  }, []);

  useEffect(() => {
    let animationTimeout;

    function setAnimStage(name) {
      dispatch(experienceAnimationsActions.setAnimationStage(name));
    }

    function reverseAnim() {
      if (animationStage === "landingToContact") {
        setAnimStage("contactToLanding");
      } else if (animationStage === "landingToEvents") {
        setAnimStage("eventsToLanding");
      } else if (animationStage === "landingToSpeakers") {
        setAnimStage("speakersToLanding");
      }
    }

    demoSheet.project.ready.then(() => {
      if (animationStage === "landingToContact") {
        animationTimeout = landingToContact();
      } else if (animationStage === "contactToLanding") {
        animationTimeout = contactToLanding();
      } else if (animationStage === "landingToEvents") {
        animationTimeout = landingToEvents();
      } else if (animationStage === "eventsToLanding") {
        animationTimeout = eventsToLanding();
      } else if (animationStage === "landingToSpeakers") {
        animationTimeout = landingToSpeakers();
      } else if (animationStage === "speakersToLanding") {
        animationTimeout = speakersToLanding();
      } else if (animationStage === "landingToAbout") {
        animationTimeout = landingToAbout();
      } else if (animationStage === "aboutToLanding") {
        animationTimeout = aboutToLanding();
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === "a") {
        setAnimStage("landingToSpeakers");
      } else if (e.key === "z") {
        setAnimStage("landingToEvents");
      } else if (e.key === "x") {
        reverseAnim();
      }
    });

    return () => {
      window.addEventListener("keyup", (e) => {
        if (e.key === "a") {
          setAnimStage("landingToSpeakers");
        } else if (e.key === "z") {
          setAnimStage("landingToEvents");
        } else if (e.key === "x") {
          reverseAnim();
        }
      });

      clearInterval(animationTimeout);
    };
  }, [animationStage]);

  const { positionFinder } = useControls({
    positionFinder: {
      // value: [-0.7190000000000004, 0.11800000000000008, -0.663], // contact
      // value: [0.9610000000000005, 0.07800000000000007, -0.653], // events
      value: [-0.7590000000000005, 0.58, 0.7770000000000005], // speakers
      step: 0.01,
    },
  });

  return (
    <>
      {window.innerWidth < 850 ? (
        <Leva hidden={window.innerWidth < 850} />
      ) : (
        <Perf position="bottom-left" />
      )}

      <mesh position={positionFinder}>
        <sphereGeometry args={[0.01, 16, 16]} />
        <meshBasicMaterial color="red" />
      </mesh>

      {animationStage !== "intro" && <OrbitControls enableRotate={true} />}

      <Environment
        files="/environments/sunset1QuarterResOrange.hdr"
        environmentIntensity={1}
        backgroundIntensity={1}
        background={true}
        resolution={128}
      />

      <SheetProvider sheet={demoSheet}>
        <PerspectiveCamera
          theatreKey="camera"
          makeDefault
          fov={50}
          lookAt={cameraTarget.current}
          far={4}
        />

        {animationStage === "intro" && (
          <mesh
            position={[0, 1.35, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={4}
            ref={blackScreen}
          >
            <planeGeometry />
            <meshStandardMaterial color="black" transparent />
          </mesh>
        )}

        <group position={[0, 1.5, -0.012]} ref={orb}>
          <EnergyOrb color="orange" lightIntensity={3} />
        </group>

        <group rotation={[0, 0, 0]}>
          <CityModel scale={0.02} />
          <Float
            speed={1}
            rotationIntensity={1}
            floatIntensity={0.75}
            floatingRange={[-0.1, 0.1]}
          >
            <Blimp scale={0.15} position={[0, 0.75, 0]} />
          </Float>
        </group>

        {/* <Html
          style={{
            transform: `scale(0.5)`,
            position: "absolute",
            top: "0",
          }}
        >
          <Contact />
        </Html> */}
      </SheetProvider>
    </>
  );
}
