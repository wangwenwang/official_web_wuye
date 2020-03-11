function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

var flag = IsPC(); //true为PC端，false为手机端

var idx = 0;

var imgTimer = setInterval(imgSwiper,5000);

 $(".honor_swiper>ul").append($(".honor_swiper>ul>li:eq(0)").clone(true));
 $(".honor_swiper>ul").append($(".honor_swiper>ul>li:eq(1)").clone(true));
 $(".honor_swiper>ul").append($(".honor_swiper>ul>li:eq(2)").clone(true));

var imgLength = $('.honor_swiper>ul>li').length;

//判断浏览器是否支持css3动画
if(document.body.style.webkitTransform!=undefined){
	$('.honor_swiper>ul>li').eq(2).css("transform","perspective(244px)  rotateY(-7deg)")
	$('.honor_swiper>ul>li').eq(0).css("transform","perspective(244px)  rotateY(7deg)")
}

function imgSwiper(){

	if($('.honor_swiper>ul>li').is(":animated")){
		return;
	}		
	idx++;

	if(!flag){

		if(idx==imgLength-2){
			
			$(".honor_swiper>ul>li").eq(imgLength-3).css("left","100vw");
			$(".honor_swiper>ul>li").eq(imgLength-2).css("left","100vw");
			$(".honor_swiper>ul>li").eq(imgLength-1).css("left","100vw");

			$(".honor_swiper>ul>li").eq(0).css({"left":"-75vw","height":"40vw","top":"2vw","z-index":-1});
			$(".honor_swiper>ul>li").eq(1).css({"left":"-29vw","height":"50vw","top":0,"z-index":33});
			$(".honor_swiper>ul>li").eq(2).css({"left":"18vw","height":"40vw","top":"2vw","z-index":-1});

			idx=1;
		}

		$(".honor_swiper>ul>li").eq(idx-1).animate({"left":"-100vw"},700,function(){
			$(this).css("left","100vw")
		});
		$(".honor_swiper>ul>li").eq(idx).animate({"height":"40vw","left":'-75vw',"top":"2vw","z-index":-1},1000,"swing").css({"-webkit-animation":"left 2s 1 forwards","-o-animation":"left 2s 1 forwards","-moz-animation":"left 2s 1 forwards","animation":"left 2s 1 forwards"});

		$(".honor_swiper>ul>li").eq(idx+1).animate({"height":"50vw","left":"-29vw","top":0,"z-index":33},1500,"swing").css({"-webkit-animation":"center_right 2s 1 forwards","-o-animation":"center_right 2s 1 forwards","-moz-animation":"center_right 2s 1 forwards","animation":"center_right 2s 1 forwards"});

		$(".honor_swiper>ul>li").eq(idx+2).animate({"height":"40vw","left":"18vw","top":"2vw"},2000).css({"-webkit-animation":"right 3s 1 forwards","-o-animation":"right 3s 1 forwards","-moz-animation":"right 3s 1 forwards","animation":"right 3s 1 forwards","z-index":-1});

	}else{

		if(idx==imgLength-2){
			
			$(".honor_swiper>ul>li").eq(imgLength-3).css("left","930px");
			$(".honor_swiper>ul>li").eq(imgLength-2).css("left","930px");
			$(".honor_swiper>ul>li").eq(imgLength-1).css("left","930px");

			$(".honor_swiper>ul>li").eq(0).css({"left":"-375px","height":"350px","top":"40px","z-index":-1});
			$(".honor_swiper>ul>li").eq(1).css({"left":"110px","height":"430px","top":0,"z-index":33});
			$(".honor_swiper>ul>li").eq(2).css({"left":"595px","height":"350px","top":"40px","z-index":-1});

			idx=1;
		}

		$(".honor_swiper>ul>li").eq(idx-1).animate({"left":"-930px"},700,function(){
			$(this).css("left","930px")
		});
		$(".honor_swiper>ul>li").eq(idx).animate({"height":"350px","left":"-375px","top":"40px","z-index":-1},1000,"swing").css({"-webkit-animation":"left 2s 1 forwards","-o-animation":"left 2s 1 forwards","-moz-animation":"left 2s 1 forwards","animation":"left 2s 1 forwards"});

		$(".honor_swiper>ul>li").eq(idx+1).animate({"height":"430px","left":"110px","top":0,"z-index":33},1500,"swing").css({"-webkit-animation":"center_right 2s 1 forwards","-o-animation":"center_right 2s 1 forwards","-moz-animation":"center_right 2s 1 forwards","animation":"center_right 2s 1 forwards"});

		$(".honor_swiper>ul>li").eq(idx+2).animate({"height":"350px","left":"595px","top":"40px"},2000).css({"-webkit-animation":"right 3s 1 forwards","-o-animation":"right 3s 1 forwards","-moz-animation":"right 3s 1 forwards","animation":"right 3s 1 forwards","z-index":-1});

	}
}
//右按钮
$('.honor_swiper>.icon-msnui-menu-right').click(imgSwiper);

