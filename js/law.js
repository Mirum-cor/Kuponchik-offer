const reviewsSliderCheckers = makeArrayFromNodelist(
  document.querySelector('.reviews-pick-up').children);
const reviewsSliderCheckersMobile = makeArrayFromNodelist(
  document.querySelector('.mobile-reviews-pick-up').children);

const sliderSection = document.querySelector('#slider');
const whatWeDoDiv = document.querySelector('.what-we-do');
const reviewsSlider = document.querySelector('.reviews-slider');
const reviewsPage1 = document.querySelector('.page-1-reviews');
const reviewsPage2 = document.querySelector('.page-2-reviews');
const reviewsPage3 = document.querySelector('.page-3-reviews');
const reviewsArray1 = makeArrayFromNodelist(
  document.querySelector('.page-1-reviews').children);
const reviewsArray2 = makeArrayFromNodelist(
  document.querySelector('.page-2-reviews').children);
const reviewsArray3 = makeArrayFromNodelist(
  document.querySelector('.page-3-reviews').children);

const prevCompany = document.querySelector('.companies-arrows')
  .firstElementChild;
const nextCompany = document.querySelector('.companies-arrows')
  .lastElementChild;
const companiesDivs = makeArrayFromNodelist(
  document.querySelectorAll('.company'));

const imgArea = document.querySelector('.hidden-advertising').lastElementChild
  .lastElementChild;
const openPopUpBtns = makeArrayFromNodelist(
  document.querySelectorAll('.open-pop-up'));
const servicesDiv = document.querySelector('.services');
const popUpDivs = makeArrayFromNodelist(
  document.querySelector('.services').firstElementChild.children);
const privatePageBtns = makeArrayFromNodelist(
  document.querySelector('.hidden-advertising').lastElementChild
    .lastElementChild.previousElementSibling.children);
const socialsPromotionBtns = makeArrayFromNodelist(
  document.querySelector('.socials-promotion').lastElementChild.lastElementChild
    .previousElementSibling.children);
const socialsPromotionImgs = makeArrayFromNodelist(
  document.querySelector('.socials-promotion').lastElementChild.lastElementChild
    .children);
const mailingHeightArray = [927, 805.4, 604.8, 621.6, 550.4];
const hiddenAdvertisingHeightArray = [776.8, 592.2, 550.6, 570.6, 531.6];
const bannerAdvertisingHeightArray = [679.2, 489.812, 448.212, 452.5, 428.312];
const landingHeightArray = [819.2, 590.95, 549.35, 547.537, 513.963];
const sitePromotionHeightArray = [651.2, 449.812, 408.212, 392.5, 408.312];
const socialPromotionHeightArray = [792.8, 723.2, 681.6, 681.6, 721.6];
const searchingPromotionHeightArray = [712.2, 509.5, 467.9, 447.7, 416.612];
const raisingAnnouncementHeightArray = [638.2, 458.513, 416.913, 400.538, 375.337];
let currentPopUpHeight = 0;

const addServicesBtn = document.querySelector('.additional').firstElementChild;
const addServicesDiv = document.querySelector('.add-services');
let addServicesShown = false;
const discountBtn = document.querySelector('.discount').firstElementChild;
const discountDiv = document.querySelector('.discount-services');
let discountShown = false;

const telInput = document.querySelector('#tel');
const phoneUsBtn = document.querySelector('.phone-us');
const getCallBtn = document.querySelector('.input-area').firstElementChild
  .nextElementSibling;
const getCallSection = document.querySelector('.get-call');

const companyInput = document.querySelector('#company');
const unpInput = document.querySelector('#unp');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const registerBtn = document.querySelector('#register');
const needToFillDivs = makeArrayFromNodelist(
  document.querySelectorAll('.need-to-fill'));

const toTopBtn = document.querySelector('.go-to-top');
const loginBtns = makeArrayFromNodelist(
  document.querySelectorAll('.login-btn'));
const closeBtn = makeArrayFromNodelist(
  document.querySelectorAll('.close-popup'));

const loginAndPasswordRecoverySection = document.querySelector(
  '.login-and-password-recovery');
const passwordRecoveryForm = document.querySelector('.password-recovery');
const recoveryEmailInput = document.querySelector('#recovery-email');
const recoveryEmailBtn = recoveryEmailInput.nextElementSibling;
const passwordWrongDataP = recoveryEmailInput.previousElementSibling;

const forgotPasswordBtn = document.querySelector('#forgot-password');
const loginForm = document.querySelector('.login');
const loginEmailInput = document.querySelector('#login-email');
const loginPasswordInput = document.querySelector('#password');
const loginWrongDataP = document.querySelector('.login-area').firstElementChild
  .nextElementSibling;
const formLoginBtn = document.querySelector('.login-area').lastElementChild
  .lastElementChild.previousElementSibling;
const goToRegistrateFromLoginBtn = document.querySelector('.login-area')
  .lastElementChild.lastElementChild;

const menuBtn = document.querySelector('#menu-toggle');
const mobileMenuLinks = makeArrayFromNodelist(
  document.querySelectorAll('.menu-item'));

const tariffBtns = makeArrayFromNodelist(
  document.querySelector('.tariff-btns').children);
