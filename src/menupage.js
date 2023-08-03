import Egger from './egger.jpg';
import Onions from './onion.jpg';
import PulledPork from './pulled-pork.jpg';


const menuPage = () => {
    const main = document.createElement("main");

    const titleSection = document.createElement("header")
    const title = document.createElement("h1");
    title.textContent = "OUR SLOP";
    const subTitle = document.createElement("p");
    subTitle.textContent = "We season each burger with arsenic.";
    titleSection.classList.add("titleSection");


    const menu = document.createElement('ul');
    menu.classList.add("menu");
    
    const eggerBurger = new Image();
    eggerBurger.src = Egger; 
    const eggerDescription = document.createElement("li");
    eggerDescription.textContent = "SPICY EGG BREAKY: \n Grilled Canadian beef, melting cheddar cheese, lettuce, arugala, hot BBQ sauce on a toasted brioche bun";
    
    const onionBurger = new Image();
    onionBurger.src = Onions; 
    const onionDescription = document.createElement("li");
    onionDescription.textContent = "FRIED ONION SMASH: \n Grilled Canadian beef, aged white cheddar cheese, lettuce, heaping, fried, browned onions, white BBQ sauce on a toasted sesame seed bun!";

    const porkBurger = new Image();
    porkBurger.src = PulledPork; 
    const porkDescription = document.createElement("li");
    porkDescription.textContent = "VEGGIE PORKER: \n Slow cooked pulled pork, lettuce, cucumber, red onion, BBQ sauce on a toasted brioche bun";

    main.append(titleSection, menu);
    titleSection.append(title, subTitle);
    menu.append(
        eggerBurger, eggerDescription,
        onionBurger, onionDescription,
        porkBurger, porkDescription 
        );

    return main;
};

export default menuPage;


