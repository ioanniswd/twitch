$(document).ready(function() {
	
	var endpoint = "https://wind-bow.gomix.me/twitch-api";
	
	function getData(endpoint, channel, divId) {
		
		var url;
		
		url = endpoint + "/streams/" + channel + "?callback=?";
		$.getJSON(url, function(data) {
			console.log('streams');
			console.log(data);
			if(!(data.hasOwnProperty('status') && data.status == 404)) {
				if(data.stream === null) {
					$('#' + divId).addClass('offline');
					$('#' + divId + '  p').addClass('faded');
					$('#' + divId + '  p').html("Offline");
				} else {
					console.log('now live');
					$('#' + divId).addClass('online');
					$('#' + divId + ' p').html(data.stream.game);
				}
			}
		});
			
		url = endpoint + "/channels/" + channel + "?callback=?";
		$.getJSON(url, function(data) {
			console.log('channel');
			console.log(data);
			if(data.hasOwnProperty('status') && data.status == 404) {
				$('#' + divId + ' .inner' ).html('<div class="closed"><p>' + data.message + '</p></div>');
			} else {
				$('#' + divId + '  img').attr('src', data.logo);
				$('#' + divId + '  a').attr('href', data.url);
				$('#' + divId + '  a').html(data.display_name);
			}
		});
	}
		
	
	
	getData(endpoint, 'freecodecamp', 'stream1');
	getData(endpoint, 'ESL_SC2', 'stream2');
	getData(endpoint, 'OgamingSC2', 'stream3');
	getData(endpoint, 'brunofin', 'stream4');
	
	
	// click
	$('#all').click(function() {
		$('span', this).removeClass('fa-circle-o');
		$('span', this).addClass('fa-circle');
		
		$('#offline span').removeClass('fa-circle');
		$('#offline span').addClass('fa-circle-o');
		$('#online span').removeClass('fa-circle');
		$('#online span').addClass('fa-circle-o');
		
		$('.stream').removeClass('hidden');
	});
	
	$('#online').click(function() {
		$('span', this).removeClass('fa-circle-o');
		$('span', this).addClass('fa-circle');
		
		$('#all span').removeClass('fa-circle');
		$('#all span').addClass('fa-circle-o');
		$('#offline span').removeClass('fa-circle');
		$('#offline span').addClass('fa-circle-o');
		
		$('.offline').addClass('hidden');
		$('.online').removeClass('hidden');
	});
	
	$('#offline').click(function() {
		$('span', this).removeClass('fa-circle-o');
		$('span', this).addClass('fa-circle');
		
		$('#all span').removeClass('fa-circle');
		$('#all span').addClass('fa-circle-o');
		$('#online span').removeClass('fa-circle');
		$('#online span').addClass('fa-circle-o');
		
		$('.online').addClass('hidden');
		$('.offline').removeClass('hidden');
	});
	
	
	
	// hover
	$('#all').hover(function() {
		// add/remove animate class
	});
	
	$('#online').hover(function() {
		// add/remove animate clas
	});
	
	$('#offline').hover(function() {
		// add/remove animate clas
	});
	
	
});