const tariffs = [
  document.querySelector('.light-tariff'),
  document.querySelector('.standart-tariff'),
  document.querySelector('.premium-tariff'),
];
const addServices = [
  document.querySelector('.light-additional'),
  document.querySelector('.standart-additional'),
  document.querySelector('.premium-additional'),
];
const discountServices = [
  document.querySelector('.light-discount'),
  document.querySelector('.standart-discount'),
  document.querySelector('.premium-discount'),
];
let currentTariff = 0;

const forms = document.forms;

let intervalCounter = 0;
let right = 0;
let deltaX = 0;
let lastCompanyElem = 0;

let startPositionReviewsSlider = 0;
let deltaMove = 0;

let timerId = '';
let animationDelay = 0;

if (screen.width > 1366 || (screen.width > 960 && screen.width <= 1020)) {
  deltaMove = 102;
} else if (screen.width <= 1366 && screen.width > 1020) {
  deltaMove = 105;
} else if (screen.width <= 960) {
  deltaMove = 300;
}

reviewsPage1.style.left = '0%';
reviewsPage2.style.left = deltaMove + '%';
reviewsPage3.style.left = deltaMove * 2 + '%';

for (let i = 0; i < 9; i++) {
  reviewsSliderCheckersMobile[i].addEventListener('click', function () {
    changeColorCheckers(reviewsSliderCheckersMobile, i);
    switch (i) {
      case 0:
        setReviewMobile(0);
        break;
      case 1:
        setReviewMobile(-100);
        break;
      case 2:
        setReviewMobile(-200);
        break;
      case 3:
        setReviewMobile(-300);
        break;
      case 4:
        setReviewMobile(-400);
        break;
      case 5:
        setReviewMobile(-500);
        break;
      case 6:
        setReviewMobile(-600);
        break;
      case 7:
        setReviewMobile(-700);
        break;
      case 8:
        setReviewMobile(-800);
        break;
    }
  });
}

if (screen.width > 1020) {
  deltaX = 200;
  lastCompanyElem = 1000;
} else if (screen.width <= 1020) {
  deltaX = 150;
  lastCompanyElem = 750;
}
right = -deltaX;

for (let i = 6; i >= 0; i--) {
  companiesDivs[i].style.opacity = '1';
  companiesDivs[i].style.right = right + 'px';
  right += deltaX;
}
companiesDivs[6].style.opacity = '0';
companiesDivs[6].style.zIndex = '-1';
right = 0;

$(function () {
  $('#unp').mask('*********', { placeholder: '*' });
});

$(function () {
  $('#phone').mask('+375 (99) 999 99 99', { placeholder: '*' });
});

$(function () {
  $('#tel').mask('+375 (99) 999 99 99', { placeholder: '*' });
});

menuBtn.addEventListener('click', function () {
  if (menuBtn.checked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

mobileMenuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    document.body.style.overflow = 'auto';
    menuBtn.checked = false;
  });
});

loginBtns.forEach(function (logBtn) {
  logBtn.addEventListener('click', function () {
    loginAndPasswordRecoverySection.style.visibility = 'visible';
    loginAndPasswordRecoverySection.style.height = '1000vh';
    loginAndPasswordRecoverySection.style.zIndex = '5';
    loginAndPasswordRecoverySection.style.opacity = '1';
    showLoginForm();
    document.body.style.overflow = 'hidden';
  });
});

formLoginBtn.addEventListener('click', function (event) {
  event.preventDefault();
  emailLoginValidation();
  passwordLoginValidation();
  const email = loginEmailInput.value;
  let emailCondition = true;
  if (email) {
    const regexp = /(\w+\.)+\w+/g;
    emailCondition = !email.match(regexp);
  }
  if (!emailCondition && loginPasswordInput.value !== '') {
    loginWrongDataP.style.opacity = '0';
    forms[0].reset();
    closeLoginForm();
  }
});

loginEmailInput.addEventListener('blur', function () {
  if (loginEmailInput.value !== '') {
    emailLoginValidation();
  }
});

loginPasswordInput.addEventListener('blur', function () {
  if (loginPasswordInput.value !== '') {
    passwordLoginValidation();
  }
});

forgotPasswordBtn.addEventListener('click', function () {
  hideLoginForm();
  passwordRecoveryForm.style.visibility = 'visible';
  passwordRecoveryForm.style.height = '370px';
  passwordRecoveryForm.style.zIndex = '5';
  passwordRecoveryForm.style.opacity = '1';
});

loginAndPasswordRecoverySection.addEventListener('click', function (event) {
  if (event.target.classList.contains('login-and-password-recovery')) {
    if (passwordRecoveryForm.style.opacity === '1') {
      closePasswordRecoveryForm();
    }
    closeLoginForm();
  }
});

goToRegistrateFromLoginBtn.addEventListener('click', function () {
  closeLoginForm();
  window.location.href = '#registration';
});

recoveryEmailInput.addEventListener('blur', function () {
  if (recoveryEmailInput.value !== '') {
    recoveryEmailValidation();
  }
});

