import Arrow from "../../Landing/Arrow/Arrow";

export default function Arrows() {
  return (
    <>
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
    </>
  );
}
