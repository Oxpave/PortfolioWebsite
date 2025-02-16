// Display my name

const title = 'Axel Seger';
const logo = document.querySelector('.logo');

logo.innerHTML = title;

// Display current year in the footer

const d = new Date();
const year = d.getFullYear('Y');
const copyright = document.querySelector('#copyright');

copyright.innerHTML = `&#169; ${year} ${title}`;

// Toogle dark mode

logo.onclick = () => {
    let body = document.querySelector('body');
    let currentBg = getComputedStyle(body).backgroundColor;

    if (currentBg === "rgb(255, 255, 255)") { // White in RGB
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
};

/*
logo.onclick = () => {
    if (document.querySelector('body').style.backgroundColor === "white") {
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('body').style.color = "white";
    } else {
        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('body').style.color = "black";
    }
}*/