recoveryEmailBtn.addEventListener('click', function (event) {
  event.preventDefault();
  recoveryEmailValidation();
  const email = recoveryEmailInput.value;
  let emailCondition = true;
  if (email) {
    const regexp = /(\w+\.)+\w+/g;
    emailCondition = !email.match(regexp);
  }
  if (!emailCondition && recoveryEmailInput.value !== '') {
    loginWrongDataP.style.opacity = '0';
    forms[1].reset();
    forms[1].style.opacity = '0';
    forms[1].style.visibility = 'hidden';
    forms[1].style.height = '0';
    forms[1].nextElementSibling.style.opacity = '1';
    forms[1].nextElementSibling.style.visibility = 'visible';
    forms[1].nextElementSibling.style.height = 'auto';
  }
});

closeBtn[0].addEventListener('click', function () {
  closeLoginForm();
});

closeBtn[1].addEventListener('click', function () {
  closePasswordRecoveryForm();
  closeLoginForm();
});

closeBtn[2].addEventListener('click', function () {
  closePopUps();
});

closeBtn[3].addEventListener('click', function () {
  closePopUps();
});

closeBtn[4].addEventListener('click', function () {
  closePopUps();
});

closeBtn[5].addEventListener('click', function () {
  closePopUps();
});

closeBtn[6].addEventListener('click', function () {
  closePopUps();
});

closeBtn[7].addEventListener('click', function () {
  closePopUps();
});

closeBtn[8].addEventListener('click', function () {
  closePopUps();
});

closeBtn[9].addEventListener('click', function () {
  closePopUps();
});

closeBtn[10].addEventListener('click', function () {
  closeGetCallPopUp();
});

prevCompany.addEventListener('click', function () {
  showPreviousCompany();
});

prevCompany.addEventListener('touchstart', function () {
  prevCompany.style.background = 'url(../img/icon/arrow-left-hover.svg) no-repeat';
  prevCompany.style.backgroundSize = '23px';
  setTimeout(() => {
    prevCompany.style.background = 'url(../img/icon/arrow-left.svg) no-repeat';
    prevCompany.style.backgroundSize = '23px';
  }, 300);
});

nextCompany.addEventListener('click', function () {
  showNextCompany();
});

nextCompany.addEventListener('touchstart', function () {
  nextCompany.style.background = 'url(../img/icon/arrow-right-hover.svg) no-repeat';
  nextCompany.style.backgroundSize = '23px';
  setTimeout(() => {
    nextCompany.style.background = 'url(../img/icon/arrow-right.svg) no-repeat';
    nextCompany.style.backgroundSize = '23px';
  }, 300);
});

servicesDiv.addEventListener('click', function (event) {
  if (event.target.classList.contains('services') && screen.width >= 550) {
    document.body.style.overflow = 'auto';
    servicesDiv.style.opacity = '0';
    servicesDiv.style.zIndex = '-5';
    popUpDivs.forEach(function (div) {
      div.style.opacity = '0';
      div.style.zIndex = '-5';
    });
  }
});

openPopUpBtns.forEach(function (popUpBtn) {
  popUpBtn.addEventListener('click', function (event) {
    const openPopUpName =
      event.target.previousElementSibling.previousElementSibling.textContent;
    popUpDivs.forEach(function (div) {
      const popUpName = div.firstElementChild.firstElementChild.textContent;
      if (popUpName === openPopUpName) {
        servicesDiv.style.opacity = '1';
        servicesDiv.style.zIndex = '5';
        comparisonHeightsPopUp();
        setPopUpTopPosition(div, popUpName);
        div.style.opacity = '1';
        div.style.zIndex = '5';
      }
    });
  });
});

privatePageBtns[0].addEventListener('click', function (event) {
  imgArea.firstElementChild.style.opacity = 1;
  imgArea.lastElementChild.style.opacity = 0;
  privatePageBtns.forEach(function (btn) {
    btn.style.color = '#cacaca';
  });
  event.target.style.color = '#292929';
});

privatePageBtns[1].addEventListener('click', function (event) {
  imgArea.firstElementChild.style.opacity = 0;
  imgArea.lastElementChild.style.opacity = 1;
  privatePageBtns.forEach(function (btn) {
    btn.style.color = '#cacaca';
  });
  event.target.style.color = '#292929';
});

socialsPromotionBtns.forEach(function (btn) {
  let socialsImgAreaHeights = [];
  if (screen.width > 650) {
    socialsImgAreaHeights = [288, 453, 453, 363];
    btn.parentNode.nextElementSibling.style.height = '288px';
  } else if (screen.width > 402) {
    socialsImgAreaHeights = [288, 354, 354, 285];
    btn.parentNode.nextElementSibling.style.height = '288px';
  } else {
    socialsImgAreaHeights = [282, 327, 327, 264];
    btn.parentNode.nextElementSibling.style.height = '282px';
  }
  btn.addEventListener('click', function (event) {
    socialsPromotionBtns.forEach(function (socials) {
      socials.style.color = '#cacaca';
    });
    event.target.style.color = '#292929';
    switch (event.target.textContent) {
      case 'Instagram':
        showFitsSocialPromotionImg(0, socialsImgAreaHeights[0], event);
        break;
      case 'Facebook':
        showFitsSocialPromotionImg(1, socialsImgAreaHeights[1], event);
        break;
      case 'ВКонтакте':
        showFitsSocialPromotionImg(2, socialsImgAreaHeights[2], event);
        break;
      case 'Одноклассники':
        showFitsSocialPromotionImg(3, socialsImgAreaHeights[3], event);
        break;
    }
  });
});

