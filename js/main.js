$(function(){
  $('.header__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500
	});
	
	$('.about__photo').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

	$('.special__slider-wrapper').slick({
    arrows: false,
    dots: true,
    autoplay: true,
		autoplaySpeed: 4500,
		variableWidth: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1325,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	$('.food-menu__box .tab').on('click', function(event) {
		var id = $(this).attr('data-id');
			$('.food-menu__box').find('.tab-item').removeClass('active-tab').hide();
			$('.food-menu__box .tabs').find('.tab').removeClass('active');
			$(this).addClass('active');
			$('#' + id).addClass('active-tab').fadeIn();
			return false;
		});

		$('.feedback__slider').slick({
			arrows: true,
			autoplay: true,
			autoplaySpeed: 2500
		});

		$('.header__burger').on('click', function(){
			$('.header__menu').slideToggle();
		});

		$('.food-menu__burger').on('click', function(){
			$('.food-menu__tabs').slideToggle();
		});

		$('.food-menu__tab').on('click', function(){
			if ( window.innerWidth < 577 ){
				$('.food-menu__tabs').slideToggle();
			};
		});
});

