import React, { useEffect, memo } from "react";
import "./styles/Canvas.css";
// import mousey from "../../assets/3D/mousey/scene.fbx";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function Canvas({ rightSideElementWidth, rightSideElementHeight }) {
  /**
   * Global Variables
   */
  const clock = new THREE.Clock();
  let mixer;

  /**
   * Scene
   */
  const scene = new THREE.Scene();

  /**
   * Objects
   */
  function createObject() {
    // hoodie
    // const loader = new GLTFLoader();
    // loader.load("samba_dancing_gltf/scene.gltf", (gltf) => {
    //   let object = gltf.scene;

    //   object.position.set(0, -0.2, 0);
    //   // object.scale.set(0.12, 0.12, 0.12);
    //   object.scale.set(
    //     rightSideElementWidth / window.innerWidth / 4,
    //     rightSideElementHeight / window.innerHeight / 9,
    //     0.12
    //   );

    //   mixer = new THREE.AnimationMixer(object);

    //   const action = mixer.clipAction(gltf.animations[0]);
    //   action.play();

    //   object.traverse((child) => {
    //     if (child.isMesh) {
    //       child.castShadow = true;
    //       child.receiveShadow = true;
    //     }
    //   });

    //   scene.add(object);
    // });

    // mousey
    const loader = new FBXLoader();
    loader.load("mousey/scene.fbx", (object) => {
      object.position.set(0, -0.2, 0);
      object.scale.set(0.004, 0.004, 0.004);

      mixer = new THREE.AnimationMixer(object);

      const action = mixer.clipAction(object.animations[0]);
      action.play();

      object.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      scene.add(object);
    });
  }
  createObject();

  /**
   * windowSize
   */
  const windowSize = {
    width: rightSideElementWidth,
    height: rightSideElementHeight,
  };

  /**
   * camera
   */
  const camera = new THREE.PerspectiveCamera(
    75,
    windowSize.width / windowSize.height,
    0.1,
    1000
  );
  camera.position.set(0, 0, 1);
  scene.add(camera);

  /**
   * lights
   */
  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight.castShadow = true;
  directionalLight.position.set(0, 0.2, 1);
  scene.add(directionalLight);

  useEffect(() => {
    const canvas = document.getElementById("canvasElement");
    /**
     * renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(windowSize.width, windowSize.height);
    renderer.setClearColor("#006880");
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    renderer.shadowMap.enabled = true;

    /**
     * Resize function
     */
    function resize() {
      window.addEventListener("resize", () => {
        // update window size
        windowSize.width = rightSideElementWidth;
        windowSize.height = rightSideElementHeight;

        // update camera
        camera.aspect = windowSize.width / windowSize.height;
        camera.updateProjectionMatrix();

        // update renderer
        renderer.setSize(windowSize.width, windowSize.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
      });
    }
    resize();

    /**
     * controller
     */
    const controller = new OrbitControls(camera, canvas);
    controller.enableDamping = true;

    /**
     * Animation function
     */
    function animation() {
      renderer.render(scene, camera);
      controller.update();

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      window.requestAnimationFrame(animation);
    }
    animation();

    // Cleanup function to remove the resize event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  return <canvas id="canvasElement"></canvas>;
}

export default memo(Canvas);
