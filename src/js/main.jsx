import * as THREE from 'three'
// import anime from 'animejs'


let camera, scene, renderer, mesh

const init = () => {
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 )
	camera.position.z = 400

	scene = new THREE.Scene()

	const geometry = new THREE.BoxBufferGeometry( 100, 100, 100 )
	const material = new THREE.MeshBasicMaterial()

	mesh = new THREE.Mesh( geometry, material )
	scene.add(mesh)

	renderer = new THREE.WebGLRenderer()
	renderer.setPixelRatio( window.devicePixelRatio )
	renderer.setSize( window.innerWidth, window.innerHeight )

	document.body.appendChild( renderer.domElement )

	window.addEventListener( 'resize', onWindowResize, false )
}


const onWindowResize = () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize( window.innerWidth, window.innerHeight )
}


const animate = () => {
	requestAnimationFrame( animate )
	mesh.rotation.x += 0.001
	mesh.rotation.y += 0.002
	renderer.render( scene, camera )
}

init()
animate()
