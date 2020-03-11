// // 滚动到顶部功能 

// $(window).scroll(function(){

// 	//滚动的高度
// 	var scrollTop = $(this).scrollTop();

// 	if(scrollTop>300){

// 		$(".Scroll_To_TOP").css("display","block")

// 	}else{

// 		$(".Scroll_To_TOP").css("display","none")
// 	}
// })

// $(".Scroll_To_TOP").click(function(){

// 	var scrollTop = $(this).scrollTop();

// 	$('body,html').animate({ scrollTop: 0 }, 2000);
// })


// 轮播图开始
var idx=0;

var timer=setInterval(swipperMove,5000);

function swipperMove(){

	if($('.swipper>ul>li').is(":animated")){
		return;
	}

	$('.swipper>ul>li').eq(idx).stop().fadeOut(1000);

	if(idx>=2){
		idx=-1;
	}
	
	$(".circleContainer li").eq(idx+1).css("background-color","#000").siblings().css("background-color","#fff");

	$('.swipper>ul>li').eq(idx+1).stop().fadeIn(600);

	idx++;

}
$(".circleContainer li").mouseenter(function(){

	$(this).css("background-color","#000").siblings().css("background-color","#fff");

	$('.swipper>ul>li').eq(idx).stop().fadeOut(1000);


	idx = $(this).index();
	$('.swipper>ul>li').eq($(this).index()).stop().fadeIn(600);

})

$(".swipper").mouseenter(function(){
	clearInterval(timer);
});

$(".swipper").mouseleave(function(){
	timer=setInterval(swipperMove,5000);
})

// 轮播图结束



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

if(flag){
	//运营数据
	$(".OperationalData ._Operate_item").mouseenter(function(){
		$(this).find(".Operate_num").css("font-size","26px").stop().animate({"font-size":"46px"},700)
	}).mouseleave(function(){
		$(this).find(".Operate_num").stop().animate({"font-size":"46px"})
	})
}



//K56供应链云平台
$(".System ._System_item").mouseenter(function(){

	$(this).find("._System_item_meng").stop().animate({top:"0"}).children("img").css("display","block").siblings("._System_item_meng_details").css("display","block")
})

$(".System ._System_item").mouseleave(function(){

	$(this).find("._System_item_meng").stop().animate({top:"80%"}).children("img").css("display","none").siblings("._System_item_meng_details").css("display","none")
})

// 首页视频

var video=document.getElementById('videoId');
video.onclick=function(){
    this.play();
    video.controls = "controls";
}
				