addServicesBtn.addEventListener('click', function () {
  const servicesArrow = addServicesBtn.firstElementChild.firstElementChild;
  let height = 0;
  if (screen.width > 410) {
    height = 1060;
  } else {
    height = 828;
  }
  addServicesDiv.style.height = '0px';
  showAdditionalOptions(
    servicesArrow,
    addServicesDiv,
    addServicesShown,
    height);
  addServicesShown = !addServicesShown;
});

discountBtn.addEventListener('click', function () {
  const discountArrow = discountBtn.firstElementChild.firstElementChild;
  let height = 0;
  if (screen.width > 410) {
    height = 396;
  } else {
    height = 316;
  }
  discountDiv.style.height = '0px';
  showAdditionalOptions(discountArrow, discountDiv, discountShown, height);
  discountShown = !discountShown;
});

phoneUsBtn.addEventListener('click', function () {
  getCallSection.style.zIndex = '5';
  getCallSection.style.opacity = '1';
});

telInput.addEventListener('click', function () {
  telInput.selectionStart = phoneInput.selectionEnd = 6;
});

telInput.addEventListener('blur', function (event) {
  if (event.target.value !== '+375 (**) *** ** **') {
    const regexp = /\d/g;
    const phoneMatch = event.target.value.match(regexp);
    if (phoneMatch) {
      const phoneNumber = phoneMatch.join('');
      const condition = phoneNumber.length !== 12;
      telInputValidationBorder(event, condition);
    }
  }
});

getCallBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (telInput.value === '') {
    telInput.style.borderColor = '#ff8282';
  } else {
    telInput.value = '';
    closeGetCallPopUp();
  }
});

companyInput.addEventListener('blur', function () {
  if (companyInput.value) {
    const condition = companyInput.value.length < 2;
    validationBorder(companyInput, condition, 0);
  }
});

unpInput.addEventListener('click', function () {
  unpInput.selectionStart = unpInput.selectionEnd = 0;
});

unpInput.addEventListener('keydown', function (event) {
  if (
    event.keyCode == 46 ||
    event.keyCode == 8 ||
    event.keyCode == 9 ||
    event.keyCode == 27 ||
    (event.keyCode == 65 && event.ctrlKey === true) ||
    (event.keyCode >= 35 && event.keyCode <= 39)
  ) {
    return;
  } else {
    if (
      (event.keyCode < 48 || event.keyCode > 57) &&
      (event.keyCode < 96 || event.keyCode > 105)
    ) {
      event.preventDefault();
    }
  }
});

unpInput.addEventListener('blur', function () {
  if (unpInput.value !== '*********') {
    const regexp = /\d/g;
    const unpMatch = unpInput.value.match(regexp);
    if (unpMatch) {
      const unpNumber = unpMatch.join('');
      const condition = unpNumber.length !== 9;
      validationBorder(unpInput, condition, 1);
    }
  } else {
    unpInput.style.color = '#b1b1b1';
  }
});

emailInput.addEventListener('blur', function () {
  const email = emailInput.value;
  if (email) {
    const regexp = /(\w+\.)+\w+/g;
    const condition = !email.match(regexp);
    validationBorder(emailInput, condition, 2);
  }
});

phoneInput.addEventListener('click', function () {
  phoneInput.selectionStart = phoneInput.selectionEnd = 6;
});

phoneInput.addEventListener('blur', function () {
  if (phoneInput.value !== '+375 (**) *** ** **') {
    const regexp = /\d/g;
    const phoneMatch = phoneInput.value.match(regexp);
    if (phoneMatch) {
      const phoneNumber = phoneMatch.join('');
      const condition = phoneNumber.length !== 12;
      validationBorder(phoneInput, condition, 3);
    }
  } else {
    phoneInput.style.color = '#b1b1b1';
  }
});

registerBtn.addEventListener('click', function (event) {
  event.preventDefault();
  if (companyInput.value === '') {
    validationBeforeSending(companyInput, 0);
  }
  if (unpInput.value === '') {
    validationBeforeSending(unpInput, 1);
  }
  if (emailInput.value === '') {
    validationBeforeSending(emailInput, 2);
  }
  if (phoneInput.value === '') {
    validationBeforeSending(phoneInput, 3);
  }
  if (
    companyInput.value !== '' &&
    unpInput.value !== '' &&
    emailInput.value !== '' &&
    phoneInput.value !== ''
  ) {
    forms[2].reset();
  }
});

toTopBtn.addEventListener('click', function () {
  window.scrollTo(pageYOffset, 0);
});

