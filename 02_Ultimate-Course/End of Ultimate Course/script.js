const main = document.querySelector("#main");
const footer = document.querySelector("#footer");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menuTopNav = document.querySelector("#menuTopNav");
const breakpoint = window.matchMedia("(width < calc(600 / 16 * 1rem))");

setupTopNav();

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);
breakpoint.addEventListener("change", () => {
  // console.log("breakpoint crossed");
  setupTopNav();
});

function openMobileMenu() {
  // console.log("openMobileMenu");

  btnOpen.setAttribute("aria-expanded", "true");
  menuTopNav.removeAttribute("inert");
  main.setAttribute("inert", "");
  footer.setAttribute("inert", "");
  animateMenu();
  bodyScrollLockUpgrade.disableBodyScroll(menuTopNav);
  btnClose.focus();
}

function closeMobileMenu() {
  // console.log("closeMobileMenu");

  btnOpen.setAttribute("aria-expanded", "false");
  menuTopNav.setAttribute("inert", "");
  main.removeAttribute("inert");
  footer.removeAttribute("inert");
  animateMenu();
  bodyScrollLockUpgrade.enableBodyScroll(menuTopNav);
  btnOpen.focus();
}

function animateMenu() {
  menuTopNav.classList.add("animating");

  setTimeout(() => {
    menuTopNav.classList.remove("animating");
  }, 300);
}

function setupTopNav() {
  if (breakpoint.matches) {
    // console.log("is mobile");
    menuTopNav.setAttribute("inert", "");
  } else {
    // console.log("is tablet/desktop");
    closeMobileMenu();
    menuTopNav.removeAttribute("inert");
  }
}
