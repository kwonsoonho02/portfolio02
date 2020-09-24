function onFocus(){
	var target = $(this);
	target.siblings('p').addClass('active');
}

function outFocus(){
	var target = $(this);

	if (target.val().trim().length) {
		return;
	}
	target.siblings('p').removeClass('active')
}

function sorts () {

	// 현재 누른버튼이 오름차순인지 내림차순인지
	let type = $(this).hasClass("desc") ? "desc" : "asc";


	// portfolio 를 돌면서 html값과 날짜값을 배열에 object array 형식으로 넣어둠
	let data = [];
	$("#our_ul li").each(function() {

		// 날짜값 가져오기
		let date = $(this).find("span").text();

		// object array 추가
		data.push({
		 date: new Date(date).getTime(),
		 html: $(this).html()
		})

	})


	data.sort(function (a, b) {
		if(type == "desc"){
			return b.date - a.date
		}else{
			return a.date - b.date
		}
	})


	$("#our_ul li").each(function(index) {

		$(this).html(data[index].html)

	})

		
}
function asc () {
		
}

window.onload = function(){
	$(document)
	.on("focus", "#up_content input", onFocus)
	.on("blur", "#up_content input", outFocus)
	.on("click", ".desc", sorts)
	.on("click", ".asc", sorts)
}