tariffBtns.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    tariffBtns.forEach(function (tariff) {
      tariff.classList.remove('active-tariff-btn');
    });
    tariffs.forEach(function (tar) {
      tar.style.opacity = '0';
    });
    addServices.forEach(function (service) {
      service.style.opacity = '0';
    });
    discountServices.forEach(function (service) {
      service.style.opacity = '0';
    });
    switch (event.target.textContent) {
      case 'Лайт':
        currentTariff = 0;
        break;
      case 'Стандарт':
        currentTariff = 1;
        break;
      case 'Премиум':
        currentTariff = 2;
        break;
    }
    tariffBtns[currentTariff].classList.add('active-tariff-btn');
    tariffs[currentTariff].style.opacity = '1';
    addServices[currentTariff].style.opacity = '1';
    discountServices[currentTariff].style.opacity = '1';
  });
});

reviewsSliderCheckers[0].addEventListener('click', function () {
  showFirstBlockReviews();
});

reviewsSliderCheckers[1].addEventListener('click', function () {
  showSecondBlockReviews();
});

reviewsSliderCheckers[2].addEventListener('click', function () {
  showThirdBlockReviews();
});

reviewsSlider.addEventListener('touchstart', function (event) {
  startPositionReviewsSlider = event.touches[0].pageX;
});

reviewsSlider.addEventListener('touchend', function (event) {
  const endPositionReviewsSlider = event.changedTouches[0].pageX;
  const movePositionReviewsSlider =
    ((startPositionReviewsSlider - endPositionReviewsSlider) * 100) /
    screen.width;
  const slideToLeft = startPositionReviewsSlider - endPositionReviewsSlider > 0;
  if (Math.abs(movePositionReviewsSlider) > 10) {
    moveReviewsSliderByTouch(slideToLeft);
  }
});

window.addEventListener('load', function () {
  const introduceElements = makeArrayFromNodelist(
    document.querySelector('.introduce').firstElementChild.children);
  introduceElements.forEach(function (elem) {
    if (elem.nodeName === 'DIV' && elem.nextElementSibling) {
      makeArrayFromNodelist(elem.children).forEach(function (text) {
        text.classList.add('animate__slideInUp');
        text.style.animationDuration = '1s';
        text.style.animationDelay = animationDelay + 'ms';
        setTimeout(function () {
          text.classList.remove('invisible');
        }, animationDelay);
        animationDelay += 500;
      });
    }
    if (elem.nodeName === 'IMG') {
      elem.style.opacity = 1;
    }
    if (elem.nodeName === 'DIV' && !elem.nextElementSibling) {
      elem.style.opacity = 1;
      setTimerId();
    }
  });
  if (window.location.href === 'https://offer.kuponchik.by/#slider') {
    makeArrayFromNodelist(whatWeDoDiv.children).forEach(function (childNode) {
      animateSliderContent(childNode);
    });
  }
});

window.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'Escape':
      if (loginAndPasswordRecoverySection.style.opacity === '1') {
        if (passwordRecoveryForm.style.opacity === '1') {
          closePasswordRecoveryForm();
        }
        closeLoginForm();
      }
      if (getCallSection.style.opacity === '1') {
        closeGetCallPopUp();
      }
      if (servicesDiv.style.opacity === '1') {
        servicesDiv.style.opacity = '0';
        servicesDiv.style.zIndex = '-5';
        popUpDivs.forEach(function (div) {
          div.style.opacity = '0';
          div.style.zIndex = '-5';
        });
      }
      break;
  }
});

$(window).scroll(function () {
  $('.what-we-do').children().each(showAnimation);
  $('.how-we-do').children().each(showAnimation);
  $('.what-gives-we-do').children().each(showAnimation);
  $('.your-reasons').children('h2, ul').each(showAnimation);
  $('.your-advantages').children('img').each(showAnimation);
  $('.clients-reasons').children('h2, ul').each(showAnimation);
  $('.clients-advantages').children('img').each(showAnimation);
  $('#founder .container').children('h2, p, iframe').each(showAnimation);
  if ($(window).width() > 1485) {
    $('#founder .container').children('img').each(changingOpacityAnimation);
  }
  $('#functional .container').children('h2, p').each(showAnimation);
  $('.offers-pictures, .offers').children().each(showAnimation);
  $('#functional .container').children('img').each(changingOpacityAnimation);
  $('#tariffs .container').children('h2').each(showAnimation);
  if ($(window).width() > 1020) {
    $('#tariffs .container > img').each(changingOpacityAnimation);
    $('.abilities, .light-tariff, .standart-tariff, .premium-tariff').each(
      changingOpacityAnimation);
  } else {
    $('.tariff-btns, .abilities, .light-tariff').each(changingOpacityAnimation);
  }
  $('.additional, .discount').children('h3').each(showAnimation);
  $('.announcement .container').children('h1').each(showAnimation);
  $('.announcement-info').children().each(showAnimation);
  $('.offer-steps .container').children('h2').each(showAnimation);
  $('.steps').children().each(showAnimation);
  $('#registration .container').each(changingOpacityAnimation);
});

function comparisonHeightsPopUp() {
  if (screen.width >= 650) {
    currentPopUpHeight = 0;
  } else if (screen.width >= 425) {
    currentPopUpHeight = 1;
  } else if (screen.width >= 402) {
    currentPopUpHeight = 2;
  } else if (screen.width >= 363) {
    currentPopUpHeight = 3;
  } else {
    currentPopUpHeight = 4;
  }
}

