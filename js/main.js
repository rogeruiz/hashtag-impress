$(function(){
	// $.ajax({
	// 	url: "https://api.instagram.com/v1/tags/halloween/media/recent?client_id=6954e6f84aad462e998b5b8d550730db",
	// 	// url: "https://api.instagram.com/v1/tags/halloween/media/recent?client_id=6954e6f84aad462e998b5b8d550730db&min_tag_id=1351307871884",
	// 	dataType: 'jsonp',
	// 	crossDomain: true,
	// 	success: function(instagram){
	// 		var _i, _len, img;
	// 		_i = 0;
	// 		_len = instagram.data.length;
	// 		for (_i; _i < _len; _i++) {
	// 			img = instagram.data[_i].images.standard_resolution.url;
	// 			$('#impress').append('<div class="slide step" data-x="' + _i * 0 + '" data-rotate="' + _i * 15 + '"  data-y="' + _i * 0 +  '" data-z="' + 1250 * _i + '">' +
	// 					'<img src="' + img + '" alt="">' +
	// 			'</div>');
	// 		}
	// 		if (console.log) { console.log('_len', _len); }
	// 		impress().init();
	// 		var nextImage = window.setInterval(function(){
	// 			impress().next();
	// 		}, 3500);
	// 	}
	// });

	function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var getSome;

	getSome = {
		instagram: function(tag, interval, minTagId){
			var _url;
			_url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=6954e6f84aad462e998b5b8d550730db';
			$.ajax({
				url: _url,
				// url: "https://api.instagram.com/v1/tags/halloween/media/recent?client_id=6954e6f84aad462e998b5b8d550730db&min_tag_id=1351307871884",
				dataType: 'jsonp',
				crossDomain: true,
				success: function(instagram){
					var _i, _len, img;
					_i = 0;
					_len = instagram.data.length;
					for (_i; _i < _len; _i++) {
						img = instagram.data[_i].images.standard_resolution.url;
						$('#impress').append('<div class="slide step" data-x="' + getRandomInt(_i, _i * 2) + '" data-rotate="' + getRandomInt(_i, _i * 2) + 15 + '"  data-y="' + getRandomInt(_i, _i * 100) +  '" data-z="' + getRandomInt(_i, _i * 10) + '">' +
								'<img src="' + img + '" alt="">' +
						'</div>');
					}
					if (console.log) { console.log('_len', _len); }
					impress().init();
				}
			});
		}
	};

	var nextCall = window.setInterval(function(){
		getSome.instagram('halloween', 3500);
	}, 6000);

	var nextImage = window.setInterval(function(){
		impress().next();
	}, 2000);

});