//左按钮
$('.honor_swiper>.icon-msnui-menu-left').click(function(){

	if($('.honor_swiper>ul>li').is(":animated")){
		return;
	}		

	idx--;

	if(!flag){

		if(idx<0){
			
			$(".honor_swiper>ul>li").eq(0).css("left","100vw");
			$(".honor_swiper>ul>li").eq(1).css("left","100vw");
			$(".honor_swiper>ul>li").eq(2).css("left","100vw");

			$(".honor_swiper>ul>li").eq(imgLength-3).css({"left":"-75vw","height":"40vw","top":"2vw","z-index":-1});
			$(".honor_swiper>ul>li").eq(imgLength-2).css({"left":"-29vw","height":"50vw","top":0,"z-index":33});
			$(".honor_swiper>ul>li").eq(imgLength-1).css({"left":"18vw","height":"40vw","top":"2vw","z-index":-1});

			idx=imgLength-4;
		}

		$(".honor_swiper>ul>li").eq(idx+3).animate({"left":"100vw","z-index":-1},700);

		$(".honor_swiper>ul>li").eq(idx+2).animate({"height":"40vw","left":"18vw","top":"2vw","z-index":1},1000,"swing").css({"-webkit-animation":"right 2s 1 forwards","-o-animation":"right 2s 1 forwards","-moz-animation":"right 2s 1 forwards","animation":"right 2s 1 forwards"});
		$(".honor_swiper>ul>li").eq(idx+1).animate({"height":"50vw","left":"-29vw","top":0},1500,"swing").css({"-webkit-animation":"center_left 2s 1 forwards","-o-animation":"center_left 2s 1 forwards","-moz-animation":"center_left 2s 1 forwards","animation":"center_left 2s 1 forwards","z-index":33});
		$(".honor_swiper>ul>li").eq(idx).css({"left":"-100vw"}).animate({"height":"40vw","left":"-75vw","top":"2vw"},2000).css({"-webkit-animation":"left 2s 1 forwards","-o-animation":"left 2s 1 forwards","-moz-animation":"left 2s 1 forwards","animation":"left 2s 1 forwards","z-index":1})
		
	}else{

		if(idx<0){
			
			$(".honor_swiper>ul>li").eq(0).css("left","930px");
			$(".honor_swiper>ul>li").eq(1).css("left","930px");
			$(".honor_swiper>ul>li").eq(2).css("left","930px");

			$(".honor_swiper>ul>li").eq(imgLength-3).css({"left":"-375px","height":"350px","top":"40px","z-index":-1});
			$(".honor_swiper>ul>li").eq(imgLength-2).css({"left":"110px","height":"430px","top":0,"z-index":33});
			$(".honor_swiper>ul>li").eq(imgLength-1).css({"left":"595px","height":"350px","top":"40px","z-index":-1});

			idx=imgLength-4;
		}

		$(".honor_swiper>ul>li").eq(idx+3).animate({"left":"930px","z-index":-1},700);

		$(".honor_swiper>ul>li").eq(idx+2).animate({"height":"350px","left":"595px","top":"40px","z-index":1},1000,"swing").css({"-webkit-animation":"right 2s 1 forwards","-o-animation":"right 2s 1 forwards","-moz-animation":"right 2s 1 forwards","animation":"right 2s 1 forwards"});
		$(".honor_swiper>ul>li").eq(idx+1).animate({"height":"430px","left":"110px","top":0},1500,"swing").css({"-webkit-animation":"center_left 2s 1 forwards","-o-animation":"center_left 2s 1 forwards","-moz-animation":"center_left 2s 1 forwards","animation":"center_left 2s 1 forwards","z-index":33});
		$(".honor_swiper>ul>li").eq(idx).css({"left":"-640px"}).animate({"height":"350px","left":"-375px","top":"40px"},2000).css({"-webkit-animation":"left 2s 1 forwards","-o-animation":"left 2s 1 forwards","-moz-animation":"left 2s 1 forwards","animation":"left 2s 1 forwards","z-index":1})
		
	}

});

$(".honor_swiper").mouseenter(function(){
	clearInterval(imgTimer);
	$('.honor_swiper>i').fadeIn()
})
$(".honor_swiper").mouseleave(function(){
	imgTimer = setInterval(imgSwiper,5000) 
	$('.honor_swiper>i').fadeOut()
})
