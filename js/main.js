//Selecting Elements
let form = document.querySelector("form");

let mainDiv = document.querySelector("main");



//Creating New Element
let myNewElement = document.createElement("div");
myNewElement.style.textAlign="center";

let image = document.createElement("img");
image.src = "./images/illustration-thank-you.svg";
image.alt = "./images/illustration-thank-you.svg";

myNewElement.appendChild(image);

//Creating banner
let myNewBanner = document.createElement("p");
myNewBanner.style.cssText=`
    color: var(--Orange);
    font-family: Overpass, sans-serif;
    margin-top: 20px;
    padding: 10px;
    background-color: hsl(213deg 16% 22%);
    width: 200px;
    border-radius: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`;
myNewElement.appendChild(myNewBanner);

//Creating New h1
let myNewHeader = document.createElement("h1");
myNewHeader.textContent="Thank you!";
myNewHeader.style.cssText=`
    margin-top: 20px;
    color: white;
    font-family: Overpass, sans-serif;
`;
myNewElement.appendChild(myNewHeader);

//Creating new paragraph
let myNewParagraph = document.createElement("p");
myNewParagraph.textContent=`We appreciate you taking the time to give a rating. If you ever need more support, don\’t hesitate to get in touch!`;
myNewParagraph.style.cssText=`
    font-family: Overpass, sans-serif;
    color: var(--Light-Grey);
    margin-top: 20px;
`;

myNewElement.appendChild(myNewParagraph);


//When the form submits
form.onsubmit = (event) => {
    event.preventDefault();
    
    let radio = document.getElementsByName("radio");
    radio.forEach((element) => {
        // Store the selected value
        if (element.checked) {
            window.sessionStorage.setItem("checkedNum", element.value)
        };
    });

    let index = 0;
    // Remove elements if value stored
    if (window.sessionStorage.getItem("checkedNum")) {
        while (index < mainDiv.children.length) {
            mainDiv.children[index].remove();
        }   
        myNewBanner.textContent = `You selected ${ window.sessionStorage.getItem("checkedNum") } out of 5`;
        mainDiv.appendChild(myNewElement);
    }
    else {
        let span = document.querySelector("form span");
        span.style.display= "block";
    }   
}
