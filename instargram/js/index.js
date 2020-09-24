var num = 3;
var max;
function onLoad(){
	$('head').append(`<style>
		.active{height: 52px !important; }
		.border{border-right: none !important;}
		.img{display: none !important;}
		.Fixed {position: fixed !important;}
		.like{background: red;}
		.display{display: none}
		.focus{background: rgba(0,0,0, 1)!important;  width: 20px !important; height: 20px !important}
		.arrow{display: none}
		</style>`)

}

function scrollEvent(){
	if ($(window).scrollTop() == $(document).height() - $(window).height() && !$('input:checkbox[id="like_ck"]').is(":checked")) {
      num++;
      $("#info").append(`<div class="info_pic">
						<div class="pic_header">
							<p class="page">글${num-1}</p>
						</div>
						<div class="pic_content">
							<div class="arrow prev"><</div>
							<ul class="slide">
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<div class="arrow next">></div>
						</div>
						<div class="pic_footer">
							<ul class="won">
								<li class="focus"></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<img src="img/like.png" class="like_img">
						</div>
					</div>`);
    }
}
function headerEvent(){
	var height = $(window).scrollTop();
	if(height == 0){
        $("#header, .gnb").removeClass('active')
        $('#logo').find('a:nth-child(1) img').removeClass('border')
        $('#logo').find('a:nth-child(2) img').removeClass('img')
    }else{
    	$("#header, .gnb").addClass('active')
    	$('#logo').find('a:nth-child(1) img').addClass('border')
    	$('#logo').find('a:nth-child(2) img').addClass('img')
    }
}		
function fixedEvent(){
	var Offset = $('#header').offset();
        if ( $(document).scrollTop() >= Offset.top ) {
           $('#joayo').addClass('Fixed');
        }
        else {
        	$('#joayo').removeClass('Fixed');
    	}
}

function likeEvent(){
	$(this).toggleClass('like');
}

function dblclick(){
	$(this).siblings('.pic_footer').find('.like_img').toggleClass('like');
}

function ckEvent(){
	if ($('input:checkbox[id="like_ck"]').is(":checked")) {
		$('.like').parents('.info_pic').css({"display":"none"})
		$('.like_img:not(".like")').parents('.info_pic').css({"display":"none"})
		if ($('.like_img').hasClass('like') && $('input:checkbox[id="like_ck"]').is(":checked")){
			$('.like').parents('.info_pic').css({"display":"block"})
			$('.like_img:not(".like")').parents('.info_pic').css({"display":"none"})
		}
	}else{
		$('.like').parents('.info_pic').css({"display":"block"})
		$('.like_img:not(".like")').parents('.info_pic').css({"display":"block"})
	}
}
var arr = []
var width;
var obj = 0;
var idx
function prevImg(){
	width = $(this).siblings(".slide").find("li").width();
   	idx = $(this).parents('.info_pic').index();
  	if ($(this).siblings(".slide").is(":animated")) return false;
   	console.log(arr[idx] = typeof arr[idx] == "number" ? arr[idx] - 1 : 1)
   	$(this).siblings('.slide').animate({"margin-left":arr[idx]*-width});
	$(this).parents('.pic_content').siblings('.pic_footer').find('.won li').removeClass('focus')
	$(this).parents('.pic_content').siblings('.pic_footer').find('.won li').eq(arr[idx]).addClass('focus')
}

function nextImg(){
	width = $(this).siblings(".slide").find("li").width();
   	idx = $(this).parents('.info_pic').index();
  	if ($(this).siblings(".slide").is(":animated")) return false;
   	console.log(arr[idx] = typeof arr[idx] == "number" ? arr[idx] - 1 : -1)
   	$(this).siblings('.slide').animate({"margin-left":arr[idx] *width});
   	$(this).parents('.pic_content').siblings('.pic_footer').find('.won li').removeClass('focus')
	$(this).parents('.pic_content').siblings('.pic_footer').find('.won li').eq(arr[idx]).addClass('focus')

}

function ment(){
	$(this).find('.arrow').css({"display":"block"})
}

function mlea(){
	$(this).find('.arrow').css({"display":"none"})
}

$(onLoad)
.on('scroll', scrollEvent)
.on('scroll', headerEvent)
.on('scroll', fixedEvent)
.on('click', '.like_img', likeEvent)
.on('click', '.prev', prevImg)
.on('click', '.next', nextImg)
.on('mouseenter', '.pic_content', ment)
.on('mouseleave', '.pic_content', mlea)
.on('dblclick', '.pic_content', dblclick)
.on('click', '#like_ck', ckEvent)