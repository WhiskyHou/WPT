"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var three_1 = __importDefault(require("three"));
var demo = function () {
    var scene = new three_1.Scene();
    var camera = new three_1.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new three_1.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    var geometry = new three_1.CubeGeometry(1, 1, 1);
    var material = new three_1.MeshBasicMaterial({ color: 0xffff00 });
    var cube = new three_1.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    function loop() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(loop);
    }
    loop();
};
exports.default = demo;
