$(document).ready(function(){
	var slideIndex2 = 1, sliding = false;
	var slideIndex3 = 1, sliding1 = false;
	
    $('#contents').fullpage({
        anchors: ['sec1', 'sec2', 'sec3' ,'sec4','sec5','sec6','sec7'],
        verticalCentered: true,
        slidesNavigation: true,
		menu: '#menu',
        navigation: true,
		scrollHorizontally: true,
		scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',		
		afterLoad: function(anchorLink,index){
			
			if(index==1){
				$('#header').css({background:'transparent'});
				$('.MyPhoto').stop().animate({top:'170px'},0,function(){
					$('.MyPhoto').addClass('animate');
				})	
			}else{
				$('#header').css({background:'rgb(250, 248, 251,.8) none repeat scroll 0% 0%'});
				$('.MyPhoto').stop().animate({top:'500px'},0,function(){
					$('.MyPhoto').removeClass('animate');
				})						
			}
			
			if(index==2){
				$('#menu li a').eq(1).css({color:'#6274c4'});
			}else{
				$('#menu li a').eq(1).css({color:'#666666'});
			}
			
			if(index==3){
				$('#menu li a').eq(2).css({color:'#6274c4'});
			}else{
				$('#menu li a').eq(2).css({color:'#666666'});
			}
			
			if(index == 4){
				$('#menu li a').eq(3).css({color:'#6274c4'});
				$('.cssMainImg').stop().animate({opacity:1},500);
				$('.css01').stop().animate({opacity:1},500,function(){
					$('.css02').stop().animate({opacity:1},500,function(){
						$('.css03').stop().animate({opacity:1},500)
						$('.cssSubImg').stop().animate({opacity:1},500)
						$('#css .browser').stop().animate({opacity:1},500)
					})
				});	

				$('.jQuery01MainImg').stop().animate({opacity:1},500);
				$('.jQuery01_01').stop().animate({opacity:1},500,function(){
					$('.jQuery01_02').stop().animate({opacity:1},500,function(){
						$('.jQuery01_03').stop().animate({opacity:1},500)
						$('.jQueryIphone').stop().css({opacity:1});
					})
				});	

				$('.jspMainImg').stop().animate({opacity:1},500);
				$('.jsp01').stop().animate({opacity:1},500,function(){
					$('.jspIpad').stop().css({opacity:1})
					$('.jsp02').stop().animate({opacity:1},500,function(){
						$('.jsp03').stop().animate({opacity:1},500)
						$('.jspIphone').stop().css({opacity:1});
					})
				});						
			}else{
				$('#menu li a').eq(3).css({color:'#666666'});
				$('.cssMainImg').stop().css({opacity:0});
				$('.css01').stop().animate({opacity:0},500);
				$('.css02').stop().animate({opacity:0},500);
				$('.css03').stop().animate({opacity:0},500);
				$('.cssSubImg').stop().animate({opacity:0},500);
				$('#css .browser').stop().animate({opacity:0},500);
				
				$('.jQuery01MainImg').stop().css({opacity:0});
				$('.jQuery01_01').stop().animate({opacity:0},500);
				$('.jQuery01_02').stop().animate({opacity:0},500);
				$('.jQuery01_03').stop().animate({opacity:0},500);	
				$('.jQueryIphone').stop().css({opacity:0});		

				$('.jspMainImg').stop().css({opacity:0});
				$('.jsp01').stop().animate({opacity:0},500);
				$('.jsp02').stop().animate({opacity:0},500);
				$('.jsp03').stop().animate({opacity:0},500);	
				$('.jspIpad').stop().css({opacity:0});					
				$('.jspIphone').stop().css({opacity:0});					
			}

			if(index == 5){
				$('#menu li a').eq(4).css({color:'#6274c4'});
				$('.adaptiveMainImg').stop().animate({opacity:1},1000); 		
				$('.adaptive01').stop().animate({opacity:1},500,function(){
					$('.adaptiveIpad').stop().css({opacity:1})
					$('.adaptive02').stop().animate({opacity:1},500,function(){
						$('.adaptiveIphone').stop().css({opacity:1});
						$('.adaptive03').stop().animate({opacity:1},500)
						$('#adaptive01 .browser').stop().animate({opacity:1},500)
					})
				});		
				
				$('.jquery02MainImg').stop().animate({opacity:1},1000); 		
				$('.jQuery02_01').stop().animate({opacity:1},500,function(){
					$('.jQuery02_02').stop().animate({opacity:1},500,function(){
						$('.jQuery02_03').stop().animate({opacity:1},500)
						$('#adaptive01 .browser').stop().animate({opacity:1},500)
					})
				});				

				$('.phpMainImg').stop().animate({opacity:1},1000); 		
				$('.php01').stop().animate({opacity:1},500,function(){
					$('.phpIpad').stop().css({opacity:1})
					$('.php02').stop().animate({opacity:1},500,function(){
						$('.php03').stop().animate({opacity:1},500)
					})
				});					
				
			}else{
				$('#menu li a').eq(4).css({color:'#666666'});
				$('.adaptiveMainImg').stop().css({opacity:0});
				$('.adaptive01').stop().css({opacity:0});
				$('.adaptive02').stop().css({opacity:0});
				$('.adaptive03').stop().css({opacity:0});
				$('.adaptiveIpad').stop().css({opacity:0});
				$('.adaptiveIphone').stop().css({opacity:0});
				$('#adaptive01 .browser').stop().animate({opacity:0},500);
				
				$('.jquery02MainImg').stop().css({opacity:0});
				$('.jQuery02_01').stop().css({opacity:0});
				$('.jQuery02_02').stop().css({opacity:0});
				$('.jQuery02_03').stop().css({opacity:0});		

				$('.phpMainImg').stop().css({opacity:0});
				$('.phpIpad').stop().css({opacity:0});
				$('.php01').stop().css({opacity:0});
				$('.php02').stop().css({opacity:0});
				$('.php03').stop().css({opacity:0});						
			}	
	
			if(index==6){
				$('#menu li a').eq(5).css({color:'#6274c4'});
				$('.jQueryMainImg').stop().animate({opacity:1},1000); 		
				$('.jQuery01').stop().animate({opacity:1},500,function(){
					$('.jQuery02').stop().animate({opacity:1},500,function(){
						$('.jQuery03').stop().animate({opacity:1},500)
						$('#jQuery .browser').stop().animate({opacity:1},500)
					})
				});						
			}else{
				$('#menu li a').eq(5).css({color:'#666666'});
				$('#jQuery .browser').stop().animate({opacity:0},500)
				$('.jQueryMainImg').stop().css({opacity:0});
				$('.jQuery01').stop().css({opacity:0});
				$('.jQuery02').stop().css({opacity:0});
				$('.jQuery03').stop().css({opacity:0});		
			}
			
			if(index==7){
				$('#menu li a').eq(6).css({color:'#6274c4'});
				$('.epilogue').stop().animate({opacity:1},1000);
			}else{
				$('#menu li a').eq(6).css({color:'#666666'});
				$('.epilogue').css({opacity:0});
			}		
		
			
		},
	   onLeave  : function (index, nextIndex, direction) {
			if (index == 4 && !sliding) {
				if (direction == 'down' && slideIndex2 < 3) {
					sliding = true;
					$.fn.fullpage.moveSlideRight();
					return false;
				} else if (direction == 'up' && slideIndex2 > 1) {
					sliding = true;
					$.fn.fullpage.moveSlideLeft();
					return false;
				}
			} else if (sliding) {
				return false;
			}
			
			if (index == 5 && !sliding1) {
				if (direction == 'down' && slideIndex3 < 3) {
					sliding1 = true;
					$.fn.fullpage.moveSlideRight();
					return false;
				} else if (direction == 'up' && slideIndex3 > 1) {
					sliding1 = true;
					$.fn.fullpage.moveSlideLeft();
					return false;
				}
			} else if (sliding1) {
				return false;
			}			

		},
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
			sliding = false;
			sliding1 = false;
		},
		onSlideLeave  : function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
			if (index == 4) {
				if (direction == 'right') {
					sliding = true;
					slideIndex2++;										
				}

                    if (direction == 'left') {
                        sliding = true;
                        slideIndex2--;
                    }
                }
				
			if (index == 5) {
				if (direction == 'right') {
					sliding1 = true;
					slideIndex3++;										
				}

                    if (direction == 'left') {
                        sliding1 = true;
                        slideIndex3--;
                    }
                }				
            }
    });	 
	
	/* ---scroll option css------ */
	$('.fp-slidesNav.bottom').eq(0).find('span').eq(0).text('CSS');
	$('.fp-slidesNav.bottom').eq(0).find('span').eq(1).text('J-QUERY1');
	$('.fp-slidesNav.bottom').eq(0).find('span').eq(2).text('JSP');
	$('.fp-slidesNav.bottom').eq(1).find('span').eq(0).text('J-QUERY2');
	$('.fp-slidesNav.bottom').eq(1).find('span').eq(1).text('ADAPTIVE');
	$('.fp-slidesNav.bottom').eq(1).find('span').eq(2).text('PHP');
	$('.fp-slidesNav').css({'margin':'0 auto',position:'relative'});
		