function setPopUpTopPosition(popUp, name) {
  let currentPopUp = {};
  switch (name) {
    case 'Рассылка':
      currentPopUp = mailingHeightArray;
      break;
    case 'Скрытая реклама':
      currentPopUp = hiddenAdvertisingHeightArray;
      break;
    case 'Баннерная реклама':
      currentPopUp = bannerAdvertisingHeightArray;
      break;
    case 'Лендинг':
      currentPopUp = landingHeightArray;
      break;
    case 'Продвижение на сайте':
      currentPopUp = sitePromotionHeightArray;
      break;
    case 'Продвижение в соцсетях':
      currentPopUp = socialPromotionHeightArray;
      break;
    case 'Продвижение в поиске':
      currentPopUp = searchingPromotionHeightArray;
      break;
    case 'Поднятие объявлений':
      currentPopUp = raisingAnnouncementHeightArray;
      break;
  }
  if ((screen.height - currentPopUp[currentPopUpHeight]) < 100) {
    popUp.style.top = '0';
  }
}

function showFitsSocialPromotionImg(number, height, event) {
  socialsPromotionImgs.forEach(function (img) {
    img.style.opacity = '0';
  });
  socialsPromotionImgs[number].style.opacity = '1';
  resizeFitsSocialPromotionImg(
    event.target.parentNode.nextElementSibling,
    height);
}

function resizeFitsSocialPromotionImg(imgArea, height) {
  if (parseInt(imgArea.style.height) < height) {
    imgArea.style.height = parseInt(imgArea.style.height) + 3 + 'px';
    resizeFitsSocialPromotionImg(imgArea, height);
  } else if (parseInt(imgArea.style.height) > height) {
    imgArea.style.height = parseInt(imgArea.style.height) - 3 + 'px';
    resizeFitsSocialPromotionImg(imgArea, height);
  }
}

function animateSliderContent(childNode) {
  childNode.classList.add('animate__slideInUp');
  childNode.classList.remove('invisible');
}

function makeArrayFromNodelist(nodelist) {
  const array = [];
  for (let i = 0; i < nodelist.length; i++) {
    array.push(nodelist[i]);
  }
  return array;
}

function showLoginForm() {
  loginForm.style.visibility = 'visible';
  loginForm.style.zIndex = '5';
  loginForm.style.opacity = '1';
  if (screen.width <= 650) {
    loginForm.style.height = '400px';
  } else {
    loginForm.style.height = '500px';
  }
}

function hideLoginForm() {
  loginForm.style.visibility = 'hidden';
  loginForm.style.height = '0';
  loginForm.style.zIndex = '-1';
  loginForm.style.opacity = '0';
}

function closeLoginForm() {
  hideLoginForm();
  loginAndPasswordRecoverySection.style.visibility = 'hidden';
  loginAndPasswordRecoverySection.style.height = '0';
  loginAndPasswordRecoverySection.style.zIndex = '-1';
  loginAndPasswordRecoverySection.style.opacity = '0';
  document.body.style.overflow = 'auto';
}

function closePasswordRecoveryForm() {
  passwordRecoveryForm.style.zIndex = '-1';
  passwordRecoveryForm.style.opacity = '0';
  showLoginForm();
}

function closeGetCallPopUp() {
  telInput.style.borderColor = '#292929';
  getCallSection.style.zIndex = '-5';
  getCallSection.style.opacity = '0';
}

function closePopUps() {
  servicesDiv.style.opacity = '0';
  servicesDiv.style.zIndex = '-5';
  popUpDivs.forEach(function (div) {
    div.style.opacity = '0';
    div.style.zIndex = '-5';
  });
}

function showAdditionalOptions(arrow, div, shown, height) {
  if (!shown) {
    arrow.style.transform = 'none';
    div.style.visibility = 'visible';
    changingHeightForExtraAbilities(div, height, shown);
    div.style.opacity = '1';
  } else {
    arrow.style.transform = 'matrix(1, 0, 0, -1, 0, 0)';
    div.style.visibility = 'hidden';
    div.style.opacity = '0';
  }
}

function changingHeightForExtraAbilities(div, height, shown) {
  if (parseInt(div.style.height) <= height && !shown) {
    div.style.height = parseInt(div.style.height) + 4 + 'px';
    changingHeightForExtraAbilities(div, height);
  } else if (parseInt(div.style.height) <= height && shown) {
    div.style.height = parseInt(div.style.height) - 4 + 'px';
    changingHeightForExtraAbilities(div, height);
  }
}

function showPreviousCompany() {
  companiesDivs.forEach(function (company) {
    company.style.transitionDelay = '0s, 0s';
    if (parseInt(company.style.right) === -deltaX) {
      company.style.right = lastCompanyElem + 'px';
    } else {
      company.style.right = parseInt(company.style.right) - deltaX + 'px';
    }
    changingCompaniesLogoOpacity(company);
  });
  setTimerId();
}

