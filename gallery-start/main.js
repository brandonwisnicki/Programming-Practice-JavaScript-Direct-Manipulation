const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgs = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg',
];


/* Declaring the alternative text for each image file */
const alts = [
    'Blue Human Eye',
    'Rock',
    'Purple Flowers',
    'Ancient Egyptian Art',
    'Butterfly on a Leaf',
]

/* Looping through images */

for(let i = 0; i <imgs.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/"+ imgs[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', "images/"+ imgs[i]);
        displayedImage.setAttribute('alt', alts[i]);
    });
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const c = btn.getAttribute('class');
    if (c == 'dark') {
      btn.setAttribute('class','light');
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      btn.textContent = 'Lighten';
    } else {
      btn.setAttribute('class','dark');
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
      btn.textContent = 'Darken';
    }
  });
  