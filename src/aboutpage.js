import Chef from './chef.png';

const aboutPage = () => {
    const main = document.createElement("main");


        const section = document.createElement("section");
        


            const chefImage = new Image();
            chefImage.src = Chef;

            const header = document.createElement("h1");
            header.textContent = "Contact Us";
            const name = document.createElement("p");
            name.textContent = "Joe";
            const email = document.createElement("p");
            email.textContent = "FakeJoeEmail@Joemail.com";
            const number = document.createElement("p");
            number.textContent = "1(234)567-8900";

    main.appendChild(section);
    section.append(
        chefImage,
        header,
        name,
        email,
        number
        );

    return main;
}

export default aboutPage;


