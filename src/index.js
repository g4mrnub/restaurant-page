import './style.css';
import homePage from './homepage';
import menuPage from './menupage';
import aboutPage from './aboutpage';



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


const footer = document.createElement("div");
footer.classList.add("footer");
const footerContent = document.createElement("h2");
footerContent.textContent = "www.Instagram.com/JoeSupreme";

body.append(navbar, homePage(), footer);
navbar.append(home, menu, idk, brunch, specials);
footer.appendChild(footerContent);
