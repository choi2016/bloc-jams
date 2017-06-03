function forEach(array, callback){
	for(var i = 0; i < array.length; i++){
		//execute callback
		callback(array[i]);
	}
}