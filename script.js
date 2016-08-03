$(document).ready(function(){
	var $tile = "<div class='block'></div>";
	
	for(var j = 0; j < 1000/35; j++){ 
		for(var i = 0; i < (1000/35); i ++){
			$("#container").append($tile); 
		}
	}
	
	/*$(document).on('hover', '.block' function(){
		$(this).css("background-color","black"); 
	}); */
	
	$('.block').on("mouseover", function() {
    	 
    	 $(this).css("background", "black");
    }); 

}); 