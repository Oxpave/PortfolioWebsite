// Display my name

const title = 'Axel Seger';
const logo = document.querySelector('.logo');

logo.innerHTML = title;

// Display current year in the footer

const d = new Date();
const year = d.getFullYear('Y');
const copyright = document.querySelector('#copyright');

copyright.innerHTML = `&#169; ${year} ${title}`;