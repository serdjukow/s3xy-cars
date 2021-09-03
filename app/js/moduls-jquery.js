var $r = jQuery.noConflict();
$r(document).ready(function () {
	$r(document).on('click', '.gallery__card-news, .gallery__card-img', function (event) {
		event.preventDefault();
		var id_post = $r(this).data('id');
		$r.ajax({
			type: 'POST',
			url: '/wp-admin/admin-ajax.php',
			data: {
				'post_id': id_post,
				'action': 'f711_get_post_content'
			}, success: function (result) {
				$r('#newsBox').html(result);
			},
			error: function () {
				alert("error");
			}
		});
	});
	$r(document).on('click', '.modal__close, .modal__overlay', function () {
		$r('#newsBox').empty();
	});

	$r(document).on('click', '#size .column-filter__button', function (event) {
		event.preventDefault();
		$r('.column-filter__button').removeClass('_active');
		$r(this).addClass('_active');
		var id_post = $r(this).data('id'),
			arrayID = $r(this).data('array');
		$r.ajax({
			type: 'POST',
			url: '/wp-admin/admin-ajax.php',
			data: {
				'post_id': id_post,
				'array': arrayID,
				'action': 'sizesForm'
			}, success: function (result) {
				var price = $r($r.parseHTML(result)).filter("#priceBox");
				$r('#price').empty().html(price);
			},
			error: function () {
				alert("error");
			}
		});
	});

	// Accessories Slider


	$r(document).on('click', '.column-filter__card', function (event) {
		event.preventDefault();
		$r('.column-filter__card').removeClass('_active');
		$r(this).addClass('_active');
		var id_post = $r(this).data('id'),
			arrayID = $r(this).data('array');
		$r.ajax({
			type: 'POST',
			url: '/wp-admin/admin-ajax.php',
			data: {
				'post_id': id_post,
				'array': arrayID,
				'action': 'colorForm'
			}, success: function (result) {
				$r('#gallery').empty().html(result);
			},
			error: function () {
				alert("error");
			}
		}).done(function (event) {
			const accessoriesSlider = new Swiper(".accessories-slider", {
				loop: false,
				spaceBetween: 12,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				breakpoints: {
					"@0.00": {
						slidesPerView: 3,
						spaceBetween: 6,
					},
					"@0.75": {
						slidesPerView: 4,
						spaceBetween: 8,
					},
					"@1.00": {
						slidesPerView: 4,
						spaceBetween: 12,
					},
					"@1.50": {
						slidesPerView: 4,
						spaceBetween: 12,
					}
				}
			});
			const accessoriesSlider2 = new Swiper(".accessories-slider-2", {
				loop: false,
				spaceBetween: 10,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				thumbs: {
					swiper: accessoriesSlider,
				},
			});
		});
	});
});