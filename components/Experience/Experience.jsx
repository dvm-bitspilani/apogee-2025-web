import {Canvas} from "@react-three/fiber";
import {TestComp, TestInstances} from "../TestComp/TestComp.jsx";
import {BakeShadows, OrbitControls, PresentationControls} from "@react-three/drei";
import {Perf} from "r3f-perf";

export default function Experience() {
    return (
        <Canvas
            camera={{
                position: [2, 2, 2],
                far: 10
            }}
        >
            <Perf position='top-left'/>

            <OrbitControls
                maxPolarAngle={Math.PI / 2.5}
                minPolarAngle={Math.PI / 5}
            />

            <BakeShadows/>

            {/*<fogExp2 attach="fog" color='#564d65' density={0.03}/>*/}

            <ambientLight intensity={2}/>
            {/*<PresentationControls*/}
            {/*    enabled={true} // the controls can be disabled by setting this to false*/}
            {/*    global={false} // Spin globally or by dragging the model*/}
            {/*    cursor={true} // Whether to toggle cursor style on drag*/}
            {/*    snap={false} // Snap-back to center (can also be a spring config)*/}
            {/*    speed={1.5} // Speed factor*/}
            {/*    zoom={1} // Zoom factor when half the polar-max is reached*/}
            {/*    rotation={[0, 0, 0]} // Default rotation*/}
            {/*    polar={[Math.PI / 12, Math.PI / 4]} // Vertical limits*/}
            {/*    azimuth={[-Infinity, Infinity]} // Horizontal limits*/}
            {/*    config={{mass: 1, tension: 0, friction: 0}} // Spring config*/}
            {/*>*/}
            <spotLight intensity={2}/>
            <group scale={0.08}>
                <TestInstances>
                    <TestComp/>
                </TestInstances>
            </group>
            {/*</PresentationControls>*/}
        </Canvas>
    )
}