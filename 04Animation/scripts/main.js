var rotationSpeed = 0.01;
var positionSpeed = 0.01;
var scaleSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
	myOtherBox.object3D.rotation.y -= positionSpeed;
	console.log(myOtherBox.object3D.position.y);
	myOtherBox.object3D.rotation.z -= scale.z;
	console.log(myOtherBox.object3D.scale.z);
	myOtherBox.object3D.rotation.x += rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
	myOtherBox.object3D.rotation.y += positionSpeed;
	console.log(myOtherBox.object3D.position.y);
	myOtherBox.object3D.rotation.z += scaleSpeed;
	console.log(myOtherBox.object3D.scale.z);
}

setInterval(spin, 16);