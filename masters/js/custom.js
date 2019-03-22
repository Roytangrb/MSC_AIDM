
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-96017296-5', 'auto');
  ga('send', 'pageview');



		function SwitchLang2Eng() {
			if(window.location.href.indexOf("/zh-hant/") != -1)
				window.location.href = window.location.href.replace("/zh-hant/", "/en/");
			else if(window.location.href.indexOf("/zh-hans/") != -1)
				window.location.href = window.location.href.replace("/zh-hans/", "/en/");
		}
		function SwitchLang2HK() {
			if(window.location.href.indexOf("/en/") != -1)
				window.location.href = window.location.href.replace("/en/", "/zh-hant/");
			else if(window.location.href.indexOf("/zh-hans/") != -1)
				window.location.href = window.location.href.replace("/zh-hans/", "/zh-hant/");
		}
		function SwitchLang2CN() {
			if(window.location.href.indexOf("/en/") != -1)
				window.location.href = window.location.href.replace("/en/", "/zh-hans/");
			else if(window.location.href.indexOf("/zh-hant/") != -1)
				window.location.href = window.location.href.replace("/zh-hant/", "/zh-hans/");
		}

	

/* ---------------------------------------------- /*
 * About Us / Hover Box
/* ---------------------------------------------- */
$(".hover-box_macomm").hover(function(){
$('.aboutus-prog-title_macomm').toggleClass('hide');
});
$(".hover-box_maijs").hover(function(){
$('.aboutus-prog-title_maijs').toggleClass('hide');
});
$(".hover-box_maftnm").hover(function(){
$('.aboutus-prog-title_maftnm').toggleClass('hide');
});
$(".hover-box_mmgt").hover(function(){
$('.aboutus-prog-title_mmgt').toggleClass('hide');
});	
$(".hover-box_mmai").hover(function(){
$('.aboutus-prog-title_mmai').toggleClass('hide');
});		
		 
	$(document).ready(function() {

/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */
	
	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	
		//var session = $('#section1').offset().top;
	});
	

	

		/* ---------------------------------------------- /*
		 * MENU X - Close icon
		/* ---------------------------------------------- */

		  var i = true;
		  
		  var floater = false;
		  
		  $("body").delegate('.menu-toggle', 'click', function(){
			   
			   var top = $(window).scrollTop();
				var left = $(window).scrollLeft()
				if(!floater){
					//$('body').css('overflow', 'hidden');	
					//$('body').css('position', 'fixed');	
					//$('body').css('height', '100%');						
					$(window).scroll(function(){
					//$(this).scrollTop(top).scrollLeft(left);
				  });
				} else {
					//$('body').css('overflow', 'auto');
					//$('body').css('position', 'static');	
					//$('body').css('height', 'auto');	
					//$(window).unbind('scroll');			  
				}
				floater = !floater;
				
			   //if ($(".navbar").offset().top < 50) {$(".navbar-custom").toggleClass('off-color');}
			   $(".navbar-custom").toggleClass('off');
			   if (document.getElementsByTagName("body")[0].id!="page-mmai"&&document.getElementsByTagName("body")[0].id!="page-macomm"&&document.getElementsByTagName("body")[0].id!="page-maftnm"&&document.getElementsByTagName("body")[0].id!="page-maijs"&&document.getElementsByTagName("body")[0].id!="page-mmgt"){$(".navbar-custom").toggleClass('off-color');}
			   $('.menu-toggle').toggleClass('open');
			if (i) {
				/*
			  setTimeout(function(){
				$(this).find("g").addClass('gotcha')
				line_first.css({
				  'transform':'rotate(45deg)',
				  'left':'50%',
				  'top':'50%',
				  'width':'25px', //size
				  'transform-origin': 'left bottom'
				})
				line_third.css({
				  'transform':'rotate(-45deg) translate(-50%,-50%)',
				  'left':'50%',
				  'top':'50%'
				})
				line_second.css('opacity','0')
			  },005)
			  */
			  
			  $(".navbar-nav .icon_social").css("display", "none");
			  $(".icon_lang").css("display", "none");
			  //$(".navbar-header").css("display", "none");
			  $("#logo-bu").css("display", "none");
			  $("#logo-sc").css("display", "none");
			  
			  $("#logo-mmai").css("display", "none");
			  $("#logo-mmgt").css("display", "none");
			  $("#logo-macomm").css("display", "none");
			  $("#logo-maftnm").css("display", "none");
			  $("#logo-maijs").css("display", "none");
			  
			  $(".nav .icon_langAll").delay(300).fadeIn('slow');
			  
			} else {
				 $(".navbar-nav .icon_social").delay(300).fadeIn('slow');
				 $(".icon_lang").delay(300).fadeIn('slow');
				 $("#logo-bu").delay(300).fadeIn('slow');
				 $("#logo-sc").delay(300).fadeIn('slow');
				 //$(".navbar-header").delay(300).fadeIn('slow');
				 $(".nav .icon_langAll").css("display", "none");
				 /*
			  setTimeout(function(){
				line_first.attr('style', '');
				line_third.attr('style', '');
				line_second.css('opacity','1')
			  },005)
			  */
			}
			i=!i; 
		  });
	
		/* ---------------------------------------------- /*
		 * MENU
		/* ---------------------------------------------- */

		  $('.menu-toggle').on('click', function(e) {
			e.preventDefault();
			$('.menu').toggleClass('off');
			
		  });

		  $('.navicon').on('click', function() {
			$(this).toggleClass('open');
		  });

		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){
           
			var anchor = $(this);
			$('html, body').animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
		});
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});
		/* ---------------------------------------------- /*
	 * jQuery to collapse the navbar on scroll
	/* ---------------------------------------------- */
	$(window).scroll(function() {
		
		if(floater==false){ 
		if ($(window).scrollTop() > 0) {			
			$(".navbar-fixed-top").addClass("top-nav-collapse");
			$('#page-mmai .top-nav-collapse, #page-mmgt .top-nav-collapse, #page-maijs .top-nav-collapse, #page-macomm .top-nav-collapse, #page-maftnm .top-nav-collapse').addClass('off-color');
			
			$('#page-mmai .menu-toggle').addClass('mmai');
			$('#page-mmai .nav.navbar-nav .icon_social, #page-mmai .icon_lang a').addClass('mmai');
			
			$('#page-mmgt .menu-toggle').addClass('mmgt');
			$('#page-mmgt .nav.navbar-nav .icon_social, #page-mmgt .icon_lang a').addClass('mmgt');
			
			$('#page-macomm .menu-toggle').addClass('macomm');
			$('#page-macomm .navbar-nav .icon_social, #page-macomm .icon_lang a').addClass('macomm');
			
			$('#page-maftnm .menu-toggle').addClass('maftnm');
			$('#page-maftnm .navbar-nav .icon_social, #page-maftnm .icon_lang a').addClass('maftnm');
			
			$('#page-maijs .menu-toggle').addClass('maijs');
			$('#page-maijs .navbar-nav .icon_social, #page-maijs .icon_lang a').addClass('maijs');
			
			 $("#page-mmai .navbar-header").empty();
			 $("#page-mmai .navbar-header").append('<div id="logo-mmai">MSc IN AI and Digital Media</div>');
			
			 $("#page-mmai .navbar-header.zh-hans").empty();
			 $("#page-mmai .navbar-header.zh-hans").append('<div id="logo-mmai">人工智能與數字媒體科学硕士</div>');
			
			 $("#page-mmai .navbar-header.zh-hant").empty();
			 $("#page-mmai .navbar-header.zh-hant").append('<div id="logo-mmai">人工智能與數字媒體科学硕士</div>');

			 $("#page-mmgt .navbar-header").empty();
			 $("#page-mmgt .navbar-header").append('<div id="logo-mmgt">MSocSc IN MEDIA MANAGEMENT</div>');
			 
			 $("#page-mmgt .navbar-header.zh-hans").empty();
			 $("#page-mmgt .navbar-header.zh-hans").append('<div id="logo-mmgt">传媒管理社会科学硕士</div>');
			 
			 $("#page-mmgt .navbar-header.zh-hant").empty();
			 $("#page-mmgt .navbar-header.zh-hant").append('<div id="logo-mmgt">傳媒管理社會科學碩士</div>');

			 $("#page-macomm .navbar-header").empty();
			 $("#page-macomm .navbar-header").append('<div id="logo-macomm">MA IN COMMUNICATION</div>');
			 
			 $("#page-macomm .navbar-header.zh-hans").empty();
			 $("#page-macomm .navbar-header.zh-hans").append('<div id="logo-macomm">传理学文学硕士</div>');
			 
			 $("#page-macomm .navbar-header.zh-hant").empty();
			 $("#page-macomm .navbar-header.zh-hant").append('<div id="logo-macomm">傳理學文學碩士</div>');

			 $("#page-maftnm .navbar-header").empty();
			 $("#page-maftnm .navbar-header").append('<div id="logo-maftnm">MA IN PRODUCING FOR FILM,TELEVISION& NEW MEDIA</div>');
			 
			 $("#page-maftnm .navbar-header.zh-hans").empty();
			 $("#page-maftnm .navbar-header.zh-hans").append('<div id="logo-maftnm">影视与新媒体制片管理文学硕士</div>');
			 
			 $("#page-maftnm .navbar-header.zh-hant").empty();
			 $("#page-maftnm .navbar-header.zh-hant").append('<div id="logo-maftnm">影視與新媒體製片管理文學碩士</div>');

			
			 $("#page-maijs .navbar-header").empty();
			 $("#page-maijs .navbar-header").append('<div id="logo-maijs">MA IN INTERNATIONAL JOURNALISM STUDIES</div>');
			 
			 $("#page-maijs .navbar-header.zh-hans").empty();
			 $("#page-maijs .navbar-header.zh-hans").append('<div id="logo-maijs">国际新闻文学硕士</div>');
			 
			 $("#page-maijs .navbar-header.zh-hant").empty();
			 $("#page-maijs .navbar-header.zh-hant").append('<div id="logo-maijs">國際新聞文學碩士課程</div>');
			
			//$('#page-maijs .navbar-header').css({'display':'none'});
		} else {
			$('#page-mmai .top-nav-collapse, #page-mmgt .top-nav-collapse, #page-maijs .top-nav-collapse, #page-macomm .top-nav-collapse, #page-maftnm .top-nav-collapse').removeClass('off-color');
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
			/*
			$('.menu-toggle').css({'background-image':'url(./images/button_menu.svg)'});
			$('.navbar-nav .icon_social').css({'background-image':'url(./images/icon_social.svg)'});
			*/
			$('.menu-toggle').removeClass('mmai');
			$('.navbar-nav .icon_social, #page-mmai .icon_lang a').removeClass('mmai');
			$('.menu-toggle').removeClass('mmgt');
			$('.navbar-nav .icon_social, #page-mmgt .icon_lang a').removeClass('mmgt');
			$('.menu-toggle').removeClass('macomm');
			$('.navbar-nav .icon_social, #page-macomm .icon_lang a').removeClass('macomm');
			$('.menu-toggle').removeClass('maftnm');
			$('.navbar-nav .icon_social, #page-maftnm .icon_lang a').removeClass('maftnm');
			$('.menu-toggle').removeClass('maijs');
			$('.navbar-nav .icon_social, #page-maijs .icon_lang a').removeClass('maijs');
			
			$(".navbar-header").empty();
			$(".navbar-header").append('<a href="http://hkbu.edu.hk" target="_blank" title="HKBU"><div id="logo-bu"></div></a>							<a href="#" title="School of Communication"><div id="logo-sc"></div></a>	');
		}
		}
	});

	});
	
	




