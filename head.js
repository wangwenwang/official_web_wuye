$(function(){

	$("header").append('<div class="header_top"><div class="header_top_content"><div class="_top_content_left"></div><div class="_top_content_right"><a href="join_us.html">诚聘英才</a></div></div></div><div class="header_bottom"><div class="logo"></div><div class="m_head_nav"><span></span><span></span></div><div class="m_head_navMeng"><div><span><a href="index.html">首页</a></span></div><div><span><a href="introduction.html">走进凯东源</a></span></div><div><span><a href="companyNews.html">新闻资讯</a></span></div><div><span><a href="successful_case.html">成功案例</a></span></div><div><span><a href="contactUs.html">联系我们</a></span></div></div><ul><li><a class="header_high" href="index.html">首页</a></li><li><a  class="header_high_introduction" href="introduction.html">走进凯东源</a><ul><li><a href="introduction.html">公司介绍</a></li><li><a href="history.html">发展历程</a></li><li><a href="culture.html">企业文化</a></li><li><a href="honor.html">公司荣誉</a></li><li><a href="staff.html">员工风采</a></li></ul></li></li><li><a  class="header_high_companyNews" href="companyNews.html">新闻资讯</a><ul><li><a href="companyNews.html">公司新闻</a></li><li><a href="industryNews.html">行业新闻</a></li></ul></li><li><a  class="header_high" href="successful_case.html">成功案例</a></li><li><a  class="header_high_contactUs" href="contactUs.html">联系我们</a><ul><li><a href="contactUs.html">公司总部</a></li><li><a href="BranchOffice.html">子公司及办事处</a></li><li><a href="WarehouseAddress.html">仓库地址</a></li></ul></li></ul></div>');
	$('head').append('<meta http-equiv="Content-Type" content="text/html;charset=gb2312"/><meta name="sogou_site_verification" content="ikkivvcKYS"/><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">')
	var arr=window.location.href.split('/');

	$('a.header_high').each(function(i){

		if($(this).attr("href")==arr[arr.length-1]){

			$(this).css({"background-color":"#ec662c","color":"#fff"})
		}
	})

	var arrName = arr[arr.length-1].slice(0,-5);

	if(arrName == "introduction" || arrName == "history" || arrName == "culture" || arrName == "honor" || arrName == "staff"){

		$(".header_high_introduction").css({"background-color":"#ec662c","color":"#fff"})

	}else if(arrName == "WarehousingService" || arrName == "DistributionService" || arrName == "WarehouseIntegration" || arrName == "Value-added_logistics_service" || arrName == "CirculationService" || arrName == "VendingMachine"){

		$(".header_high_TPL").css({"background-color":"#ec662c","color":"#fff"})

	}else if(arrName == "companyNews" || arrName == "industryNews"){

		$(".header_high_companyNews").css({"background-color":"#ec662c","color":"#fff"})

	}else if(arrName == "contactUs" || arrName == "BranchOffice" || arrName == "WarehouseAddress"){

		$(".header_high_contactUs").css({"background-color":"#ec662c","color":"#fff"})
	}


	$('header .header_bottom .m_head_nav').click(function(){

		if($('header .header_bottom .m_head_navMeng').css('display') == 'none'){
			$('header .header_bottom .m_head_nav span').eq(0).css({'transform':'translate(-50%,0) rotate(-45deg)','-ms-transform':'translate(-50%,0) rotate(-45deg)','-moz-transform':'translate(-50%,0) rotate(-45deg)','-webkit-transform':'translate(-50%,0) rotate(-45deg)','-o-transform':'translate(-50%,0) rotate(-45deg)'});
		
			$('header .header_bottom .m_head_nav span').eq(1).css({'transform':'translate(-50%,0) rotate(45deg)','-ms-transform':'translate(-50%,0) rotate(45deg)','-moz-transform':'translate(-50%,0) rotate(45deg)','-webkit-transform':'translate(-50%,0) rotate(45deg)','-o-transform':'translate(-50%,0) rotate(45deg)'});
		
			$('header .header_bottom .m_head_navMeng').stop().show(1000);
		}else{
			$('header .header_bottom .m_head_nav span').eq(0).css({'transform':'translate(-50%,-1vw) rotate(0)','-ms-transform':'translate(-50%,-1vw) rotate(0)','-moz-transform':'translate(-50%,-1vw) rotate(0)','-webkit-transform':'translate(-50%,-1vw) rotate(0)','-o-transform':'translate(-50%,-1vw) rotate(0)'});
		
			$('header .header_bottom .m_head_nav span').eq(1).css({'transform':'translate(-50%,1vw) rotate(0)','-ms-transform':'translate(-50%,1vw) rotate(0)','-moz-transform':'translate(-50%,1vw) rotate(0)','-webkit-transform':'translate(-50%,1vw) rotate(0)','-o-transform':'translate(-50%,1vw) rotate(0)'});
		
			$('header .header_bottom .m_head_navMeng').stop().hide(1000);
		}
		
	})

})
