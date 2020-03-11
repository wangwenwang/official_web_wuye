		$(".Tab>.tabHead>div").click(function(){
			$(this).attr('class','tabFirst').siblings().removeClass('tabFirst');
			$('.tabContent>div').eq($(this).index()).fadeIn(100).siblings().fadeOut(20);
		})

    // 轮播图

      // 图片大于四个 按钮出现
      $(".Wareh_Serv_image_swiper ul li").each(function(i){

        if($(this).parent().children("li").length > 4){

            $(this).parents(".Wareh_Serv_image_swiper").find(".Wareh_Serv_swiperBtn").css("display","block")
        }else{

            $(this).parents(".Wareh_Serv_image_swiper").find(".Wareh_Serv_swiperBtn").css("display","none")

        }
      })

        // 点击左边按钮
    $(".Wareh_Serv_swiperBtn>.icon-msnui-menu-left").click(function(){



        let Wareh_Serv_list = $(this).parents(".Wareh_Serv_list");

        if( Wareh_Serv_list.find("ul").is(":animated")){
          return;
        }
        // 图片个数
        let listImgLength =  Wareh_Serv_list.find("li").length;

          // margin-left
        let UlMarginLeft = parseFloat(Wareh_Serv_list.find("ul").css("marginLeft"));

        console.log(UlMarginLeft)
        if(UlMarginLeft == 0){
          return;
        }

        let removeMarginLeft = (UlMarginLeft + 161.25) + "px";

        Wareh_Serv_list.find("ul").animate({"margin-left":removeMarginLeft})
    })

        // 点击右边按钮
    $(".Wareh_Serv_swiperBtn>.icon-msnui-menu-right").click(function(){

        let Wareh_Serv_list = $(this).parents(".Wareh_Serv_list");

          // 图片个数
        let listImgLength =  Wareh_Serv_list.find("li").length;

        if( Wareh_Serv_list.find("ul").is(":animated")){
          return;
        }

        // ul总长度
        let UlWidth = (listImgLength * 161.25) - 15;

        console.log("总长度" + UlWidth)
          // margin-left
        let UlMarginLeft = parseFloat(Wareh_Serv_list.find("ul").css("marginLeft"));

        // if(UlMarginLeft + 700 == 0){
        //   return;
        // }

        console.log(UlMarginLeft)

        if(-UlMarginLeft + 630 == UlWidth){
          return;
        }

        let removeMarginLeft = (UlMarginLeft - 161.25) + "px";

        Wareh_Serv_list.find("ul").animate({"margin-left":removeMarginLeft})
    })


    // 点击小图 大图变换
    $(".Wareh_Serv_image_swiper ul li").mouseenter(function(){

        $(this).css("border","3px solid #ec662c").siblings().css("border","3px solid #fff")
        $(this).parents(".Wareh_Serv_image_swiper").find(".Wareh_Serv_big_images").children("img").attr("src",$(this).children("img").attr("src"))
      })

    // 轮播图 结束