import THREE, { Camera, CubeGeometry } from 'three'

const demo = () => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    
    renderer.setSize(window.innerWidth , window.innerHeight)
    document.body.appendChild(renderer.domElement)
    
    const geometry = new THREE.CubeGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial({color: 0xffff00})
    const cube = new THREE.Mesh(geometry, material)
    
    scene.add(cube)
    
    camera.position.z = 5
    
    function loop(){
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
    
        renderer.render(scene, camera)
    }
    
    requestAnimationFrame(loop)
}

export default demo
