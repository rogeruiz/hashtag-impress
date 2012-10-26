$(function(){
	$.ajax({
		url: "https://api.instagram.com/v1/tags/rokkan/media/recent?client_id=6954e6f84aad462e998b5b8d550730db",
		dataType: 'jsonp',
		crossDomain: true,
		success: function(instagram){
			var _i, _len, img, cap, user_name, user_pic;
			_i = 0;
			_len = instagram.data.length;
			for (_i; _i < _len; _i++) {
				img = instagram.data[_i].images.standard_resolution.url;
				cap = instagram.data[_i].caption.text;
				user_name = instagram.data[_i].caption.from.username;
				user_pic = instagram.data[_i].caption.from.profile_picture;
				$('#impress').append('<div class="slide step" data-x="' + _i * 0 + '" data-y="' + _i * 0 +  '" data-z="-' + 1250 * _i + '">' +
						'<img src="' + img + '" alt="">' +
						'<div class="caption"><img src="' + user_pic + '" align="left">' + '<strong>' + user_name + '</strong> - ' + cap + '</div>' +
				'</div>');
			}
			if (console.log) { console.log('_len', _len); }
			impress().init();
			var nextImage = window.setInterval(function(){
				impress().next();
			}, 3500);
		}
	});
});
