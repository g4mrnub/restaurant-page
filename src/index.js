import './style.css';
import hamburger from './hamburger.jpg';



const body = document.querySelector("body");

const navbar = document.createElement("div");
navbar.classList.add("navbar");

const home = document.createElement("a");
home.textContent = "home";
const menu = document.createElement("a");
menu.textContent = "menu";
const idk = document.createElement("a");
idk.textContent = "idk";
const brunch = document.createElement("a");
brunch.textContent = "brunch";
const specials = document.createElement("a");
specials.textContent = "specials";

const torso = document.createElement("div");
torso.classList.add("torso");

const heroSection = document.createElement("div");

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Joe's Big Grill.";
const burger = new Image();
burger.src = hamburger;
const content = document.createElement("p");
content.textContent = "Boy we sure love grillin' around here.";

const scheduleSection = document.createElement("div");

const schedule = document.createElement("ul");
schedule.classList.add("schedule");
const scheduleTitle = document.createElement("h1");
scheduleTitle.textContent = "Schedule";
const monFri = document.createElement("li");
monFri.textContent = "9am-9pm Mon-Fri";
const weekend = document.createElement("li");
weekend.textContent = "12pm-12am Sat-Sun";
const button = document.createElement("button");
button.textContent = "ORDER PICKUP";

const footer = document.createElement("div");
footer.classList.add("footer");
const footerContent = document.createElement("h2");
footerContent.textContent = "www.Instagram.com/JoeSupreme";

body.append(navbar, torso, footer);
navbar.append(home, menu, idk, brunch, specials);
torso.append(heroSection, scheduleSection);
heroSection.append(title, burger, content);
scheduleSection.append(schedule, button);
schedule.append(scheduleTitle, monFri, weekend);
footer.appendChild(footerContent);
