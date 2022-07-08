import "./App.css";

import { Suspense } from "react";

import { Canvas } from "react-three-fiber";
import { Loader, Html, OrbitControls } from "@react-three/drei";

function App() {
  const imageData = [
    { image: require("./img/suryanamaskar.png"), link: "https://vidyagiri.com/suryanamaskar/", title: "suryanamaskar", description: "f" },
    { image: require("./img/collectiblr.png"), link: "https://vidyagiri.com/collectiblr/", title: "collectiblr", description: "f" },
    {
      image: require("./img/sculpted_and_forged.gif"),
      link: "https://vidyagiri.com/sculpted-and-forged/",
      title: "Sculpted in Our Image, Forged in Our Minds",
      description: "f",
    },
    { image: require("./img/reformations.png"), link: "https://vidyagiri.com/reformations/", title: "Reformations", description: "f" },
    {
      image: require("./img/fragmentations.jpg"),
      link: "https://vidyagiri.com/fragmentations/",
      title: "Fragmentations",
      description: "f",
    },
    {
      image: require("./img/resurrection_fern.jpg"),
      link: "https://vidyagiri.com/resurrection-fern/",
      title: "Resurrection Fern",
      description: "f",
    },
    { image: require("./img/inhale_exhale.jpg"), link: "https://vidyagiri.com/inhale-exhale/", title: "Inhale/Exhale", description: "f" },
    { image: require("./img/doodlebots.jpg"), link: "https://vidyagiri.com/doodlebots/", title: "Doodlebots", description: "f" },
    {
      image: require("./img/flamingo_watching.jpg"),
      link: "https://vidyagiri.com/flamingo-watching/",
      title: "Flamingo Watching",
      description: "f",
    },
    {
      image: require("./img/deadening_exuberance.gif"),
      link: "https://vidyagiri.com/deadening-exuberance/",
      title: "Deadening Exuberance",
      description: "f",
    },
    {
      image: require("./img/days_amongst_trees.jpg"),
      link: "https://vidyagiri.com/days-amongst-trees/",
      title: "Days Amongst Trees",
      description: "f",
    },
    { image: require("./img/fertilizer.jpg"), link: "https://vidyagiri.com/fertilizer/", title: "Fertilizer", description: "f" },
  ];

  return (
    <div className="App">
      <Canvas camera={{ fov: 75, position: [0, 9, 60] }} style={{ height: "100vh", width: "100vw" }}>
        <color attach="background" args={["white"]} />

        <Suspense fallback={null}>
          <group transform scale={[1, 1, 1]} position={[20, 0, -25]}>
            <FeaturedImage position={[-20, 0, 55]} data={imageData[0]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-5, 0, 51]} data={imageData[1]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[6, 0, 40]} data={imageData[2]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[10, 0, 25]} data={imageData[3]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[6, 0, 10]} data={imageData[4]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-5, 0, -1]} data={imageData[5]} rotation={[0 * (Math.PI / 180), -30 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-20, 0, -5]} data={imageData[6]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-35, 0, -1]} data={imageData[7]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-46, 0, 10]} data={imageData[8]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-50, 0, 25]} data={imageData[9]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-46, 0, 40]} data={imageData[10]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-35, 0, 51]} data={imageData[11]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]} />
          </group>

          {/* <mesh>
              <sphereGeometry />
              <meshBasicMaterial />
            </mesh> */}
        </Suspense>
        <ambientLight />
        <OrbitControls enablePan={false} minDistance={5} maxDistance={100} autoRotate={true} autoRotateSpeed={-0.4} />
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;

function FeaturedImage(props) {
  return (
    <>
      <Html transform position={props.position} rotation={props.rotation}>
        <a href={props.data.link} target="_blank" rel="noreferrer">
          <img src={props.data.image} alt="thumbnail" width="640" height="400" />
        </a>
        <p className="flip">{props.data.title}</p>
      </Html>
    </>
  );
}
