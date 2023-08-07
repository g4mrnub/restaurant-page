import './style.css';
import homePage from './homepage';
import menuPage from './menupage';
import aboutPage from './aboutpage';

function switchTab(tab){
    //remove the current page
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    //add the clicked tab's content to the page
    content.append(tab);
}

function createPage(){
    const body = document.querySelector("body");

    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    
    const content = document.createElement("main");
    
    const home = document.createElement("a");
    home.textContent = "home";
    home.addEventListener('click', ()=>{
        switchTab(homePage())
    });
    
    const menu = document.createElement("a");
    menu.textContent = "menu";
    menu.addEventListener('click', ()=>{
        switchTab(menuPage())
    });
    const idk = document.createElement("a");
    idk.textContent = "idk";
    
    const contact = document.createElement("a");
    contact.textContent = "contact";
    contact.addEventListener('click', ()=>{
        switchTab(aboutPage())
    });
    
    const footer = document.createElement("div");
    footer.classList.add("footer");
    const footerContent = document.createElement("h2");
    footerContent.textContent = "www.Instagram.com/JoeSupreme";

    body.append(navbar, content, footer);
    switchTab(homePage());
    navbar.append(home, menu, idk, contact);
    footer.appendChild(footerContent);
}


createPage();



