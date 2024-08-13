
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
});
 
// 1 КОНТЕЙНЕР
function animateSlides() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.style.width = '477px';
            slide.style.height = '630px';
        } else {
            slide.style.width = '219px';
            slide.style.height = '630px';
        }
    });

    let currentIndex = 0;

    setInterval(() => {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.style.width = '219px';
                slide.style.height = '630px';
            } else if ((index === (currentIndex + 1) % slides.length)) {
                slide.style.width = '477px';
                slide.style.height = '630px';
            } else {
                slide.style.width = '219px';
                slide.style.height = '630px';
            }
        });

        currentIndex = (currentIndex + 1) % slides.length;
    }, 3000); 
};
animateSlides();

// 2 КОНТЕЙНЕР

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  swiper.slides.each((index, slide) => {
    const bgColor = slide.getAttribute('data-bg-color');
    const text = slide.getAttribute('data-text');
    slide.style.backgroundColor = bgColor;
    slide.textContent = text;
  });

// 3 КОНТЕЙНЕР 
const newSwiper = new Swiper('.swiper.new', {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiper.slides.each((index, slide) => {
    const bgImage = slide.getAttribute('data-bg-image');
    const text = slide.getAttribute('data-text');
    if (bgImage) {
        slide.style.backgroundImage = `url(${bgImage})`;
    }
    slide.textContent = text;
});




// Для услуг
const outerContainerUslugi = document.querySelector('.outer-container:nth-of-type(2)');
const containerUslugi = document.querySelector('.uslugi-container');
const itemsUslugi = document.querySelectorAll('.uslugi');
const prevBtnUslugi = document.getElementById('sl-prev-uslugi');
const nextBtnUslugi = document.getElementById('sl-next-uslugi');
const itemWidthUslugi = itemsUslugi[0].offsetWidth + parseInt(getComputedStyle(containerUslugi).gap);
let currentPositionUslugi = 0;
let canClickNextUslugi = true;

function updateButtonsUslugi() {
    if (currentPositionUslugi === 0) {
        prevBtnUslugi.classList.add('hidden');
        nextBtnUslugi.classList.remove('hidden');
        nextBtnUslugi.classList.remove('disabled');
    } else if (currentPositionUslugi === -(itemsUslugi.length - 1) * itemWidthUslugi) {
        prevBtnUslugi.classList.remove('hidden');
        nextBtnUslugi.classList.add('hidden');
    } else {
        prevBtnUslugi.classList.remove('hidden');
        nextBtnUslugi.classList.remove('hidden');
    }
}

nextBtnUslugi.addEventListener('click', () => {
    if (canClickNextUslugi) {
        canClickNextUslugi = false;
        currentPositionUslugi -= itemWidthUslugi;
        if (currentPositionUslugi < -(itemsUslugi.length - 1) * itemWidthUslugi) {
            currentPositionUslugi = -(itemsUslugi.length - 1) * itemWidthUslugi;
        }
        containerUslugi.style.transform = `translateX(${currentPositionUslugi}px)`;
        updateButtonsUslugi();
        nextBtnUslugi.classList.add('disabled');
    }
});

prevBtnUslugi.addEventListener('click', () => {
    canClickNextUslugi = true;
    currentPositionUslugi += itemWidthUslugi;
    if (currentPositionUslugi > 0) {
        currentPositionUslugi = 0;
    }
    containerUslugi.style.transform = `translateX(${currentPositionUslugi}px)`;
    updateButtonsUslugi();
    nextBtnUslugi.classList.remove('disabled');
});

updateButtonsUslugi();


// ДЛЯ ДОП УСЛУГ

const outerContainerdopUslugi = document.querySelector('.outer-container:nth-of-type(3)');
const containerdopUslugi = document.querySelector('.dopuslugi-container');
const itemsdopUslugi = document.querySelectorAll('.uslugi');
const prevBtndopUslugi = document.getElementById('sl-prev-additional');
const nextBtndopUslugi = document.getElementById('sl-next-additional');
const itemWidthdopUslugi = itemsdopUslugi[0].offsetWidth + parseInt(getComputedStyle(containerdopUslugi).gap);
let currentPositiondopUslugi = 0;
let canClickNextdopUslugi = true;


function updateButtonsdopUslugi() {
    if (currentPositiondopUslugi === 0) {
        prevBtndopUslugi.classList.add('hidden');
        nextBtndopUslugi.classList.remove('hidden');
        nextBtndopUslugi.classList.remove('disabled');
    } else if (currentPositiondopUslugi === -(itemsdopUslugi.length - 1) * itemWidthdopUslugi) {
        prevBtndopUslugi.classList.remove('hidden');
        nextBtndopUslugi.classList.add('hidden');
    } else {
        prevBtndopUslugi.classList.remove('hidden');
        nextBtndopUslugi.classList.remove('hidden');
    }
}

nextBtndopUslugi.addEventListener('click', () => {
    if (canClickNextdopUslugi) {
        canClickNextdopUslugi = false;
        currentPositiondopUslugi -= itemWidthdopUslugi;
        if (currentPositiondopUslugi < -(itemsdopUslugi.length - 1) * itemWidthdopUslugi) {
            currentPositiondopUslugi = -(itemsdopUslugi.length - 1) * itemWidthdopUslugi;
        }
        containerdopUslugi.style.transform = `translateX(${currentPositiondopUslugi}px)`;
        updateButtonsdopUslugi();
        nextBtndopUslugi.classList.add('disabled');
    }
});

prevBtndopUslugi.addEventListener('click', () => {
    canClickNextdopUslugi = true;
    currentPositiondopUslugi += itemWidthdopUslugi;
    if (currentPositiondopUslugi > 0) {
        currentPositiondopUslugi = 0;
    }
    containerdopUslugi.style.transform = `translateX(${currentPositiondopUslugi}px)`;
    updateButtonsdopUslugi();
    nextBtndopUslugi.classList.remove('disabled');
});

updateButtonsdopUslugi();

// 5 КОНТЕЙНЕР 
document.addEventListener("DOMContentLoaded", function() {
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

        // Дополнительные услуги
        const additionalServices = [
            { name: 'Горячий воск', cost: 50 },
            { name: 'Уборка в багажнике', cost: 30 }
        ];

        let additionalServicesHTML = '';
        additionalServices.forEach(service => {
            additionalServicesHTML += `<div>${service.name}</div>`;
            totalCost += service.cost;
        });

        // Отображение выбранного класса автомобиля и услуги
        typeCarDiv.textContent = carClass;
        vidUslDiv.textContent = service;
        dopUslDiv.innerHTML = additionalServicesHTML;

        // Отображение итоговой стоимости с символом рубля
        totalCostSpan.textContent = ' '+totalCost + ' ₽';
        totalCostSpan.classList.add('animated-price');
    });
});

