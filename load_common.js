$(function(){

	$("body").prepend('<div class="FixedGlobalRight"><ul><li class="Scroll_To_TOP"><i class="iconfont icon-backtop"></i><span>返回顶部</span></li><li><i class="iconfont icon-zuoji"></i><span>400-884-5500</span></li><li><i class="iconfont icon-zaixianzixun"></i><span>在线咨询</span></li><li class="FixedGlobalRight_last"><div><i class="iconfont icon-weixin"></i><span>微信咨询</span></div><div><img src="./images/QRCode.jpg" alt=""></div></li></ul></div>')
	$("footer").prepend('<div class="Foot_Top"><div class="Foot_Top_Left"><div><img src="images/header/phone.png" alt="深圳市凯东源现代物流股份有限公司"><span>全国合作热线：400-884-5500</span></div><ul><a href="introduction.html">走进凯东源</a><a href="WarehouseIntegration.html">产品服务</a><a href="companyNews.html">新闻资讯</a><a href="successful_case.html">成功案例</a><a href="contactUs.html">联系我们</a></ul><div>地址：深圳市龙华区民治大道嘉熙业广场1001室</div><div>邮箱：kefu@kaidongyuan.com</div></div><div class="Foot_Top_Right"><div><img src="images/header/QrCode_wx.jpg" alt="深圳市凯东源现代物流股份有限公司"><div>关注官方微信公众号</div></div><div><img src="images/header/QrCode_app.png" alt="深圳市凯东源现代物流股份有限公司"><div>下载官方司机APP</div></div></div><div class="Foot_Top_Center"><div>友情链接</div><ul><a  target="_blank" href="http://www.wlhyxh.com/">广东省物流行业协会</a><a  target="_blank" href="http://wetuc.com/">运联网</a><a  target="_blank" href="http://www.sztla.org.cn/">深圳市公路货运与物流行业协会</a><a  target="_blank" href="http://www.gdchain.org/">广东省连锁经营协会</a><a  target="_blank" href="http://www.ccfa.org.cn/portal/cn/index.jsp">中国连锁经营协会</a></ul></div></div>');

	$(".Foot_Bottom").prepend('<span class="pc_banquan">2017-2018 www.kaidongyuan.com 深圳市凯东源现代物流股份有限公司（C）版权所有&nbsp;&nbsp;</span><span class="m_banquan">2017-2018  凯东源城配（C）版权所有&nbsp;&nbsp;</span><span>&nbsp;&nbsp;<a href="http://www.beian.miit.gov.cn">粤ICP备08000931号</a>&nbsp;&nbsp;</span>&nbsp;&nbsp;')
	$("footer").prepend('<div class="m_Foot_bottom"><div class="m_FootBottom_WX"><div class="m_FootBottom_ClickItem"><i class="iconfont icon-weixin"></i><span>微信</span></div><div class="m_FootBottom_WX_Meng"><i class="iconfont icon-guanbi"></i><div><span>微信人工咨询</span><img src="./images/QRCode.jpg" alt=""></div></div></div><div><div class="m_FootBottom_ClickItem"><a href="WarehousingService.html"><i class="iconfont icon-chanpin"></i><span>产品</span></a></div></div><div><div class="m_FootBottom_ClickItem m_FootBottom_tel"><i class="iconfont icon-dianhua1"></i><span>电话</span></div></div></div>')
	$("img").attr("alt","商超配送 城市配送 超市物流配送 食品物流配送 啤酒饮料配送 门店连锁店配送 快消品配送 快消品商超配送 快消品城市配送 仓配一体化 电商交仓 日用品配送 仓储物流公司 超市百货配送 便利店配送 专业食品仓库 专业物流仓库")
	
	$(".Scroll_To_TOP").click(function(){

		var scrollTop = $(this).scrollTop();
		$('body,html').animate({ scrollTop: 0 }, 20);
	})

	$('.m_FootBottom_WX .m_FootBottom_ClickItem').click(function(){
		$('.m_FootBottom_WX_Meng').css('display','block');
	})

	$('.m_FootBottom_WX i.icon-guanbi').click(function(){
		$('.m_FootBottom_WX_Meng').css('display','none');

	})

	$('.m_FootBottom_tel').click(function(){

		window.location.href = 'tel://400-884-5500';
	})
})