/* 		if(scrollAct.is(".active")===true){

		}else{
			$('.cssMainImg').stop().animate({left:'-55%'},500);
			$('.css01').stop().animate({opacity:0},500);
			$('.css02').stop().animate({opacity:0},500);
			$('.css03').stop().animate({opacity:0},500);
			$('.cssSubImg').stop().animate({opacity:0},500);
		}

		if(sct>a_sct){

		}else{
			$('.adaptiveMainImg').stop().css({opacity:0});
			$('.adaptive01').stop().css({opacity:0});
			$('.adaptive02').stop().css({opacity:0});
			$('.adaptive03').stop().css({opacity:0});
			$('.adaptiveIpad').stop().css({opacity:0});
			$('.adaptiveIphone').stop().css({opacity:0});
		}		
 */
	


	
	
	/* 갤러리 썸네일  */
	
	var current = 1; //페이지 번호
	var thumbListSize = 4;
	var thumbnail = $('#graphicBox');
	var prev = thumbnail.find('> .left');
	var next = thumbnail.find('> .right');
	var graphicImg = thumbnail.find('> .graphicImg > ul');
	var graphicImgWidth = thumbnail.find('> .graphicImg').width();
	var thumb = graphicImg.find('> .thumb');
	var maxSize = thumb.size();
	var image = $('.graphicImgBox #graphicImage > p');
	
	listMove();
	
	next.on('click', function(){
		if(current < maxSize / thumbListSize - 1) current++;
		listMove();
	});
	
	prev.on('click',function(){
		if(current >0) current--;
		listMove();
	});
	
	function listMove(){
		var tl = graphicImgWidth * current * -1;
		graphicImg.stop().animate({left:tl},{duration:400, easing:'easeOutCubic'});
	}
	
	thumb.on('click', function(){
		image.css('display','none');
		var i = $(this).index();
		image.eq(i).css('display','block');
	});
	thumb.hover(function(){
		var tg = $(this);
		tg.css('opacity','0.3');
	},function(){
		var tg = $(this);
		tg.css('opacity','1');
	});
	
	/* 즐겨찾기 움직이게 */
	
	var interval;
	var angle1 = 0;
	setInterval(function(){
	  angle1+=0.4;
	  $('.fav').rotate(angle1);
	}, 10); 
			
	
	/* cloud moving */
	
	$('.cloud1').DB_springMove({
		key:'e24102',         
		dir:'y',              
		mirror:1,             
		radius:5,            
		motionSpeed:0.1       
	});	
	
	$('.cloud2').DB_springMove({
		key:'e24102',          
		dir:'y',               
		mirror:-1,             
		radius:10,             
		motionSpeed:0.1        
	});	
	
	$('.cloud3').DB_springMove({
		key:'e24102',          
		dir:'y',               
		mirror:1,              
		radius:5,             
		motionSpeed:0.1        
	});		
	
	$('.cloud4').DB_springMove({
		key:'e24102',          
		dir:'y',               
		mirror:-1,              
		radius:10,             
		motionSpeed:0.1        
	});	
	
	/* 내 사진 */
	
	function MyPhoto(){
	$('.MyPhoto').stop().animate({top:'170px'},0,function(){
			$('.MyPhoto').addClass('animate');
		}
	)};
	MyPhoto(); 
	
	/* Favorite */
	
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x,y){
		balloon.css({left: x+15, top: y});
	};
	function showBalloon(){
		balloon.stop().css('opacity',0).show().animate({opacity:1},300);
	};
	function hideBalloon(){
		balloon.stop().animate({opacity:0},300,function(){balloon.hide()});
	};
	
	$('.textballoon').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		element.hover(
			function(event){		
					balloon.text(text);
					updateBalloonPosition(event.pageX, event.pageY);
					showBalloon();
			},
			function(){
				hideBalloon();
			}
		);
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX, event.pageY);
		});
	});
	

	/* Main menu Scroll */