function showNextCompany() {
  companiesDivs.forEach(function (company) {
    company.style.transitionDelay = '0s, 0.4s';
    if (parseInt(company.style.right) === lastCompanyElem) {
      company.style.right = -deltaX + 'px';
    } else {
      company.style.right = parseInt(company.style.right) + deltaX + 'px';
    }
    changingCompaniesLogoOpacity(company);
  });
  setTimerId();
}

function changingCompaniesLogoOpacity(company) {
  if (
    parseInt(company.style.right) <= 600 &&
    parseInt(company.style.right) >= 0
  ) {
    company.style.opacity = '1';
    company.style.zIndex = '1';
  } else {
    company.style.opacity = '0';
    company.style.zIndex = '-1';
  }
}

function emailLoginValidation() {
  const email = loginEmailInput.value;
  let emailCondition = true;
  if (email) {
    const regexp = /(\w+\.)+\w+/g;
    emailCondition = !email.match(regexp);
  }
  if (emailCondition) {
    loginWrongDataP.style.opacity = '1';
    loginEmailInput.style.border = '1px solid #ff8282';
  } else {
    loginWrongDataP.style.opacity = '0';
    loginEmailInput.style.border = '1px solid #ffffff';
  }
}

function recoveryEmailValidation() {
  const email = recoveryEmailInput.value;
  let emailCondition = true;
  if (email) {
    const regexp = /(\w+\.)+\w+/g;
    emailCondition = !email.match(regexp);
  }
  if (emailCondition) {
    passwordWrongDataP.style.opacity = '1';
    recoveryEmailInput.style.border = '1px solid #ff8282';
  } else {
    passwordWrongDataP.style.opacity = '0';
    recoveryEmailInput.style.border = '1px solid #ffffff';
  }
}

function passwordLoginValidation() {
  if (loginPasswordInput.value === '') {
    loginWrongDataP.style.opacity = '1';
    loginPasswordInput.style.border = '1px solid #ff8282';
  } else {
    loginPasswordInput.style.border = '1px solid #ffffff';
  }
}

function validationBeforeSending(element, index) {
  element.style.borderColor = '#ff8282';
  needToFillDivs[index].style.opacity = '1';
}

function validationBorder(element, condition, index) {
  if (condition) {
    element.style.color = '#ff8282';
    element.style.borderColor = '#ff8282';
    needToFillDivs[index].style.opacity = '1';
  } else {
    element.style.color = '#292929';
    element.style.borderColor = '#292929';
    needToFillDivs[index].style.opacity = '0';
  }
}

function telInputValidationBorder(event, condition) {
  if (condition) {
    event.target.style.color = '#ff8282';
    event.target.style.borderColor = '#ff8282';
  } else {
    event.target.style.color = '#292929';
    event.target.style.borderColor = '#292929';
  }
}

function showFirstBlockReviews() {
  reviewsPage1.style.left = '0%';
  reviewsPage2.style.left = deltaMove + '%';
  reviewsPage3.style.left = deltaMove * 2 + '%';
  changeColorCheckers(reviewsSliderCheckers, 0);
}

function showSecondBlockReviews() {
  reviewsPage1.style.left = 0 - deltaMove + '%';
  reviewsPage2.style.left = '0%';
  reviewsPage3.style.left = deltaMove + '%';
  changeColorCheckers(reviewsSliderCheckers, 1);
}

function showThirdBlockReviews() {
  reviewsPage1.style.left = 0 - deltaMove * 2 + '%';
  reviewsPage2.style.left = 0 - deltaMove + '%';
  reviewsPage3.style.left = '0%';
  changeColorCheckers(reviewsSliderCheckers, 2);
}

function setReviewMobile(startValue) {
  reviewsPage1.style.left = startValue + '%';
  reviewsPage2.style.left = startValue + deltaMove + '%';
  reviewsPage3.style.left = startValue + deltaMove * 2 + '%';
}

