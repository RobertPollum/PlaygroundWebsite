function animationToggle(elementID){
	if(!$(elementID).hasClass("animate")) {
		console.log("Animating" + elementID);
		$(elementID).addClass("animate");
	}
	else {
		console.log("Deanimating" + elementID);
		$(elementID).removeClass("animate");
	}
}