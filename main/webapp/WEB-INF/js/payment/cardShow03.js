

// 베이직 1개월 카드결제 -> 3개월 화면으로 갈때 DB에서 카드 번호 가져오기 
$(".basic01-card-basic03-card-btn").click(function() {	
	setTimeout(function() {
		$.ajax({
			type: "post",
			url: "/cardShow", // 요청 어디로갈지 수정 
			data: $("#basic-form01").serialize(),  // form 이름만 바꿔주자
			
			success: function(data){
				console.log(data); // data 	
				// 로그인하고 등록한 이력이 있으면 card-modal 보여주기 	
				if (data != "") {
					basiccard_display01.classList.toggle('show');
					basiccard_display03.classList.toggle('show');
						
					var result = data.substr(15, 20);									
					$(".basic-card-num03").text("카드번호 **** **** **** " + result);
					$(".basic-card-num03").append("<button>카드변경</button>");					
					$(".basic-card-num03 > button").addClass("basic-card03-btn");
					$(".basic-card03-btn").attr("type", "button");
					$('.basic-card03-btn').css({"color": "rgb(248, 47, 98)", 
					"margin-left": "10px"});			
				} else if (data == "") { 
					modal12.classList.toggle('show12');
				}	
			},
			error: function(error) {
				alert("DB에 카드 정보 가져오기 실패");
				console.log(error);
			}
		})
    }, 0);
});

// 카드번호 16자리 보여주는 화면에서 베이직 카드결제화면으로 
$(document).on("click", ".basic-card03-btn", function(){
	$("#card_Number").val('');   
	$("#card_Expiry").val('');
	$("#card_Birth").val('');
	
	$('#basic-cardNumber03').removeClass(); // 초기화 
	$("#basic-cardNumber03").addClass("basic-card"); // 첫화면
	$('#basic-contractNumber03').removeClass(); // 초기화 
	$("#basic-contractNumber03").addClass("basic-card"); // 첫화면
	$('#basic-birthNumber03').removeClass(); // 초기화 
	$("#basic-birthNumber03").addClass("basic-card"); // 첫화면

    if (basiccard_display03.classList.contains('show')) {
        basiccard_display03.classList.toggle('show');
        modal12.classList.toggle('show12');
    }
});


// 여기해야된다 아직안한 상태 
// modal15 basic 3개월 네이버 -> 카드결제 basiccard-display03 으로 돌아올때 DB로 확인 
$(".basic03-naver-16card-num").click(function() {	
	// alert($("#card-form").serialize()); // 3개의 값은 제대로 들어옴 여기까진 잘됨  
	setTimeout(function() {
		$.ajax({
			type: "post",
			url: "/cardShow", // 요청 어디로갈지 수정 
			data: $("#card-form").serialize(),  // form 이름만 바꿔주자
		
			success: function(data){
				console.log(data); // data 	
				// 로그인하고 등록한 이력이 있으면 card-modal 보여주기 		
							
				if (data != "") { // modal15 없애고 // 3개월 카드 16자리 띄우기
					if (modal15.classList.contains('show15')) {
				        console.log('modal15 없애기 ');
				        modal15.classList.toggle('show15');
				        if (!basiccard_display03.classList.toggle('show')) {
				        	console.log(' 3개월 16자리 화면 띄우기 ');
				        	basiccard_display03.classList.toggle('show');
				        }
					}
						
					var result = data.substr(15, 20);									
					$(".basic-card-num03").text("카드번호 **** **** **** " + result);
					$(".basic-card-num03").append("<button>카드변경</button>");					
					$(".basic-card-num03 > button").addClass("basic-card03-btn");
					$(".basic-card03-btn").attr("type", "button");
					$('.basic-card03-btn').css({"color": "rgb(248, 47, 98)", 
					"margin-left": "10px"});
					
				} else if (data == "") { 
					modal4.classList.toggle('show4');
				}	
			},
			error: function(error) {
				alert("DB에 카드 정보 가져오기 실패");
				console.log(error);
			}
		})
    }, 0);
});

/*
// modal10 basic 카카오 -> 카드결제 basiccard-display01 로 돌아올때 DB로 확인 
$(".basic-back-kakao-btn01").click(function() {	
	setTimeout(function() {
		$.ajax({
			type: "post",
			url: "/cardShow", // 요청 어디로갈지 수정 
			data: $("#card-form").serialize(),  // form 이름만 바꿔주자
		
			success: function(data){
				console.log(data); 
				if (data != "") {
					if (modal10.classList.contains('show10')) {
				        modal10.classList.toggle('show10');
				        if (!basiccard_display01.classList.toggle('show')) {
				        	basiccard_display01.classList.toggle('show');
				        }
					}
					var result = data.substr(15, 20);									
					$(".precard-num").text("카드번호 **** **** **** " + result);
					$(".precard-num").append("<button>카드변경</button>");					
					$(".precard-num > button").addClass("css-e9fef0");
					$(".css-e9fef0").attr("type", "button");
					// $(".card-input").hide();
				} else if (data == "") { 
					modal4.classList.toggle('show4');
				}
			},
			error: function(error) {
				alert("DB에 카드 정보 가져오기 실패");
				console.log(error);
			}
		})
    }, 0);
});
// modal11 basic 휴대폰 -> 카드결제 basiccard-display01 로 돌아올때 DB로 확인 
$(".basic-back-phone-btn01").click(function() {	
	setTimeout(function() {
		$.ajax({
			type: "post",
			url: "/cardShow", // 요청 어디로갈지 수정 
			data: $("#card-form").serialize(),  // form 이름만 바꿔주자
		
			success: function(data){
				console.log(data); // data 	
				// 로그인하고 등록한 이력이 있으면 card-modal 보여주기 
				
				if (data != "") {
					if (modal11.classList.contains('show11')) {
				        modal11.classList.toggle('show11');
				        if (!basiccard_display01.classList.toggle('show')) {
				        	basiccard_display01.classList.toggle('show');
				        }
					}
					
					var result = data.substr(15, 20);									
					$(".precard-num").text("카드번호 **** **** **** " + result);
					$(".precard-num").append("<button>카드변경</button>");					
					$(".precard-num > button").addClass("css-e9fef0");
					$(".css-e9fef0").attr("type", "button");
					// $(".card-input").hide();
				} else if (data == "") {
					modal4.classList.toggle('show4');
				}
				// $(".card-message").show();
				// location.href="/home"	
			},
			error: function(error) {
				alert("DB에 카드 정보 가져오기 실패");
				console.log(error);
			}
		})
    }, 0);
});
*/


