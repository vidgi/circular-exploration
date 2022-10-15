import "./App.css";

import { Suspense } from "react";

import { Canvas } from "react-three-fiber";
import { Loader, Html, OrbitControls } from "@react-three/drei";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function App() {
  var imageData = [
    { image: require("./img/baby-snapdragon.png"), description: "baby snapdragon" },
    { image: require("./img/babys-breath.png"), description: "baby's breath" },
    { image: require("./img/bachelor-button.png"), description: "bachelor button" },
    { image: require("./img/black-eyed-susan.png"), description: "black-eyed susan" },
    { image: require("./img/blue-eyed-grass.png"), description: "blue-eyed grass" },
    { image: require("./img/blue-flax.png"), description: "blue flax" },
    { image: require("./img/candy-tuft.png"), description: "candy tuft" },
    { image: require("./img/clasping-coneflower.png"), description: "clasping coneflower" },
    { image: require("./img/drummond-phlox.png"), description: "drummond phlox" },
    { image: require("./img/lemon-bee-balm.png"), description: "lemon bee balm" },
    { image: require("./img/scarlet-sage.png"), description: "scarlet sage" },
    { image: require("./img/showy-primrose.png"), description: "showy primrose" },
    { image: require("./img/indian-paintbrush.png"), description: "baby snapdragon" },
    { image: require("./img/texas-bluebonnet.png"), description: "texas bluebonnet" },
    { image: require("./img/sweet-alyssum.png"), description: "sweet alyssum" },
    { image: require("./img/mexican-hat.png"), description: "mexican hat" },
    { image: require("./img/plains-coreopsis.png"), description: "plains coreopsis" },
    { image: require("./img/lance-leaved-coreopsis.png"), description: "lance-leaved coreopsis" },
    { image: require("./img/indian-blanket.png"), description: "indian blanket" },
    { image: require("./img/evening-primrose.png"), description: "evening primrose" },
    { image: require("./img/corn-poppy.png"), description: "corn poppy" },
    { image: require("./img/purple-coneflower.png"), description: "purple coneflower" },
    { image: require("./img/scarlet-flax.png"), description: "scarlet flax" },
    { image: require("./img/white-yarrow.png"), description: "white yarrow" },
  ];
  imageData = shuffle(imageData);

  return (
    <div className="App">
      <Canvas camera={{ fov: 75, position: [0, 10, 35] }} style={{ height: "100vh", width: "100vw" }}>
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

          <group transform scale={[0.75, 0.75, 0.75]} position={[15, 0, -19]}>
            <FeaturedImage position={[-20, 10, 55]} data={imageData[12]} rotation={[0 * (Math.PI / 180), 180 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-5, 10, 51]} data={imageData[13]} rotation={[0 * (Math.PI / 180), -150 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[6, 10, 40]} data={imageData[14]} rotation={[0 * (Math.PI / 180), -120 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[10, 10, 25]} data={imageData[15]} rotation={[0 * (Math.PI / 180), -90 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[6, 10, 10]} data={imageData[16]} rotation={[0 * (Math.PI / 180), -60 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-5, 10, -1]} data={imageData[17]} rotation={[0 * (Math.PI / 180), -30 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-20, 10, -5]} data={imageData[18]} rotation={[0 * (Math.PI / 180), 0 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-35, 10, -1]} data={imageData[19]} rotation={[0 * (Math.PI / 180), 30 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-46, 10, 10]} data={imageData[20]} rotation={[0 * (Math.PI / 180), 60 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-50, 10, 25]} data={imageData[21]} rotation={[0 * (Math.PI / 180), 90 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-46, 10, 40]} data={imageData[22]} rotation={[0 * (Math.PI / 180), 120 * (Math.PI / 180), 0]} />
            <FeaturedImage position={[-35, 10, 51]} data={imageData[23]} rotation={[0 * (Math.PI / 180), 150 * (Math.PI / 180), 0]} />
          </group>
          {/* <mesh>
              <sphereGeometry />
              <meshBasicMaterial />
            </mesh> */}
        </Suspense>
        <ambientLight />
        <OrbitControls enablePan={false} minDistance={5} maxDistance={200} autoRotate={true} autoRotateSpeed={-0.4} />
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
        {/* <a href={props.data.link} target="_blank" rel="noreferrer"> */}
        <img src={props.data.image} alt="thumbnail" width="550" height="700" />
        {/* </a> */}
        {/* <p className="flip">{props.data.title}</p> */}
      </Html>
    </>
  );
}
