import { Swiper, Parallax, Autoplay, EffectFade, Mousewheel, Navigation, Pagination, Scrollbar, Controller, Thumbs } from 'swiper'
Swiper.use([Parallax, Autoplay, EffectFade, Mousewheel, Navigation, Pagination, Scrollbar, Controller, Thumbs])

import MicroModal from 'micromodal'
import $ from 'jquery'
window.jQuery = $

document.addEventListener('DOMContentLoaded', () => {
	const initModal = () => {
		MicroModal.init({
			openTrigger: 'data-micromodal-open',
			disableScroll: true,
			disableFocus: true,
			awaitOpenAnimation: true,
			awaitCloseAnimation: true,
		})
	}
	initModal()

	// Index Slider
	const swiperTop = new Swiper('.index-slider__container', {
		direction: 'vertical',
		autoplay: {
			delay: 1500,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		autoplay: false,
		allowTouchMove: false,
		waitForTransition: true,
		loop: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		speed: 600,
		parallax: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	// Accessories Slider
	const accessoriesSlider = new Swiper('.accessories-slider', {
		loop: true,
		spaceBetween: 12,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		breakpoints: {
			'@0.00': {
				slidesPerView: 3,
				spaceBetween: 6,
			},
			'@0.75': {
				slidesPerView: 4,
				spaceBetween: 8,
			},
			'@1.00': {
				slidesPerView: 4,
				spaceBetween: 12,
			},
			'@1.50': {
				slidesPerView: 4,
				spaceBetween: 12,
			},
		},
		on: {
			init: function () {},
			imagesReady: function () {},
		},
	})
	const accessoriesSlider2 = new Swiper('.accessories-slider-2', {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: accessoriesSlider,
		},
	})

	// configuratorSlider
	const configuratorSlider = new Swiper('.configurator-slider', {
		loop: true,
		spaceBetween: 20,
		slidesPerView: 1,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			'@0.00': {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			'@1.50': {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
	})

	const menuButton = document.querySelector('#nav-icon')
	const navigationTop = document.querySelector('.navigation')
	const body = document.querySelector('body')
	const bodyOverlay = document.querySelector('.body-overlay')

	document.addEventListener('click', event => {
		if (event.target.closest('.menu-item') && window.innerWidth < 1199.98) {
			toggleNavActive()
		}
		if (event.target.closest('#nav-icon') && window.innerWidth < 1199.98) {
			toggleNavActive()
		}
		if (event.target.closest('.body-overlay' && window.innerWidth < 1199.98)) {
			toggleNavActive()
		}
		else if (window.innerWidth > 1199.98) {
			bodyOverlay.classList.remove('_active')
		}
	})

	const toggleNavActive = () => {
		menuButton.classList.toggle('_active')
		navigationTop.classList.toggle('_active')
		body.classList.toggle('_lock')
		bodyOverlay.classList.toggle('_active')
	}


	const configurator = document.querySelector('.configurator')
	const configuratorButton = document.querySelector('#configurator-button')
	const configuratorButtonClose = document.querySelector('#configurator-button-close')

	if (configuratorButton) {
		configuratorButton.addEventListener('click', () => {
			configurator.classList.add('_active')
		})
	}

	if (configuratorButtonClose) {
		configuratorButtonClose.addEventListener('click', () => {
			if (configurator.classList.contains('_active')) {
				configurator.classList.remove('_active')
			}
		})
	}

	// padding-right для ссылок на IOS
	const user = detect.parse(navigator.userAgent)
	const headerTopContactLinks = document.querySelector('.header-top__contact-links')
	if (window.innerWidth > 1199.98) {
		if (user.os.family === 'iOS' && document.body.offsetHeight > window.innerHeight) {
			headerTopContactLinks.style.paddingRight = 17 + 'px'
		}
	}
})
