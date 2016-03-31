//AJAX Function to insert NAV element into every page
$(document).ready(function(){
	var defer = $.Deferred();
	//Append the necessary CSS before injecting the HTML into 
	//the page (prevents element change after load)
	$('<link/>', {rel: 'stylesheet', type: 'text/css', href: '/Resources/CSS/master.css'}).appendTo('links');
	$('<link/>', {rel: 'stylesheet', type: 'text/css', href: '/Resources/CSS/nav.css'}).appendTo('links');
	$("#navMenu").load("/Resources/Components/nav.html", function(){defer.resolve();});
	defer.then(function() {
		console.log("Page Header Found Before Insert");
		$("#header").append(document.title);
	});
});