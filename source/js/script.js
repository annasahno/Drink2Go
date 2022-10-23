const mainNavigation = document.querySelector(".main-nav");
const navigationToggleButton = document.querySelector(".main-nav__toggle");
const jsMap = document.querySelector(".map__js");
const imageMap = document.querySelector(".map__image");

mainNavigation.classList.remove("main-nav--nojs");
jsMap.classList.remove("map__js--nojs");
imageMap.classList.add("map__image--js");

navigationToggleButton.addEventListener("click", function () {
  if (mainNavigation.classList.contains("main-nav--closed")) {
    mainNavigation.classList.remove("main-nav--closed");
    mainNavigation.classList.add("main-nav--opened");
  } else {
    mainNavigation.classList.add("main-nav--closed");
    mainNavigation.classList.remove("main-nav--opened");
  }
});


const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const map = L.map('map', {zoomControl:false})
  .setView({
    lat: 59.968380,
    lng: 30.317402,
  }, 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
  .addTo(map);

const pinIcon = L.icon({
    iconUrl: '../img/icons/pin.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 50],
});

const marker = L.marker(
        {
            lat: 59.96831,
            lng: 30.31748,
        },
        {
            icon: pinIcon,
        },
    );

marker.addTo(map);