/*  	$(window).scroll(function(){
		var winLoc = $(window).scrollTop();
		var profileSct = $('#profile').offset().top-20;

		if(winLoc>1){
			$('#header').css({background:'#faf8fb'});
		}else if(winLoc<1){
			$('#header').css({background:'transparent'});
		}
		
		if(winLoc>profileSct){
			$('.MyPhoto').stop().animate({top:'500px'},0,function(){
				$('.MyPhoto').removeClass('animate');
			})			
		}else if(winLoc<profileSct){
			$('.MyPhoto').stop().animate({top:'170px'},0,function(){
				$('.MyPhoto').addClass('animate');
			})				
		};	
	});	  */
	
	/* skillgraph */

	function activechart(){
		
		var $charts = $('.charts').find('.chart');
		
		$charts.each(function(){
			var $chart = $(this),
			$circleLeft=$chart.find('.left .circle-mask-inner').css({transform: 'rotate(0)'}),
			$circleRight=$chart.find('.right .circle-mask-inner').css({transform: 'rotate(0)'}),
			$percentNumber = $chart.find('.percent-number'),
			percentData = $percentNumber.text(); //함수안에서 쓰면 전역변수로 $안써도됨
			$({percent:0}).delay(1000).stop().animate({percent:percentData},{
			duration: 3000, 
			progress:function(){
					var now = this.percent, // now에 담겨질 숫자는 percentData(0~60,0~90,0~55,0~40)
					deg = now*360/100, // deg (90,270) 퍼센트 25%*360/100 
					degRight = Math.min(Math.max(deg,0),180), //deg(90,180)
					degLeft = Math.min(Math.max(deg-180,0),180) //deg(0,90)
					$circleRight.css({transform:'rotate('+degRight+'deg)'});
					$circleLeft.css({transform:'rotate('+degLeft+'deg)'});
					$percentNumber.text(Math.floor(now));
				}
			});
		});
	};
	
	$('.profile_category ul a').eq(2).click(function(){
		activechart();
	});

	 
	/* profile */
	
	$('#profile').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('.profile_category ul a');
		var panelDivs = topDiv.find('.about_inner > div');
		var lastAnchor;
		var lastPanel;
		var about_li = $('.about_inner div li');
		
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();
 		anchors.click(function(e){
			e.preventDefault();         
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			lastAnchor.removeClass('on');
			currentAnchor.addClass('on');
			lastPanel.hide();
			currentPanel.fadeIn(1000);
			lastAnchor = currentAnchor;
			lastPanel = currentPanel;
			about_li.css({opacity:'0'});
			about_li.css({opacity:'1'},1000);
		}); 
	});
	
	/* css hover scroll */
	 $('#css #slide1 .mainImg').hover(
		function(){
			$('#css .mainImg img').stop().animate({'margin-top':'-294px'},4000);
		},
		function(){
			$('#css .mainImg img').stop().animate({'margin-top':'0'},500);
		}
	); 	
	
	 var cssSub = $('#css .cssSubImg a');
	 cssSub.eq(0).hover(
		function(){
			tg = $(this).find('img').attr('src');
			$('#slide1 .mainImg img').attr({src:tg});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'-320px'},5000);				
		},
		function(){
			$('#slide1 .mainImg img').attr({src:'images/cssmain.png'});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'0'});
		}
	);
	 cssSub.eq(1).hover(
		function(){
			tg = $(this).find('img').attr('src');
			$('#slide1 .mainImg img').attr({src:tg});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'-180px'},5000);				
		},
		function(){
			$('#slide1 .mainImg img').attr({src:'images/cssmain.png'});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'0'});
		}
	);	
	 cssSub.eq(2).hover(
		function(){
			tg = $(this).find('img').attr('src');
			$('#slide1 .mainImg img').attr({src:tg});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'-125px'},5000);				
		},
		function(){
			$('#slide1 .mainImg img').attr({src:'images/cssmain.png'});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'0'});
		}
	);		
	 cssSub.eq(3).hover(
		function(){
			tg = $(this).find('img').attr('src');
			$('#slide1 .mainImg img').attr({src:tg});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'-160px'},5000);				
		},
		function(){
			$('#slide1 .mainImg img').attr({src:'images/cssmain.png'});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'0'});
		}
	);		
	 cssSub.eq(4).hover(
		function(){
			tg = $(this).find('img').attr('src');
			$('#slide1 .mainImg img').attr({src:tg});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'-160px'},5000);				
		},
		function(){
			$('#slide1 .mainImg img').attr({src:'images/cssmain.png'});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'0'});
		}
	);	
	 cssSub.eq(5).hover(
		function(){
			tg = $(this).find('img').attr('src');
			$('#slide1 .mainImg img').attr({src:tg});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'-185px'},5000);				
		},
		function(){
			$('#slide1 .mainImg img').attr({src:'images/cssmain.png'});
			$('#slide1 .mainImg img').stop().animate({'margin-top':'0'});
		}
	);		
	
	/* J-Query01 hover scroll */
	
	$('#css .jQuery01MainImg').hover(
		function(){
			$('#slide2 .mainImg').find('img').stop().animate({'margin-top':'-235px'},4000);
			$('#slide2 .jQueryIphone').css({left:'-10%',opacity:'0.3'});
		},
		function(){
			$('#slide2 .mainImg').find('img').stop().animate({'margin-top':'0'},500);
			$('#slide2 .jQueryIphone').css({left:'-8%',opacity:'1'});
		}
	);
	
	/* JSP hover scroll */
	
	$('#css .jspMainImg').hover(
		function(){
			$('.jspMainImg .mainImg').find('img').stop().animate({'margin-top':'-152px'},4000);
			$('#slide3 .jspIphone').css({left:'47%',opacity:'0.3'});
			$('#slide3 .jspIpad').css({left:'-8%',opacity:'0.3'});
		},
		function(){
			$('#slide3 .mainImg').find('img').stop().animate({'margin-top':'0'},500);
			$('#slide3 .jspIphone').css({left:'45%',opacity:'1'});
			$('#slide3 .jspIpad').css({left:'-6%',opacity:'1'});
		}
	);	

	
	/* jquery02 hover scroll */
	
	 $('.jquery02MainImg .mainImg').hover(function(){
			$('.jquery02MainImg .mainImg img').stop().animate({'margin-top':'-2125px'},12000);
		},function(){
			$('.jquery02MainImg .mainImg img').stop().animate({'margin-top':'0'},1500);
		}); 		
		
	/* adaptive01 hover scroll */
	
	 $('.adaptiveMainImg .mainImg').hover(function(){
			$('.adaptiveMainImg .mainImg img').stop().animate({'margin-top':'-3600px'},14000);
			$('.adaptiveIphone').css({left:'47%',opacity:'0.3'});
			$('.adaptiveIpad').css({left:'-8%',opacity:'0.3'});
		},function(){
			$('.adaptiveMainImg .mainImg img').stop().animate({'margin-top':'0'},1500);
			$('.adaptiveIphone').css({left:'45%',opacity:'1'});
			$('.adaptiveIpad').css({left:'-6%',opacity:'1'});
		}); 		
	
	 $('.adaptiveIpad').hover(function(){
			$('.adaptiveIpad .mainImg img').stop().animate({'margin-top':'-565px'},7000);
		},function(){
			$('.adaptiveIpad .mainImg img').stop().animate({'margin-top':'0'},1500);
		}); 
		
	 $('.adaptiveIphone').hover(function(){
			$('.adaptiveIphone .mainImg img').stop().animate({'margin-top':'-1310px'},11000);
		},function(){
			$('.adaptiveIphone .mainImg img').stop().animate({'margin-top':'0'},1500);
		}); 		
		
	/* php hover scroll */
	
	 $('.phpMainImg .mainImg').hover(function(){
			$('.phpIpad').css({left:'-8%',opacity:'0.3'});
		},function(){
			$('.phpIpad').css({left:'-6%',opacity:'1'});
		}); 		
	
	 $('.phpIpad').hover(function(){
			$('.phpIpad .mainImg img').stop().animate({'margin-top':'-565px'},7000);
		},function(){
			$('.phpIpad .mainImg img').stop().animate({'margin-top':'0'},1500);
		}); 	
	
	/* jquery03 hover scroll */
	
	 $('.jQueryMainImg .mainImg').hover(function(){
			$('.jQueryMainImg .mainImg img').stop().animate({'margin-top':'-1443px'},12000);
		},function(){
			$('.jQueryMainImg .mainImg img').stop().animate({'margin-top':'0'},1500);
		}); 	
	
	/* Epilogue */
	
	/* $('.box_skitter_large').skitter();  */
 	$('.box_skitter_large').skitter({dots: true}); 
	/* $('.box_skitter_large').skitter({thumbs: true, label: false}); */
	/* $('.box_skitter_large').skitter({thumbs: false, label: true});  */
