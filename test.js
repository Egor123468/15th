
document.addEventListener('DOMContentLoaded', function() {
    
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.querySelector('a').getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    window.addEventListener('scroll', function() {
        const navElement = document.getElementById('nav_text');
        if (window.scrollY > 0) {
            navElement.textContent = 'О компании';
        } else {
            navElement.textContent = 'О нас';
        }
    });

    document.getElementById('menuToggle').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    });

    
// 1 КОНТЕЙНЕР
function animateSlides() {
    const slides = document.querySelectorAll('.slide');
    
    let currentIndex = 0;

    // Функция для обновления размеров слайдов
    function updateSlides(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.width = '477px';
                slide.style.height = '630px';
            } else {
                slide.style.width = '219px';
                slide.style.height = '630px';
            }
        });
    }
    updateSlides(currentIndex);

    // Автоматическая смена слайдов каждые 3 секунды
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides(currentIndex);
    }, 3000); 

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentIndex = index;
            updateSlides(currentIndex);
        });
    });
}

animateSlides();
    // Инициализация Swiper для всех контейнеров
    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        centeredSlides: false,
        autoHeight: true,
        spaceBetween: 24,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
// 3 Контейнер
const action3Container = document.querySelector('#action3');
const slidesInAction3 = action3Container.querySelectorAll('.swiper-slide');
slidesInAction3.forEach(slide => {
    slide.style.height = '300px';
});
// 4 Контейнер
const action4Container = document.querySelector('#action4');
const slidesInAction4 = action4Container.querySelectorAll('.swiper-slide');
slidesInAction4.forEach(slide => {
    slide.style.height = '300px';
});
// 6 Контейнер
const action6Container = document.querySelector('#action6');
const slidesInAction6 = action6Container.querySelectorAll('.swiper-slide');
slidesInAction6.forEach(slide => {
    slide.style.height = '537px';
});

    // Ваш код для калькулятора цен (5 контейнер)
    const calculateButton = document.getElementById('calculateButton');
    const typeCarDiv = document.querySelector('.type-car');
    const vidUslDiv = document.querySelector('.vid-usl');
    const dopUslDiv = document.querySelector('.dop-usl');
    const totalCostSpan = document.getElementById('totalCost');

    calculateButton.addEventListener('click', function() {
        const carClass = document.getElementById('carClass').value;
        const service = document.getElementById('service').value;

        let totalCost = 0;

        if (carClass === 'Легковой') {
            totalCost += 300;
        } else if (carClass === 'Кроссовер') {
            totalCost += 400;
        } else if (carClass === 'Внедорожник') {
            totalCost += 600;
        }

        if (service === 'Полная мойка') {
            totalCost += 400;
        } else if (service === 'Чистка ковров') {
            totalCost += 40;
        } else if (service === 'Полировка машины') {
            totalCost += 50;
        }

        // Проверка выбранных дополнительных услуг
        const additionalServices = [];
        if (document.querySelector('.crest img').classList.contains('selected')) {
            additionalServices.push({ name: 'Горячий воск', cost: 50 });
        }
        if (document.querySelector('.crest-one img').classList.contains('selected')) {
            additionalServices.push({ name: 'Уборка в багажнике', cost: 30 });
        }

        let additionalServicesHTML = '';
        additionalServices.forEach(service => {
            additionalServicesHTML += `<div>${service.name}</div>`;
            totalCost += service.cost;
        });

        
        typeCarDiv.textContent = carClass;
        vidUslDiv.textContent = service;
        dopUslDiv.innerHTML = additionalServicesHTML;

        
        totalCostSpan.textContent = totalCost + ' ₽';
        totalCostSpan.classList.add('animated-price');
    });

    
});

// 6 КОНТЕЙНЕР
// const outerContainerVideo = document.querySelector('.outer1-container:nth-of-type(4)');
// const containerVideo = document.querySelector('.video-container');
// const itemsVideo = document.querySelectorAll('.uslugi');
// const prevBtnVideo = document.getElementById('sl-prev-video');
// const nextBtnVideo = document.getElementById('sl-next-video');
// const itemWidthVideo = itemsVideo[0].offsetWidth + parseInt(getComputedStyle(containerUslugi).gap);
// let currentPositionVideo = 0;
// let canClickNextVideo = true;

// function updateButtonsVideo() {
//     if (currentPositionVideo === 0) {
//         prevBtnVideo.classList.add('hidden');
//         nextBtnVideo.classList.remove('hidden');
//         nextBtnVideo.classList.remove('disabled');
//     } else if (currentPositionVideo === -(itemsVideo.length - 1) * itemWidthVideo) {
//         prevBtnVideo.classList.remove('hidden');
//         nextBtnVideo.classList.add('hidden');
//     } else {
//         prevBtnVideo.classList.remove('hidden');
//         nextBtnVideo.classList.remove('hidden');
//     }
// }

// nextBtnVideo.addEventListener('click', () => {
//     if (canClickNextVideo) {
//         canClickNextVideo = false;
//         currentPositionVideo -= itemWidthVideo;
//         if (currentPositionVideo < -(itemsVideo.length - 1) * itemWidthVideo) {
//             currentPositionVideo = -(itemsVideo.length - 1) * itemWidthVideo;
//         }
//         containerVideo.style.transform = `translateX(${currentPositionVideo}px)`;
//         updateButtonsVideo();
//         nextBtnVideo.classList.add('disabled');
//     }
// });

// prevBtnVideo.addEventListener('click', () => {
//     canClickNextVideo = true;
//     currentPositionVideo += itemWidthVideo;
//     if (currentPositionVideo > 0) {
//         currentPositionVideo = 0;
//     }
//     containerVideo.style.transform = `translateX(${currentPositionVideo}px)`;
//     updateButtonsVideo();
//     nextBtnVideo.classList.remove('disabled');
// });

// updateButtonsVideo();

