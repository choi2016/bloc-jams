function forEach(points, animatePoints){
	for(var i = 0; i < points.length; i++){
		//execute callback
		animatePoints();
	}
}