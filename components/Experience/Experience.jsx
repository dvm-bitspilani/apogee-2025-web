import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useCallback, useEffect, useRef, useState } from "react";
import { Leva, useControls } from "leva";
import EnergyOrb from "../EnergyOrb/EnergyOrb.jsx";
import { CityModel } from "./CityModel/CityModel.jsx";
import { Blimp } from "./Blimp/Blimp.jsx";

import {
  setNavigationStage,
  experienceAnimationsActions,
  reverseAnimation,
} from "../../store/experienceAnimationsSlice/experienceAnimationsSlice.js";

import { useDispatch, useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";
// studio.initialize();
// studio.extend(extension);

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
import { AboutUsBoard } from "./AboutUs/AboutUsBoard.jsx";
import { SpeakersBoard } from "./Speakers/SpeakersBoard.jsx";
import { EventsBoard } from "./Events/EventsBoard.jsx";
import { Car } from "./Car/Car.jsx";
// import { Train } from "./Train/Train.jsx";
import Arrows from "./Arrows/Arrows.jsx";

const CAMERA_TARGET_COORDS = {
  landingToContact: { x: -0.72, y: 0.12, z: -0.663 },
  landingToEvents: { x: 1.121, y: 0.06, z: -0.703 },
  // landingToEvents: { x: 0.961, y: 0.078, z: -0.653 },
  // landingToEvents: { x: 0.961, y: 0.4, z: -0.89 },
  // landingToSpeakers: { x: -0.759, y: 0.58, z: 0.777 },
  landingToSpeakers: { x: -0.879, y: 0.68, z: 0.717 },
  landingToAbout: { x: 0.9, y: 0.0599, z: 0.797 },
  default: { x: 0, y: 0, z: 0 },
};

export const landingSheet = getProject("Landing Project", {
  state:
    window.innerWidth < 850 ? animationStatesMobile : animationStatesDesktop,
}).sheet("Landing Sheet");

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

  const isUserUnfocusAtPreloader = useSelector(
    (state) => state.experienceAnimations.isUserUnfocusAtPreloader
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
      console.log(orb.current);

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
            x: -0.013,
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
      const coords =
        CAMERA_TARGET_COORDS[animationStage] || CAMERA_TARGET_COORDS.default;
      cameraTargetPosHelper([coords.x, coords.y, coords.z]);
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

    if (isUserUnfocusAtPreloader && animationStage === "intro") {
      landingSheet.project.ready.then(() => {
        landingSheet.sequence.pause();
        landingSheet.sequence.position = 5.5;
      });
    }

    const camTargetSkipHelper = (x, y, z) => {
      gsap.killTweensOf(cameraTarget.current);
      gsap.set(cameraTarget.current, { x, y, z });
    };

    const handleVisibilityChange = () => {
      landingSheet.project.ready.then(() => {
        if (document.hidden && !isUserUnfocusAtPreloader) {
          landingSheet.sequence.pause();
          switch (animationStage) {
            case "intro":
              camTargetSkipHelper(
                CAMERA_TARGET_COORDS.default.x,
                CAMERA_TARGET_COORDS.default.y,
                CAMERA_TARGET_COORDS.default.z
              );
              landingSheet.sequence.position = 5.5;
              break;
            case "contactToLanding":
              camTargetSkipHelper(
                CAMERA_TARGET_COORDS.default.x,
                CAMERA_TARGET_COORDS.default.y,
                CAMERA_TARGET_COORDS.default.z
              );
              landingSheet.sequence.position = 6;
              break;
            case "landingToContact":
              camTargetSkipHelper(
                CAMERA_TARGET_COORDS.landingToContact.x,
                CAMERA_TARGET_COORDS.landingToContact.y,
                CAMERA_TARGET_COORDS.landingToContact.z
              );
              landingSheet.sequence.position = 8;
              break;
            case "eventsToLanding":
              camTargetSkipHelper(
                CAMERA_TARGET_COORDS.default.x,
                CAMERA_TARGET_COORDS.default.y,
                CAMERA_TARGET_COORDS.default.z
              );
              landingSheet.sequence.position = 9;
              break;
            case "landingToEvents":
              camTargetSkipHelper(
                CAMERA_TARGET_COORDS.landingToEvents.x,
                CAMERA_TARGET_COORDS.landingToEvents.y,
                CAMERA_TARGET_COORDS.landingToEvents.z
              );
              landingSheet.sequence.position = 11;
              break;
            case "speakersToLanding":
              camTargetSkipHelper(
                CAMERA_TARGET_COORDS.default.x,
                CAMERA_TARGET_COORDS.default.y,
                CAMERA_TARGET_COORDS.default.z
              );
              landingSheet.sequence.position = 12;
              break;
            case "landingToSpeakers":
              camTargetSkipHelper(
                CAMERA_TARGET_COORDS.landingToSpeakers.x,
                CAMERA_TARGET_COORDS.landingToSpeakers.y,
                CAMERA_TARGET_COORDS.landingToSpeakers.z
              );
              landingSheet.sequence.position = 14;
              break;
            case "aboutToLanding":
              camTargetSkipHelper(
                CAMERA_TARGET_COORDS.default.x,
                CAMERA_TARGET_COORDS.default.y,
                CAMERA_TARGET_COORDS.default.z
              );
              landingSheet.sequence.position = 15;
              break;
            case "landingToAbout":
              camTargetSkipHelper(
                CAMERA_TARGET_COORDS.landingToAbout.x,
                CAMERA_TARGET_COORDS.landingToAbout.y,
                CAMERA_TARGET_COORDS.landingToAbout.z
              );
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
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      clearInterval(animationTimeout);
    };
  }, [animationStage, isUserUnfocusAtPreloader]);

  const { positionFinder } = useControls({
    positionFinder: {
      // value: [-0.7190000000000004, 0.11800000000000008, -0.663], // contact
      // value: [0.9610000000000005, 0.07800000000000007, -0.653], // events
      value: [1.121, 0.068, -0.703], // events 2
      // value: [-0.8790000000000006, 0.68, 0.7170000000000004], // speakers
      // value: [0.9, 0.05999999999999972, 0.7970000000000005], // about
      step: 0.01,
    },
  });

  const { trainPos, trainScale, trainRot } = useControls({
    trainPos: [-0.02099999999999999, -0.06700000000000003, 1.3379999999999956],
    trainScale: {
      value: 0.019999999999999407,
      step: 0.001,
    },
    trainRot: [0, -Math.PI / 2, 0],
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

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

      <Environment
        files="/environments/sunset1by16Orange.hdr"
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
          <group position={[0, 1.5, 0]} ref={orb}>
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

          <Car
            position={[-0.615, 0.001, 0.413]}
            scale={0.06}
            rotation={[0, Math.PI / 2, 0]}
          />

          {/* <Train position={trainPos} scale={trainScale} rotation={trainRot} /> */}
        </group>

        <group
          position={
            window.innerWidth < 850 ? [0.3, 0.31, 1.14] : [0.85, 0.4, 0.75]
          }
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
          <AboutUsBoard
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
          <SpeakersBoard
            position={[0, 0, 0]}
            scale={window.innerWidth < 850 ? 0.13 : 0.1}
          />
        </group>

        <group
          position={
            window.innerWidth < 850 ? [0.78, 0.8, -0.5] : [0.55, 0.44, -0.5]
          }
          // position={[0.55, 0.44, -0.5]}
          rotation={window.innerWidth < 850 ? [0, 0, 0] : [0, 0, 0]}
          onClick={() => {
            handleEventsClick();
          }}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          {/* <Events
            position={[0, 0, 0]}
            scale={window.innerWidth < 850 ? 0.2 : 0.125}
          /> */}
          <EventsBoard
            position={[0, 0, 0]}
            scale={window.innerWidth < 850 ? 0.2 : 0.125}
          />
        </group>

        <Arrows />
      </SheetProvider>
    </>
  );
}
