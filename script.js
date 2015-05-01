//solution 1 meets basic requirements

$(document).ready(function() {

	//create container for button
	$('body').append('<div id="button"></div>');

	//create container for grid
	$('body').append('<div id="container"></div>');

	//create button
	$('#button').append("<button>New Grid</button>");

	//style button
	$('button').css({'height': '60px', 'width': '100%',
									 'font-size': '40px', 'color': 'lightgray'});

	//create grid on button click
	$('button').click(function() {

		//clear previous grid
		$('#container').empty();

		//get user input
		var gridSize = prompt("Enter grid size:");

		//create grid
		for (var i = 0; i < gridSize; i++) {
			$('#container').append("<div id=" + i + "></div>");
			for (var j = 0; j < gridSize; j++) {
				$('#' + i).append('<div class="col"></div>');
			}
		}

		//style rows and columns
		var h = 960 / gridSize;
		for (var i = 0; i < gridSize; i++) { 
			$('#' + i).height(h + 'px');
		}

		$('.col').css({'height': h + 'px', 'width': h + 'px', 'display': 'inline-block'});

		//###########################//
		//   toggle class on mouse   //
		//###########################//

		$('.col').mouseenter(function() {
			$(this).toggleClass('highlighted');
		})

		// $('.col').mouseleave(function() {
		// 	$(this).toggleClass('highlighted');
		// })

		// $('.col').click(function() {
		// 	$(this).toggleClass('highlighted');
		// })

		//############################//
		// end toggle class on mouse  //
		//############################//
	})	
});