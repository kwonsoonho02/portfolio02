let index = 0
let change = false;
function siteLoad (){
	$('head').append(`<style>
		.item{width: 90%;}
		.item-box{width: 25%; float: left;}
		.layer{position:fixed;left:0;right:0;top:0;bottom:0;
		background:rgba(0, 0, 0, 0.5); text-align:center;z-index:100;
		display: flex; align-items: center; justify-content: center;} max-width:600px;max-height:600px;
		.item animate-box image-popup:not(.bounceIn):hover{transform: rotate(15deg) scale(1.3);z-index:10;}
		.layer .box{text-align:center;background:#FFF;transition:0.5s;opacity:0;position:relative;}
		.layer .box img{max-width:600px;max-height:550px;}
		.layer.active .box{opacity:1;}
		.layer-content{ max-width:600px;max-height:600px;}
		.layer .layer-close{position:absolute;right:0;z-index:10;}
		.layer .layer-close.top{top:-50px;}
		.layer .layer-close.bottom{bottom:-50px;}
		.layer .arrow{position:absolute;top:calc(50% - 17px)}
		.layer .arrow.left{left:-60px}
		.layer .arrow.right{right:-60px}
		.out{opacity: 0}
		.fh5co-desc{background: white}
		.btn-default{display:inline-block;text-decoration:none;color:#FFF;background:#09F;padding:5px 10px;font-size:13px;}
	</style>`);
	position()
	scrollEvent()
}


function position (){
	var len = $('.item').length;
	var sdf = $('#fh5co-board').clone();
	$('#fh5co-board').empty();
	$('#fh5co-board').append(`<div class="item-box"></div>
		<div class="item-box"></div>
		<div class="item-box"></div>
		<div class="item-box"></div>`);

	for(var i = 1; i <= len; i++){
		var pin = i % 4 -1;
		$('.item-box').eq(pin).append(sdf.find(".item").eq(0))
	}
}


function scrollEvent (){
	$('.animate-box').addClass('animated');
	var st = window.scrollY;
	var sh = window.scrollHeight; 
	var sp = st + sh;
	$('.animate-box').each(function() {
		var it = $(this).offset().top;
		var ih = $(this).height();
		var ip = it + ih;
		if (st <= it && sp >= ip) {
			//$(this).addClass('bounceIn').removeClass('out')
			console.log(st);
		}else{
			//$(this).addClass('out').removeClass('bounceIn')
			console.log(sh);
		}
	});
}

function layerOpen(){ 
	if($(this).find(".animate-box").hasClass("out") && !change)
		return 
	const _this = $(this);
	
	var img = _this.find('img').clone() 
	var title = _this.find('.fh5co-desc').clone() 
	const ferment =
	 `<div class="layer">
			<div class="box">
				<div class="layer-content"></div>
				<a href="#" class="btn-default top layer-close">닫기</a>
				<a href="#" class="btn-default bottom layer-close">닫기</a>
				<a href="#" class="btn-default arrow left">이전</a>
				<a href="#" class="btn-default arrow right">다음</a>
			</div>
		</div>
	`
	$('body')
		.append(ferment)
		.find('.layer-content')
		.append(img)
		.append(title)
		$('.layer').fadeIn(300, function () {
			$(this).addClass('active')
		})
}
function layerClose () {

	$('.layer').removeClass('active').fadeOut(300, function () {
		$(this).remove()
	});
	change = false;
}
function layerChange () {
	$('.layer').remove()
	change = true;
	const len = $('.item').length                               

	if ($(this).hasClass('left')) {
		if (--index < 0) index = len - 1
	} else {
		if (++index >= len) index = 0
	}
	$('.item').eq(index).click()
}

$(siteLoad)
.on('click', 'a[href="#"], .item', () => false)
.on('scroll', scrollEvent)
.on('click', '.item', layerOpen)
.on('click', '.arrow', layerChange)
.on('click', '.layer-close', layerClose)
.on('click', '.fh5co-menu-btn', function() {
	$("#fh5co-offcanvass").css({"right":"300px"})
})
.on('click', '.fh5co-offcanvass-close.js-fh5co-offcanvass-close', function() {
	$("#fh5co-offcanvass").css({"right":"0"})
})

