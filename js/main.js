$(function(){

	function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	window.totalDownloads = 1;

	var getSome;

	getSome = {
		instagram: function(tag, interval, minTagId){
			var _url;
			_url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=6954e6f84aad462e998b5b8d550730db';
			$.ajax({
				url: _url,
				dataType: 'jsonp',
				crossDomain: true,
				success: function(instagram){
					var _i, _len, img, cap, user_name, user_pic;
					_i = 0;
					getSome.totalSteps = _len = instagram.data.length;
					//if (console.log) { alert('_len', _len); }
					for (_i; _i < _len; _i++) {
						img = instagram.data[_i].images.standard_resolution.url;
						cap = instagram.data[_i].caption.text;
						user_name = instagram.data[_i].caption.from.username;
						user_pic = instagram.data[_i].caption.from.profile_picture;
						$('#impress').append('<div class="slide step"' +
							'data-rotate-x="-' + (_i * 100) +
							'" data-rotate-y="' + (_i * 400) +
							'" data-x="' + (_i * 500) +
							'" data-y="' + (_i * 1000) * getRandomInt(-1, 1) +
							'" data-z="-' + getRandomInt(_i, 1245) +
							'" data-rotate=' + getRandomInt(_i, 45) + '>' +
							'<img src="' + img + '" alt="">' +
							'<div class="caption"><img src="' + user_pic + '">' +
							'<strong>' + user_name + '</strong> - ' + cap + '</div>' +
						'</div>');
					}
					impress().init();
					window.nextImage = window.setInterval(function(){
						getSome.next();
					}, 8000);
				}
			});
		},
		next: function(){
			// if (console.log) { console.log("getSome.totalSteps === $('.step.active').index()", getSome.totalSteps , $('.step.active').index()); }
			if (getSome.totalSteps === ($('.step.active').index() + 1) || getSome.totalSteps === 0) {
				window.clearTimeout(window.nextImage);
				// window.location.assign('http://hashtag.dev/');
				window.location = '/';
				return;
			}
			impress().next();
		}
	};

	getSome.instagram('593boo');

});
