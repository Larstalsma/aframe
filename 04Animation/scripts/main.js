var rotationSpeed = 0.05;
var positionSpeed = 0.02;
var scale = 0.08;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	console.log(myOtherBox.object3D.positionSpeed.y);
	myOtherBox.object3D.rotation.z -= rotationSpeed;
	console.log(myOtherBox.object3D.scale.z);
}



setInterval(spin, 16); //equivalent to 60 fps