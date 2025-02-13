import {
  Environment,
  Float,
  Html,
  Image,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useCallback, useEffect, useRef, useState } from "react";
import { Leva, useControls } from "leva";
import EnergyOrb from "../EnergyOrb/EnergyOrb.jsx";
import { CityModel } from "./CityModel/CityModel.jsx";
import { Blimp } from "./Blimp/Blimp.jsx";
import down from "../../src/assets/Landing/down.png";

import {
  curStageUpdate,
  setNavigationStage,
  experienceAnimationsActions,
  reverseAnimation,
} from "../../store/experienceAnimationsSlice/experienceAnimationsSlice.js";

import { useDispatch, useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";

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

import animationStatesDesktop from "../../utils/animation_states/desktop/Landing Project.theatre-project-state.json";
import animationStatesMobile from "../../utils/animation_states/mobile/Landing Project.theatre-project-state.json";
import { useThree } from "@react-three/fiber";
import { ContactBoard } from "./ContactBoard/ContactBoard.jsx";
import { AboutUs } from "./AboutUs/AboutUs.jsx";
import { Speakers } from "./Speakers/Speakers.jsx";
import Arrow from "../Landing/Arrow/Arrow.jsx";
import { Events } from "./Events/Events.jsx";

export const landingSheet = getProject("Landing Project", {
  state:
    window.innerWidth < 850 ? animationStatesMobile : animationStatesDesktop,
}).sheet("Landing Sheet");

// studio.initialize();
// studio.extend(extension);

const CAMERA_POSITION_LANDING = {
  x: 0.014999999999999462,
  y: 0.8809999999999996,
  z: 2.4520800000000054,
};

export default function Experience() {
  const dispatch = useDispatch();
  const { gl } = useThree();

  const cameraTarget = useRef(new THREE.Vector3(0, 0, 0));
  const orb = useRef();
  const blackScreen = useRef();
  const cameraRef = useRef();

  const animationStage = useSelector(
    (state) => state.experienceAnimations.animationStage
  );

  const handleAboutClick = () => {
    dispatch(setNavigationStage("landingToAbout"));
  };

  const handleSpeakersClick = () => {
    dispatch(setNavigationStage("landingToSpeakers"));
  };

  const handleEventsClick = () => {
    dispatch(setNavigationStage("landingToEvents"));
  };

  const cameraTargetPosHelper = useCallback(
    (pos) => {
      gsap.to(cameraTarget.current, {
        x: pos[0],
        y: pos[1],
        z: pos[2],
        duration: 2,
        ease: "power2.inOut",
      });
    },
    [cameraTarget]
  );

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          "#landingExperience",
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        )
        .to(blackScreen.current?.material, {
          opacity: 0,
          duration: 1.5,
        })
        .to(
          orb.current.position,
          {
            y: 0.85,
            duration: 5,
            ease: "power2.inOut",
          },
          "-=1"
        )
        .to(
          cameraTarget.current,
          {
            y: 0,
            z: 0,
            duration: 5.5,
            ease: "power2.inOut",
          },
          "<"
        );
    },
    { dependencies: [] }
  );

  useGSAP(
    () => {
      if (animationStage === "landingToContact") {
        cameraTargetPosHelper([-0.72, 0.12, -0.663]);
      } else if (animationStage === "landingToEvents") {
        cameraTargetPosHelper([0.961, 0.078, -0.653]);
      } else if (animationStage === "landingToSpeakers") {
        cameraTargetPosHelper([-0.759, 0.58, 0.777]);
      } else if (animationStage === "landingToAbout") {
        cameraTargetPosHelper([0.9, 0.0599, 0.797]);
      } else {
        cameraTargetPosHelper([0, 0, 0]);
      }
    },
    { dependencies: [animationStage] }
  );

  useEffect(() => {
    let stopIntro, startIntro;

    landingSheet.project.ready.then(() => {
      startIntro = setTimeout(() => {
        landingSheet.sequence.play({ iterationCount: 1 });
      }, 1000);
      stopIntro = setTimeout(() => {
        landingSheet.sequence.pause();
        dispatch(experienceAnimationsActions.toggleIsPointerEventsAllowed());
      }, 6500);
    });

    return () => {
      clearTimeout(stopIntro);
      clearTimeout(startIntro);
      landingSheet.project.ready.then(() => {
        landingSheet.sequence.pause();
        landingSheet.sequence.position = 0;
      });
      dispatch(experienceAnimationsActions.resetState());
    };
  }, []);

  useEffect(() => {
    let animationTimeout;
    let pointerEventsTimeout;

    const pointerEventsToggleHelper = (duration = 2) => {
      return setTimeout(() => {
        dispatch(experienceAnimationsActions.toggleIsPointerEventsAllowed());
      }, duration * 1000);
    };

    landingSheet.project.ready.then(() => {
      if (animationStage === "landingToContact") {
        animationTimeout = landingToContact();
        pointerEventsTimeout = pointerEventsToggleHelper(0);
      } else if (animationStage === "contactToLanding") {
        animationTimeout = contactToLanding();
        pointerEventsTimeout = pointerEventsToggleHelper(2);
      } else if (animationStage === "landingToEvents") {
        animationTimeout = landingToEvents();
        pointerEventsTimeout = pointerEventsToggleHelper(0);
      } else if (animationStage === "eventsToLanding") {
        animationTimeout = eventsToLanding();
        pointerEventsTimeout = pointerEventsToggleHelper(2);
      } else if (animationStage === "landingToSpeakers") {
        animationTimeout = landingToSpeakers();
        pointerEventsTimeout = pointerEventsToggleHelper(0);
      } else if (animationStage === "speakersToLanding") {
        animationTimeout = speakersToLanding();
        pointerEventsTimeout = pointerEventsToggleHelper(2);
      } else if (animationStage === "landingToAbout") {
        animationTimeout = landingToAbout();
        pointerEventsTimeout = pointerEventsToggleHelper(0);
      } else if (animationStage === "aboutToLanding") {
        animationTimeout = aboutToLanding();
        pointerEventsTimeout = pointerEventsToggleHelper(2);
      }
    });

    const handleKeyUp = (e) => {
      if (e.key === "z") {
        dispatch(setNavigationStage("landingToEvents"));
      } else if (e.key === "Escape") {
        dispatch(reverseAnimation(animationStage));
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    const handleVisibilityChange = () => {
      landingSheet.project.ready.then(() => {
        if (document.hidden) {
          landingSheet.sequence.pause();
          switch (animationStage) {
            case "intro":
              landingSheet.sequence.position = 5.5;
              break;
            case "contactToLanding":
              landingSheet.sequence.position = 6;
              break;
            case "landingToContact":
              landingSheet.sequence.position = 8;
              break;
            case "eventsToLanding":
              landingSheet.sequence.position = 9;
              break;
            case "landingToEvents":
              landingSheet.sequence.position = 11;
              break;
            case "speakersToLanding":
              landingSheet.sequence.position = 12;
              break;
            case "landingToSpeakers":
              landingSheet.sequence.position = 14;
              break;
            case "aboutToLanding":
              landingSheet.sequence.position = 15;
              break;
            case "landingToAbout":
              landingSheet.sequence.position = 17;
              break;
          }
        } else {
          landingSheet.sequence.pause();
        }
      });
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);

      document.removeEventListener("visibilitychange", handleVisibilityChange);

      clearInterval(animationTimeout);
    };
  }, [animationStage]);

  const { positionFinder } = useControls({
    positionFinder: {
      // value: [-0.7190000000000004, 0.11800000000000008, -0.663], // contact
      // value: [0.9610000000000005, 0.07800000000000007, -0.653], // events
      // value: [-0.7590000000000005, 0.58, 0.7770000000000005], // speakers
      value: [0.9, 0.05999999999999972, 0.7970000000000005], // about
      step: 0.01,
    },
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

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

      {/* {animationStage !== "intro" && <OrbitControls enableRotate={true} />} */}
      {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}

      <Environment
        files="/environments/sunset1QuarterResOrange.hdr"
        environmentIntensity={1}
        backgroundIntensity={1}
        background={true}
        resolution={128}
      />

      <SheetProvider sheet={landingSheet}>
        <PerspectiveCamera
          theatreKey="camera"
          makeDefault
          fov={50}
          position={[0, 2.5, 0]}
          lookAt={cameraTarget.current}
          far={4}
          near={0.03}
          ref={cameraRef}
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

        <group rotation={[0, 0, 0]}>
          {/* <Float
            speed={1}
            rotationIntensity={0.5}
            floatIntensity={0.75}
            floatingRange={[-0.1, 0.1]}
          > */}
          <group position={[-0.013, 1.5, 0]} ref={orb}>
            <EnergyOrb color="orange" lightIntensity={3} />
          </group>
          <CityModel scale={0.02} />
          {/* </Float> */}
          <Float
            speed={1}
            rotationIntensity={1}
            floatIntensity={0.75}
            floatingRange={[-0.1, 0.1]}
          >
            <Blimp scale={0.25} position={[0, 0.75, 0]} />
          </Float>
        </group>

        <group
          position={window.innerWidth < 850 ? [0.3, 0.31, 1.14] : [0.85, 0.4, 0.75]}
          rotation={
            window.innerWidth < 850
              ? [Math.PI / 2.5, 0, 0]
              : [Math.PI / 2, 0, Math.PI / 4.5]
          }
          onClick={() => {
            handleAboutClick();
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <AboutUs
            position={[0, 0, 0]}
            scale={window.innerWidth < 850 ? 0.13 : 0.1}
          />
        </group>

        <group
          position={
            window.innerWidth < 850 ? [-0.26, 0.31, 1.14] : [-0.67, 0.4, 0.8]
          }
          rotation={
            window.innerWidth < 850
              ? [Math.PI / 2.5, 0, 0]
              : [Math.PI / 2, 0, -Math.PI / 4.5]
          }
          onClick={() => {
            handleSpeakersClick();
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Speakers
            position={[0, 0, 0]}
            scale={window.innerWidth < 850 ? 0.13 : 0.1}
          />
        </group>

        <group
          position={
            window.innerWidth < 850 ? [0.78, 0.80, -0.5] : [0.55, 0.44, -0.5]
          }
          // position={[0.55, 0.44, -0.5]}
          rotation={window.innerWidth < 850 ? [0, 0, 0] : [0, 0, 0]}
          onClick={() => {
            handleEventsClick();
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Events
            position={[0, 0, 0]}
            scale={window.innerWidth < 850 ? 0.2 : 0.125}
          />
        </group>

        <Arrow
          basePosition={[0.85, 0.49, 0.75]}
          scale={window.innerWidth < 850 ? 0 : 0.06}
        />

        <Arrow
          basePosition={[-0.67, 0.49, 0.8]}
          scale={window.innerWidth < 850 ? 0 : 0.06}
        />

        <Arrow
          basePosition={
            window.innerWidth < 850 ? [0.33, 0.53, 0.65] : [0.55, 0.42, -0.6]
          }
          scale={window.innerWidth < 850 ? 0 : 0.06}
        />

        <Arrow
          basePosition={
            window.innerWidth < 850 ? [-0.27, 0.53, 0.8] : [-0.61, 0.47, -0.52]
          }
          scale={window.innerWidth < 850 ? 0 : 0.06}
        />
      </SheetProvider>
    </>
  );
}
