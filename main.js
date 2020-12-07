const galleryItems = [
	{
		title: 'Lost in Space #1',
		size: '29.7x42 cm',
		description: 'photo collage on paper',
		year: 2020,
		image_path: './images/artbauhauss_lostinspace1.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #2',
		size: '29.7x42 cm',
		description: 'photo collage on paper',
		year: 2020,
		image_path: './images/artbauhauss_lostinspace2.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #3',
		size: '50x64 cm',
		description: 'photo collage on paper',
		year: 2020,
		image_path: './images/artbauhauss_lostinspace3.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #4',
		size: '50x64 cm',
		description: 'photo collage on paper',
		year: 2020,
		image_path: './images/artbauhauss_lostinspace4.jpg',
		sold: false
	},
	{
		title: 'By the Lake #1',
		size: '24x35 cm',
		description: 'fine liner, collage on paper',
		year: 2020,
		image_path: './images/artbauhauss_bythelake1.jpg',
		sold: false
	},
	{
		title: 'By the Lake #2',
		size: '24x35 cm',
		description: 'fine liner, collage on paper',
		year: 2020,
		image_path: './images/artbauhauss_bythelake2.jpg',
		sold: false
	},
	{
		title: 'Dare to Express #2',
		size: '20x20 cm',
		description: 'oil and acrylic on canvas',
		year: 2019,
		image_path: './images/20191125_140713.jpg',
		sold: true
	},
	{
		title: 'Where is the Space #2',
		size: '20x20 cm',
		description: 'oil on canvas',
		year: 2020,
		image_path: './images/20200803_173336.jpg',
		sold: false
	}
];

const setText = (elementId, text) => document.getElementById(elementId).innerText = text;

const bodyElement = document.getElementsByTagName('body')[0];
const galleryElement = document.getElementById('gallery');
const fullScreenViewer = document.getElementById('fullscreen-viewer');
const endFullScreenButton = document.getElementById('end-fullscreen-button');
endFullScreenButton.onclick = () => {
	fullScreenViewer.style.visibility = 'hidden';
	bodyElement.style.overflow = 'initial';

}

function displayInFullScreen(item) {
	fullScreenViewer.style.visibility = 'visible';
	bodyElement.style.overflow = 'hidden';

	setText('artwork-title', item.title);
	setText('artwork-size', item.size);
	setText('artwork-description', item.description);
	setText('artwork-year', item.year);
	setText('artwork-sold', item.sold ? 'in private collection' : '');
	document.getElementById('artwork-image').src = item.image_path;
}

function createLoaderElement() {
	const loader = document.createElement('div');
	loader.classList.add('loader');
	return loader;
}

function loadImage(imgSrc, callback) {
	const imageElement = document.createElement('img');
	imageElement.onload = function () {
		callback(imageElement);
	}
	imageElement.src = imgSrc;
}

const galleryLoader = createLoaderElement();
galleryElement.appendChild(galleryLoader);

function loadGalleryItems() {
	galleryElement.removeChild(galleryLoader);
	galleryItems.forEach(item => {
		const galleryItem = document.createElement('div');
		galleryItem.classList.add('gallery-item');
		const loader = createLoaderElement();
		galleryItem.appendChild(loader);
		galleryElement.appendChild(galleryItem);
		loadImage(item.image_path, (imageElement) => {
			galleryItem.removeChild(loader);
			galleryItem.appendChild(imageElement);
			imageElement.onclick = () => displayInFullScreen(item);
		});
	});
}

function loadPortrait() {
	const portraitElement = document.getElementById('portrait');
	loadImage('./images/artbauhauss_portrait.jpg', imageElement => {
		portraitElement.classList.remove('loader');
		portraitElement.appendChild(imageElement);
	});
}

window.onload = () => {
	loadPortrait();
	loadGalleryItems();
}

/*
 * Sticky header stuff (re-evaluate coverage of https://caniuse.com/css-sticky at some point for cleaner design)
 */
const navbar = document.getElementById('navbar');
const header = document.getElementById('parallax-header');
const computeNavOffset = () => header.offsetTop + header.offsetHeight;
let navTopOffset = computeNavOffset();

function navStickyCheck() {
	if (window.pageYOffset >= navTopOffset) {
		navbar.classList.add('sticky')
	} else {
		navbar.classList.remove('sticky');
	}
}

window.onscroll = navStickyCheck;
window.onresize = () => {
	navTopOffset = computeNavOffset();
	navStickyCheck();
}