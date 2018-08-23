window.onscroll = function() {
				fixedPosition ();
		    }
			function fixedPosition () {
				oTop = $('.content')[0].offsetTop;
			    sTop = $(window).scrollTop();
			    result = oTop - sTop;
			    if (result <= 0) {
			    		$('.header_fixed').eq(0).css({
			    			"top": "0"
			    		});
			    }else if (result > 0) {
			    		$('.header_fixed').eq(0).css({
			    			"top": "-100%"
			    		});
				}
			}
			

$(function(){
	$(".footer_scroll_btn").click(function(){
		$("html,body").animate({scrollTop: 0}, 500);
	});
	
	scrollTop_num();
	function scrollTop_num(){
		$(window).on("scroll", function(){
			if($(this).scrollTop()>=$("#content").offset().top){
				$(".scrollTop_btn").css({
					"display": "block"
				})
			}
			if($(this).scrollTop()<$("#content").offset().top){
				$(".scrollTop_btn").css({
					"display": "none"
				})			
			}
			if($(this).scrollTop()>=$("#contact").offset().top){
				$(".scrollTop_btn").css({
					"display" : "none"
				})
			}
		})
	}
	
	$(".scrollTop_btn").click(function(){
		$("html,body").animate({scrollTop: 0}, 500);
	});

});



$(function() {
	$(".panel-btn").click(function() {
		$(".panel").slideToggle(200);
		$(".panel-btn-icon").toggleClass("close");
		return false;
	});
	$('a.link').click(function(){
		$(".panel-btn-icon").toggleClass("close");
		$(".panel").slideToggle(200);
	})

});










$(function(){
	function IEVersion() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if(isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion == 7) {
                return 7;
            } else if(fIEVersion == 8) {
                return 8;
            } else if(fIEVersion == 9) {
                return 9;
            } else if(fIEVersion == 10) {
                return 10;
            } else {
                return 6;//IE版本<=7
            }   
        } else if(isEdge) {
            return 'edge';//edge
        } else if(isIE11) {
            return 11; //IE11  
        }else{
            return -1;//不是ie浏览器
        }
    }
	
	var ieInfo = IEVersion();
	if(ieInfo >= 0){
        var arrowHeight01 = $(".process_text:eq(0)").outerHeight() - 16;
		var arrowHeight02 = $(".process_text:eq(1)").outerHeight() - 16;
		var arrowHeight03 = $(".process_text:eq(2)").outerHeight() - 16;
		var arrowHeight04 = $(".process_text:eq(3)").outerHeight() - 16;
		var arrowHeight05 = $(".process_text:eq(4)").outerHeight() - 16;
		console.log(arrowHeight01+" || "+arrowHeight02+" || "+arrowHeight03+" || "+arrowHeight04+" || "+arrowHeight05);
		$(".process_text:eq(0) .process_arrow").css("top",arrowHeight01+"px");
		$(".process_text:eq(1) .process_arrow").css("top",arrowHeight02+"px");
		$(".process_text:eq(2) .process_arrow").css("top",arrowHeight03+"px");
		$(".process_text:eq(3) .process_arrow").css("top",arrowHeight04+"px");
		$(".process_text:eq(4) .process_arrow").css("top",arrowHeight05+"px");
	}
});

$(function() {

	$("#subBtn").on('click', function() {
			var hospital = $("#hospital"),
				name = $("#name"),
//				name_last = $("#name_last"),
				tel01 = $("#number01"),
				tel02 = $("#number02"),
				tel03 = $("#number03"),
				email = $("#con_mail"),
				message = $("#con_message"),
				_uptime = new Date();

			if($(this).hasClass("jpBtn")) {
				if(hospital.val() == "") {
					alert("病院名が空欄です。");
					hospital.focus();
					return false;

				} //hospital
				
				if(name.val() == "") {
					alert("お名前が空欄です。");
					name.focus();
					return false;

				} //name
				
//				if(name_last.val() == "") {
//					alert("お名前が空欄です。");
//					name_last.focus();
//					return false;
//
//				} //name_last
				
				if(tel01.val() == "") {
					alert("電話番号が空欄です。");
					tel01.focus();
					return false;

				} // tel01
				
				if(tel02.val() == "") {
					alert("電話番号が空欄です。");
					tel02.focus();
					return false;

				} // tel02
				
				if(tel03.val() == "") {
					alert("電話番号が空欄です。");
					tel03.focus();
					return false;

				} // tel03
				
				var tel = tel01.val() + tel02.val() + tel03.val();
				var reg=/^\d+$/;
				var telNum = tel;
				if(tel == "" || telNum.length>11 || telNum.length<9 || reg.test(telNum)==false || isNaN(tel)) {
					alert("電話番号を正しくご入力ください。");
					tel01.focus();
					return false;
					
				} //tel


				if(email.val() == "") {
					alert("メールアドレスが空欄です。");
					email.focus();
					return false;
					
					} 
					
					var emailG=email.val();
				  if(!emailG.match(/^([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/))
				  {
				
							
				  		alert("メールのフォーマットは正しくありません。");
				   email.focus();
									return false;
					

					
				}
				
					
				//mail
				
				var messageStr = $("#con_message").val();
				if(message.val() != ""){
					var strs = $("#con_message").val();
					var wordStr=strs.replace(/\n/g, '<br/>').replace(/\r/g, '<br/>');
					var messageStr = wordStr;
				}
				
				var hospitalval = $("#hospital").val(),
					name_val = $("#name").val(),
//					name_lastval = $("#name_last").val(),
					tel01val = $("#number01").val(),
					tel02val = $("#number02").val(),
					tel03val = $("#number03").val(),
					telVal = tel01val +" - "+ tel02val +" - "+ tel03val,
					emailval = $("#con_mail").val(),
					messageval = messageStr,
					subBtn = $(".contact_send");
//				var sbuBtnCopy = subBtn.html();
//				subBtn.addClass("on").html("送信中").attr("disabled", "disabled");
//				subBtn.html("<p>送信中...</p>");
				$(".jpBtn").css("display","none");
				$(".send_p").css("display","block");
				
				$.ajax({
					type: 'POST',
					url: 'sendmail.php',
					cache: false,
					dataType: 'json',
					data: {
						hospitalval: hospitalval,
						name_val: name_val,
						
						telVal: telVal,
						emailval: emailval,
						messageval: messageval,
						_uptime: _uptime
					},
					success: function(data) {

						if(data.flag) {

							$(".confirm_box").css("display","block");
//							subBtn.html(sbuBtnCopy);
							$(".send_p").css("display","none");
							$(".jpBtn").css("display","block");
							empty_inputs ();

							//console.log('ok');
						} else {

							//console.log('error');
						}
					}
				});
			} //sentJp

		}) //subBtn on




})

//empty inputs
function empty_inputs () {
	$("#hospital").val(null);
	$("#name").val(null);
//	$("#name_last").val(null);
	$("#number01").val(null);
	$("#number02").val(null);
	$("#number03").val(null);
	$("#con_mail").val(null);
	$("#con_message").val(null);
	console.log("null end");
}

$(function(){
	$(".close").click(function(){
		$(".confirm_box").css("display","none");
	});
	$(".close_word").click(function(){
		$(".confirm_box").css("display","none");
	});
});