/* 	$('.box_skitter_large').skitter({dots: true, preview: true, controls : true});  */
	/* $('.box_skitter_large').skitter({controls : true});  */
	/* $('.box_skitter_large').skitter({mouseOverButton: function(){}});  */
	
	/* 
		controls (기본 기능)
		dots(스태츄 돗트)
		thumbs (썸네일그림) label(설명)
		preview(스태츄 돗트에 있는 미리보기 기능)
	*/
	
	/* browser img.hover */
	$("#contents").each(function(){
		var tg = $(this);
		tg.find(".browser li").stop().fadeTo( 500 , 0.2);
		tg.find(".browser li.on").stop().fadeTo( 500 , 1);	

		tg.find(".browser span").stop().fadeTo( 500 , 0);
		tg.find(".browser span.on").stop().fadeTo( 500 , 1);
		
		tg.find(".browser li").mouseover(function(){			
			tg.find(".browser li").stop().fadeTo( 500 , 0.2).removeClass("on");
			$(this).stop().fadeTo( 500 , 1).addClass("on");	
			tg.find('.browser span').stop().fadeTo( 500 , 0).removeClass("on");	
			$(this).find('> span').stop().fadeTo( 500 , 1).addClass("on");
			
		});
		tg.find(".browser li").mouseleave(function(){			
			tg.find(".browser li").stop().fadeTo( 500 , 0.2).removeClass("on");
			$('.browser01').stop().fadeTo( 500 , 1).addClass("on");	
			tg.find('.browser span').stop().fadeTo( 500 , 0).removeClass("on");	
			$('.browser01 > span').stop().fadeTo( 500 , 1).addClass("on");
		});
		
	});
	
	/* 탭메뉴 */
	$('.tabset').each(function(){
		var tab = $(this).find('.tabs li');
		var content = $(this).find('>div');
			
		tab.on('click mouseover',function(e){
			e.preventDefault();
			var tg = $(this);
			var tc = tg.find('>a');
			tab.find('>a').removeClass('on');	//li전체를 의미 
			tc.addClass('on');
			i = tg.index();
			content.css('display','none');
			content.eq(i).css('display','block');
		});		
	}); 
	
});









































