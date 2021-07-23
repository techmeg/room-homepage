// manage image selection
const featureImage = document.querySelector('.feature_image-img');
let device = null;

window.onload = handleSizeChange;
window.onresize = handleSizeChange;

function handleSizeChange(e) {
    if(this.innerWidth < 768){
        device = 'mobile';
        // console.log('mobile');
    }else if(this.innerWidth >= 768) {
        device = 'desktop';
        // console.log('desktop');
    }
    if(device) {
        featureImage.setAttribute('src', `images/${device}-image-hero-1.jpg`);
    }
};

// manage feature content
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const featureContent = [
    {
        h1: "Discover innovative ways to decorate",
        p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        h1: "We are available all across the globe.",
        p: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        h1: "Manufactured with the best materials",
        p: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
];

const imageAlt = ["white desk chairs with cutout back", "yellow, green, white chairs", "black folding chair"]

let counter = 1;
const featureHeadline = document.querySelector('.feature_content-headline');
const featureText = document.querySelector('.feature_content-text');

nextBtn.addEventListener('click', () => {
    (counter === 3) ? counter = 0 : counter;
    counter++;
    featureImage.setAttribute('src', `images/${device}-image-hero-${counter}.jpg`);
    featureImage.setAttribute('alt', imageAlt[counter-1]);
    featureHeadline.textContent = featureContent[counter-1].h1
    featureText.textContent = featureContent[counter-1].p

});

prevBtn.addEventListener('click', () => {
    (counter === 1) ? counter = 4 : counter;
    counter--;
    featureImage.setAttribute('src', `images/${device}-image-hero-${counter}.jpg`);
    featureImage.setAttribute('alt', imageAlt[counter-1]);
    featureHeadline.textContent = featureContent[counter-1].h1
    featureText.textContent = featureContent[counter-1].p

});