function moveReviewsSliderByTouch(toLeft) {
  if (screen.width > 960) {
    if (
      parseFloat(reviewsPage1.style.left) >= -50 &&
      parseFloat(reviewsPage1.style.left) <= 70
    ) {
      changeColorCheckers(reviewsSliderCheckers, 0);
    }
    if (
      parseFloat(reviewsPage2.style.left) > -50 &&
      parseFloat(reviewsPage2.style.left) < 70
    ) {
      changeColorCheckers(reviewsSliderCheckers, 1);
    }
    if (
      parseFloat(reviewsPage3.style.left) > 0 &&
      parseFloat(reviewsPage3.style.left) < 70
    ) {
      changeColorCheckers(reviewsSliderCheckers, 2);
    }
  } else {
    if (parseFloat(reviewsPage1.style.left) > -50) {
      changeColorCheckers(reviewsSliderCheckersMobile, 0);
    }
    if (
      parseFloat(reviewsPage1.style.left) <= -50 &&
      parseFloat(reviewsPage1.style.left) > -150
    ) {
      changeColorCheckers(reviewsSliderCheckersMobile, 1);
    }
    if (
      parseFloat(reviewsPage1.style.left) <= -150 &&
      parseFloat(reviewsPage1.style.left) > -250
    ) {
      changeColorCheckers(reviewsSliderCheckersMobile, 2);
    }
    if (
      parseFloat(reviewsPage1.style.left) <= -250 &&
      parseFloat(reviewsPage1.style.left) > -350
    ) {
      changeColorCheckers(reviewsSliderCheckersMobile, 3);
    }
    if (
      parseFloat(reviewsPage1.style.left) <= -350 &&
      parseFloat(reviewsPage1.style.left) > -450
    ) {
      changeColorCheckers(reviewsSliderCheckersMobile, 4);
    }
    if (
      parseFloat(reviewsPage1.style.left) <= -450 &&
      parseFloat(reviewsPage1.style.left) > -550
    ) {
      changeColorCheckers(reviewsSliderCheckersMobile, 5);
    }
    if (
      parseFloat(reviewsPage1.style.left) <= -550 &&
      parseFloat(reviewsPage1.style.left) > -650
    ) {
      changeColorCheckers(reviewsSliderCheckersMobile, 6);
    }
    if (
      parseFloat(reviewsPage1.style.left) <= -650 &&
      parseFloat(reviewsPage1.style.left) > -750
    ) {
      changeColorCheckers(reviewsSliderCheckersMobile, 7);
    }
    if (
      parseFloat(reviewsPage1.style.left) <= -750 &&
      parseFloat(reviewsPage1.style.left) > -800
    ) {
      changeColorCheckers(reviewsSliderCheckersMobile, 8);
    }
  }
  if (screen.width > 960) {
    if (toLeft) {
      if (parseFloat(reviewsPage1.style.left) === 0) {
        showSecondBlockReviews();
      } else {
        showThirdBlockReviews();
      }
    } else if (!toLeft) {
      if (parseFloat(reviewsPage1.style.left) === 0 - deltaMove * 2) {
        showSecondBlockReviews();
      } else {
        showFirstBlockReviews();
      }
    }
  } else {
    if (toLeft) {
      switch (parseFloat(reviewsPage1.style.left)) {
        case 0:
          setReviewMobile(-100);
          changeColorCheckers(reviewsSliderCheckersMobile, 1);
          break;
        case -100:
          setReviewMobile(-200);
          changeColorCheckers(reviewsSliderCheckersMobile, 2);
          break;
        case -200:
          setReviewMobile(-300);
          changeColorCheckers(reviewsSliderCheckersMobile, 3);
          break;
        case -300:
          setReviewMobile(-400);
          changeColorCheckers(reviewsSliderCheckersMobile, 4);
          break;
        case -400:
          setReviewMobile(-500);
          changeColorCheckers(reviewsSliderCheckersMobile, 5);
          break;
        case -500:
          setReviewMobile(-600);
          changeColorCheckers(reviewsSliderCheckersMobile, 6);
          break;
        case -600:
          setReviewMobile(-700);
          changeColorCheckers(reviewsSliderCheckersMobile, 7);
          break;
        case -700:
          setReviewMobile(-800);
          changeColorCheckers(reviewsSliderCheckersMobile, 8);
          break;
        case -800:
          setReviewMobile(-800);
          break;
      }
    } else if (!toLeft) {
      switch (parseFloat(reviewsPage1.style.left)) {
        case 0:
          setReviewMobile(0);
          break;
        case -100:
          setReviewMobile(0);
          changeColorCheckers(reviewsSliderCheckersMobile, 0);
          break;
        case -200:
          setReviewMobile(-100);
          changeColorCheckers(reviewsSliderCheckersMobile, 1);
          break;
        case -300:
          setReviewMobile(-200);
          changeColorCheckers(reviewsSliderCheckersMobile, 2);
          break;
        case -400:
          setReviewMobile(-300);
          changeColorCheckers(reviewsSliderCheckersMobile, 3);
          break;
        case -500:
          setReviewMobile(-400);
          changeColorCheckers(reviewsSliderCheckersMobile, 4);
          break;
        case -600:
          setReviewMobile(-500);
          changeColorCheckers(reviewsSliderCheckersMobile, 5);
          break;
        case -700:
          setReviewMobile(-600);
          changeColorCheckers(reviewsSliderCheckersMobile, 6);
          break;
        case -800:
          setReviewMobile(-700);
          changeColorCheckers(reviewsSliderCheckersMobile, 7);
          break;
      }
    }
  }
}

function changeColorCheckers(btns, checkerNumber) {
  btns.forEach(function (btn) {
    btn.style.background = '#c7d3db';
  });
  btns[checkerNumber].style.background = '#475762';
}

function setTimerId() {
  clearInterval(timerId);
  timerId = setInterval(function () {
    showNextCompany();
  }, 3000);
}

function changingOpacityAnimation() {
  const imagePos = $(this).offset().top;
  const topOfWindow = $(window).scrollTop();
  const heightOfWindow = $(window).height();
  if (imagePos < topOfWindow + heightOfWindow - 200) {
    $(this).fadeTo(0, 1);
  }
}

function showAnimation() {
  const imagePos = $(this).offset().top;
  const topOfWindow = $(window).scrollTop();
  const heightOfWindow = $(window).height();
  if (imagePos < topOfWindow + heightOfWindow - 200) {
    $(this).addClass('animate__slideInUp');
    $(this).removeClass('invisible');
  }
}