function addHtml(bigImg,first,second,third,listData,titleText,titleEnglish,contentData){
	$(".container").append('<div class="contain_top"><img src="'+bigImg+'" alt=""></div><div class="contain_bottom"><div class="bottom_left"><div class="botLeft_position"><div class="left_top"><div class="about_kdy"><div class="about_top"><span>'+first+'</span><br><span>'+second+'</span></div><div class="about_bottom">'+third+'</div></div></div><ul>'+listData+'</ul></div></div><div class="bottom_right"><div class="content_head"><h2>'+titleText+'</h2><h4>'+titleEnglish+'</h4></div><div class="content"  id="content">'+contentData+'</div></div></div>')
	var arr=window.location.href.split('/');

	$('.botLeft_position ul li').each(function(i){

		if($('.botLeft_position ul li').eq(i)[0].className==arr[arr.length-1].slice(0,-5)){
	
			$('.botLeft_position ul li').eq(i).css({"background-color":"#fff","border-left":"5px solid #ec662c"})
		}
	})

	$(".container").append(`<div class="SubpageNavBtn"></div>`);


	var arrNameSub = arr[arr.length-1].slice(0,-5);
	var navIconAndFont= [];
	if(arrNameSub == "introduction" || arrNameSub == "history" || arrNameSub == "culture" || arrNameSub == "honor" || arrNameSub == "staff"){

		navIconAndFont = [{
			'icon':'gongsijieshao',
			'font':'公司介绍',
			'hrefs':'introduction.html'
		},{
			'icon':'ziyuan',
			'font':'发展历程',
			'hrefs':'history.html'
		},{
			'icon':'qiyewenhua',
			'font':'企业文化',
			'hrefs':'culture.html'
		},{
			'icon':'gongsirongyu',
			'font':'公司荣誉',
			'hrefs':'honor.html'
		},{
			'icon':'yuangongfengcai_cu',
			'font':'员工风采',
			'hrefs':'staff.html'
		}]
		
	}else if(arrNameSub == "WarehousingService" || arrNameSub == "DistributionService" || arrNameSub == "WarehouseIntegration" || arrNameSub == "Value-added_logistics_service" || arrNameSub == "CirculationService" || arrNameSub == "VendingMachine"){

		navIconAndFont = [{
			'icon':'liansuo-cangkuguanli-fenzukucunchaxun',
			'font':'仓储服务',
			'hrefs':'WarehousingService.html'
		},{
			'icon':'xiaohuoche',
			'font':'配送服务',
			'hrefs':'DistributionService.html'
		},{
			'icon':'ic_baojiagongju_cangpeiyiti',
			'font':'仓配一体',
			'hrefs':'WarehouseIntegration.html'
		},{
			'icon':'zengzhifuwu',
			'font':'增值服务',
			'hrefs':'Value-added_logistics_service.html'
		},{
			'icon':'liutong',
			'font':'流通服务',
			'hrefs':'CirculationService.html'
		},{
			'icon':'zidongshouhuoji',
			'font':'自动售货机',
			'hrefs':'VendingMachine.html'
		}]

	}else if(arrNameSub == "companyNews" || arrNameSub == "industryNews"){

		navIconAndFont = [{
			'icon':'xinwen',
			'font':'公司新闻',
			'hrefs':'companyNews.html'
		},{
			'icon':'hangyexinwen',
			'font':'行业新闻',
			'hrefs':'industryNews.html'
		}]

	}else if(arrNameSub == "contactUs" || arrNameSub == "BranchOffice" || arrNameSub == "WarehouseAddress"){

		navIconAndFont = [{
			'icon':'dizhi1',
			'font':'公司总部',
			'hrefs':'contactUs.html'
		},{
			'icon':'bumenjizigongsi',
			'font':'子公司及办事处',
			'hrefs':'BranchOffice.html'
		},{
			'icon':'cangchu',
			'font':'仓库地址',
			'hrefs':'WarehouseAddress.html'
		}]
	}

	for(var i = 0;i<navIconAndFont.length;i++){
		$(".SubpageNavBtn").append('<div><a href="'+navIconAndFont[i].hrefs+'"><i class="iconfont icon-'+navIconAndFont[i].icon+'"></i><span>'+navIconAndFont[i].font+'<span/></a></div>');
	}



	
}