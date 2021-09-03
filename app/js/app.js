import { Swiper, Parallax, Autoplay, EffectFade, Mousewheel, Navigation, Pagination, Scrollbar, Controller, Thumbs } from 'swiper'
Swiper.use([Parallax, Autoplay, EffectFade, Mousewheel, Navigation, Pagination, Scrollbar, Controller, Thumbs])

import MicroModal from 'micromodal';
import $ from 'jquery'
window.jQuery = $


document.addEventListener('DOMContentLoaded', () => {

	const initModal = () => {
		MicroModal.init({
			openTrigger: 'data-micromodal-open',
			disableScroll: true,
			disableFocus: true,
			awaitOpenAnimation: true,
			awaitCloseAnimation: true
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
		}
	})


	// Accessories Slider
	const accessoriesSlider = new Swiper(".accessories-slider", {
		loop: true,
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
		},
		on: {
			init: function () {

			},
			imagesReady: function () {

			}
		}
	});
	const accessoriesSlider2 = new Swiper(".accessories-slider-2", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: accessoriesSlider,
		},
	});

	const menuButton = document.querySelector('#nav-icon')
	const navigationTop = document.querySelector('.navigation')
	const body = document.querySelector('body')
	const bodyOverlay = document.querySelector('.body-overlay')

	const toggleNavActive = () => {
		menuButton.classList.toggle('_active')
		navigationTop.classList.toggle('_active')
		body.classList.toggle('_lock')
		bodyOverlay.classList.toggle('_active')
	}
	menuButton.addEventListener('click', () => {
		toggleNavActive()
	})

	bodyOverlay.addEventListener('click', () => {
		toggleNavActive()
	})
})