// 6 КОНТЕЙНЕР
const outerContainerVideo = document.querySelector('.outer1-container:nth-of-type(4)');
const containerVideo = document.querySelector('.video-container');
const itemsVideo = document.querySelectorAll('.uslugi');
const prevBtnVideo = document.getElementById('sl-prev-video');
const nextBtnVideo = document.getElementById('sl-next-video');
const itemWidthVideo = itemsVideo[0].offsetWidth + parseInt(getComputedStyle(containerUslugi).gap);
let currentPositionVideo = 0;
let canClickNextVideo = true;

function updateButtonsVideo() {
    if (currentPositionVideo === 0) {
        prevBtnVideo.classList.add('hidden');
        nextBtnVideo.classList.remove('hidden');
        nextBtnVideo.classList.remove('disabled');
    } else if (currentPositionVideo === -(itemsVideo.length - 1) * itemWidthVideo) {
        prevBtnVideo.classList.remove('hidden');
        nextBtnVideo.classList.add('hidden');
    } else {
        prevBtnVideo.classList.remove('hidden');
        nextBtnVideo.classList.remove('hidden');
    }
}

nextBtnVideo.addEventListener('click', () => {
    if (canClickNextVideo) {
        canClickNextVideo = false;
        currentPositionVideo -= itemWidthVideo;
        if (currentPositionVideo < -(itemsVideo.length - 1) * itemWidthVideo) {
            currentPositionVideo = -(itemsVideo.length - 1) * itemWidthVideo;
        }
        containerVideo.style.transform = `translateX(${currentPositionVideo}px)`;
        updateButtonsVideo();
        nextBtnVideo.classList.add('disabled');
    }
});

prevBtnVideo.addEventListener('click', () => {
    canClickNextVideo = true;
    currentPositionVideo += itemWidthVideo;
    if (currentPositionVideo > 0) {
        currentPositionVideo = 0;
    }
    containerVideo.style.transform = `translateX(${currentPositionVideo}px)`;
    updateButtonsVideo();
    nextBtnVideo.classList.remove('disabled');
});

updateButtonsVideo();