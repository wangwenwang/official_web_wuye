//未克隆时li个数
var list_oldLength = $('.honor_swiper>ul>li').length;

//克隆四个li（页面可见四个li）
$(".honor_swiper>ul").append($(".honor_swiper>ul>li").eq(0).clone());
$(".honor_swiper>ul").append($(".honor_swiper>ul>li").eq(1).clone());
$(".honor_swiper>ul").append($(".honor_swiper>ul>li").eq(2).clone());
$(".honor_swiper>ul").append($(".honor_swiper>ul>li").eq(3).clone());

//克隆后li个数
var list_newLength = $('.honor_swiper>ul>li').length;

$('.honor_swiper>ul').css("width",list_newLength*280+"px");

var left = 0

var customerTimer = setInterval(customerRight,20)

function customerRight(){

	left+=5;

	$('.honor_swiper>ul').animate({"left":-left+"px"},50)

	if(left==list_oldLength*280){
		$('.honor_swiper>ul').css("left","0px");
		left=0;
	}
}
$('.honor_swiper li').mouseenter(function(){
	clearInterval(customerTimer)
})
$('.honor_swiper li').mouseleave(function(){
	customerTimer = setInterval(customerRight,20)
})