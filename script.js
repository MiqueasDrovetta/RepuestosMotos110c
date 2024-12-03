
// Swiper.js Configuration for Hero Carousel
const heroSwiper = new Swiper('.hero-section .swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Offers Swiper Configuration
const offersSwiper = new Swiper('#offers .swiper-container', {
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Auto-update Prices
document.addEventListener('DOMContentLoaded', () => {
    const productPrices = document.querySelectorAll('.products-section .product-card span');

    function fetchPrices() {
        // Simulated API call (replace this with actual scraping logic)
        return Promise.resolve({
            ARS: ['1500', '3000', '25000', '21500', '1800'],
            USD: ['10', '20', '15', '25', '12'],
            EUR: ['9', '18', '13', '22', '10'],
        });
    }

    fetchPrices().then((prices) => {
        productPrices.forEach((priceElement, index) => {
            const currency = 'ARS'; // Default currency
            priceElement.textContent = `${currency} ${prices[currency][index]}`;
        });
    });
});