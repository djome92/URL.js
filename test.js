//stfu and use ogads

(function($) {

	// Using it without an object
	$.sticky = function(note, options, callback) {
		return $.fn.sticky(note, options, callback);
	};
	$.fn.sticky = function(note, options, callback) {
		// Default settings
		var position = 'bottom-right';
		// top-left, top-right, bottom-left, or bottom-right

		var settings = {
			'speed' : 'slow', // animations: fast, slow, or integer
			'duplicates' : false, // true or false
			'autoclose' : 8000 // integer or false
		};

		// Passing in the object instead of specifying a note
		if (!note) {
			note = this.html();
		}

		if (options) {
			$.extend(settings, options);
		}

		// Variables
		var display = true;
		var duplicate = 'no';

		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random() * 99999);

		// Handling duplicate notes and IDs
		$('.sticky-note').each(function() {
			if ($(this).html() == note && $(this).is(':visible')) {
				duplicate = 'no';
				if (!settings['duplicates']) {
					display = false;
				}
			}
			if ($(this).attr('id') == uniqID) {
				uniqID = Math.floor(Math.random() * 9999999);
			}
		});

		// Make sure the sticky queue exists
		if (!$('body').find('.sticky-queue').html()) {
			$('body').append('<div class="sticky-queue ' + position + '"></div>');
		}

		// Can it be displayed?
		if (display) {
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<span class="sticky-close" rel="' + uniqID + '" title="Close" style="display: inline-block;float: right;cursor: pointer;">âœ–</span<>');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

			// Smoother animation

			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
		}

		// Listeners
		$('.sticky').ready(function() {
			// If 'autoclose' is enabled, set a timer to close the sticky
			if (settings['autoclose']) {
				$('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
			}
		});
		// Closing a sticky
		$('.sticky-close').click(function() {
			$('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
		});

		// Callback data
		var response = {
			'id' : uniqID,
			'duplicate' : duplicate,
			'displayed' : display,
			'position' : position
		}

		// Callback function?
		if (callback) {
			callback(response);
		} else {
			return (response);
		}

	}
})(jQuery);

$(document).ready(function() {
	$.sticky('<b><img src="http://pokecoinsfree.com/ais/France-Flag.png"/>DavidGilbert received <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 541080 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 870990</b>');
	
	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/Canada-Flag-icon.png"/>DoreneBeaudry19 download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 501220 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 9800041</b>');
	}
	setInterval(callnotification, 5000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/Belgium-Flag-icon.png"/> Momkiller download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 684870 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 451522</b>');
	}
	setInterval(callnotification, 7000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/00-cctld-au-icon.png"/>Duad1945 download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 80000 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 80000</b>');
	}
	setInterval(callnotification, 8000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/Australia-Flag-icon.png"/> RoyaleBourassa  download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 40040 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 40040</b>');
	}
	setInterval(callnotification, 9000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/United-States-Flag-icon.png"/>Dragonbldz download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 98898 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 98898</b>');
	}
	setInterval(callnotification, 11000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/Denmark-Flag-icon.png"/>KonstBR download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 99090 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 99090</b>');
	}
	setInterval(callnotification, 13000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/Argentina-Flag-icon.png"/>IjTommy4 download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 58000 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 58000</b>');
	}
	setInterval(callnotification, 15000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/France-Flag.png"/>LanceClash22 download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 80880 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 80880</b>');
	}
	setInterval(callnotification, 16000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/United-States-Flag-icon.png"/>MxBunnyZ download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 758421 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 835588</b>');
	}
	setInterval(callnotification, 18000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/United-States-Flag-icon.png"/>GamerJohn201 download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 597441 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 780000</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/United-States-Flag-icon.png"/>TheKingofCOC2014 download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 404150 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 854125</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/France-Flag.png"/> GDufresneC  received <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 987000 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 780041</b>');
	}
	setInterval(callnotification, 21000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/Belgium-Flag-icon.png"/> Gamer0102  received <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 500400 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 20000</b>');
	}
	setInterval(callnotification, 22000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/Netherlands-Flag-icon.png"/> Kidsrocxy  download <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 52355 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 55000</b>');
	}
	setInterval(callnotification, 24000);

	var callnotification = function() {
		$.sticky('<b><img src="http://pokecoinsfree.com/ais/United-Kingdom-flag-icon.png"/> VernonSalmonsd32  received <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 90990 <img src="http://pokecoinsfree.com/src/pokecoins.png" width="15" height="15"/> - 70990</b>');
	}
	setInterval(callnotification, 25000);

}); 
