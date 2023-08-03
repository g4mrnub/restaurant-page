import hamburger from './hamburger.jpg';

const homePage = () => {
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

    torso.append(heroSection, scheduleSection);
    heroSection.append(title, burger, content);
    scheduleSection.append(schedule, button);
    schedule.append(scheduleTitle, monFri, weekend);

    return torso;
};

export default homePage;
