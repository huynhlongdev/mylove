$(function() {
	$('.light-on-off .btn-no').click(function(event) {
		alert('Cảm ơn vì đã vào link này');
		window.location="https://www.google.com.vn/";
	});
	$('.light-on-off .btn-yes').click(function(event) {
		$('.light-on-off').addClass('hidden');
		
	});
	$('.music-on-off .btn-no').click(function(event) {
		window.location="https://www.google.com.vn/";
	});
	$('.music-on-off .btn-yes').click(function(event) {
		$('.music-on-off').addClass('hidden');
		// $("body").append('<audio src="MyLove-Westlife-2049188.mp3" autoplay="autoplay" loop="3" />');
	});

	$('#btn-submit').click(function() {
		// return false;
		var female = $('#female').val();
		var male = $('#male').val();

		if(female != '' && male !=''){
			females = ['trinh', 'thùy trinh'];
			males = ['long', 'thai long'];
			
				for (var i = 0; i < males.length; i++) {
					console.log(males[i]);
				}
				for (var j = 0; j < females.length; j++) {
					console.log(females[j]);
				}
			
			// alert(female);
			if(female ==females[j]  && male  == males[i]){
				$('.info .typewrite').addClass('open');
				var bt =  $('.typewrite');
				if(bt.hasClass('open')){
					$('.info p').addClass('open');
				}
				return false;
			}
			else{
				alert('Xin lỗi vì không thực hiện yêu cầu này');
				// $('.light-on-off, .music-on-off').addClass('hidden');
				return false;
			}

		}
		else{
			// alert('nhập tên nhé');
			$('.hidden-btn').click(function(event) {
			$('.thongbao').removeClass('open');
		});
			$('.thongbao').addClass('open');
			return false;
		}
		
	});
	
});