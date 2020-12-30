const galleryItems = [
	{
		title: 'Incredibly Large And Small',
		size: '? cm',
		style: '?',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_incrediblylargeandsmall.jpg',
		sold: false
	},
	{
		title: 'Self Portait',
		size: '? cm',
		style: '?',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_selfportrait.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #1',
		size: '29.7x42 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_lostinspace1.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #2',
		size: '29.7x42 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_lostinspace2.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #3',
		size: '50x64 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_lostinspace3.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #4',
		size: '50x64 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_lostinspace4.jpg',
		sold: false
	},
	{
		title: 'By the Lake #1',
		size: '24x35 cm',
		style: 'fine liner, collage on paper',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_bythelake1.jpg',
		sold: false
	},
	{
		title: 'The Trees',
		size: '24x35 cm',
		style: 'fine liner on paper',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_thetrees.jpg',
		sold: false
	},
	{
		title: 'Reflections',
		size: '24x35 cm',
		style: 'fine liner on paper',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_reflections.jpg',
		sold: false
	},
	{
		title: 'By the Lake #2',
		size: '24x35 cm',
		style: 'fine liner, collage on paper',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_bythelake2.jpg',
		sold: false
	},
	{
		title: 'Where is the Space #2',
		size: '20x20 cm',
		style: 'oil on canvas',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_whereisthespace2.jpg',
		sold: false
	},
	{
		title: 'Don\'t Think',
		size: '70x70 cm',
		style: 'oil and acrylic on canvas',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_dontthink.jpg',
		sold: false
	},
	{
		title: 'You',
		size: '185x185 cm',
		style: 'oil, acrylic and spray paint on canvas',
		description: '',
		year: 2020,
		image_path: 'artbauhauss_you.jpg',
		sold: false
	},
	{
		title: 'Dare to Express #1',
		size: '30x30 cm',
		style: 'oil and acrylic on canvas',
		description: `The painting was donated to Breidenbach Studios in Heidelberg to help them survive the hard situation caused by Covid-19. 
See <a href="https://www.startnext.com/breidenbach" target="_blank" rel="noopener">Startnext Breidenbach Studios</a> for more.`,
		year: 2019,
		image_path: 'artbauhauss_daretoexpress1.jpg',
		sold: true
	},
	{
		title: 'Dare to Express #2',
		size: '20x20 cm',
		style: 'oil and acrylic on canvas',
		description: '',
		year: 2019,
		image_path: 'artbauhauss_daretoexpress2.jpg',
		sold: true
	},
	{
		title: 'Transformation #2',
		size: '40x40 cm',
		style: 'oil and acrylic on canvas',
		description: '',
		year: 2019,
		image_path: 'artbauhauss_transformation2.jpg',
		sold: true
	},
	{
		title: 'Untitled',
		size: '20x40 cm (20x20 each)',
		style: 'spray paint, acrylic and oil on canvas',
		description: '',
		year: 2019,
		image_path: 'artbauhauss_untitled1.jpg',
		sold: true
	},
	{
		title: 'Turquoise Circle #2',
		size: '200x200 cm',
		style: 'spray paint, acrylic and oil on canvas',
		description: '',
		year: 2019,
		image_path: 'artbauhauss_turquoisecircle2.jpg',
		sold: false
	},
	{
		title: 'Turquoise Circle #1',
		size: '100x100 cm',
		style: 'oil and acrylic on canvas',
		description: '',
		year: 2019,
		image_path: 'artbauhauss_turqoisecircle1.jpg',
		sold: true
	},
	{
		title: 'Explosion #1',
		size: '100x100 cm',
		style: 'oil and acrylic on canvas',
		description: '',
		year: 2019,
		image_path: 'artbauhauss_explosion1.jpg',
		sold: false
	},
	{
		title: 'Explosion #2',
		size: '80x100 cm',
		style: 'oil and acrylic on canvas',
		description: '',
		year: 2019,
		image_path: 'artbauhauss_explosion2.jpg',
		sold: false
	},
	{
		title: 'Red Parachute #3',
		size: '50x50 cm',
		style: 'oil and acrylic on canvas',
		description: '',
		year: 2019,
		image_path: 'artbauhauss_redparachute3.jpg',
		sold: false
	},
	{
		title: 'Red Parachute #2',
		size: '50x50 cm',
		style: 'oil on canvas',
		description: '',
		year: 2019,
		image_path: 'artbauhauss_redparachute2.jpg',
		sold: false
	},
	{
		title: 'Red Parachute #1',
		size: '40x40 cm',
		style: 'acrylic on canvas',
		description: '',
		year: 2018,
		image_path: 'artbauhauss_redparachute1.jpg',
		sold: true
	}
];

const bodyElement = document.getElementsByTagName('body')[0];
const galleryElement = document.getElementById('gallery');
const fullScreenViewer = document.getElementById('fullscreen-viewer');
const endFullScreenButton = document.getElementById('end-fullscreen-button');

let currentFullscreenGalleryItemIdx = null;
let inFullScreenMode = false;

endFullScreenButton.onclick = () => {
	fullScreenViewer.style.visibility = 'hidden';
	bodyElement.classList.remove('no-scroll');
	inFullScreenMode = false;
}

bodyElement.addEventListener('swiped-right', () => {
	if (inFullScreenMode && currentFullscreenGalleryItemIdx > 0) {
		displayInFullScreen(currentFullscreenGalleryItemIdx - 1);
	}
});
bodyElement.addEventListener('swiped-left', () => {
	if (inFullScreenMode && currentFullscreenGalleryItemIdx < galleryItems.length - 1) {
		displayInFullScreen(currentFullscreenGalleryItemIdx + 1);
	}
});

const setText = (elementId, text) => document.getElementById(elementId).innerText = text;
const setHtml = (elementId, text) => document.getElementById(elementId).innerHTML = text;

function displayInFullScreen(itemIdx) {
	inFullScreenMode = true;
	currentFullscreenGalleryItemIdx = itemIdx;
	fullScreenViewer.style.visibility = 'visible';
	bodyElement.classList.add('no-scroll');

	const item = galleryItems[itemIdx];
	setText('artwork-title', item.title);
	setText('artwork-size', item.size);
	setText('artwork-style', item.style);
	setHtml('artwork-description', item.description);
	setText('artwork-year', item.year);
	setText('artwork-sold', item.sold ? 'in private collection' : '');
	document.getElementById('artwork-image').src = 'images/large/' + item.image_path;

	let goToPreviousItemElement = document.getElementById('go-to-previous-item');
	goToPreviousItemElement.disabled = itemIdx === 0;
	goToPreviousItemElement.onclick = () => displayInFullScreen(itemIdx - 1);
	let goToNextItemElement = document.getElementById('go-to-next-item');
	goToNextItemElement.disabled = itemIdx === galleryItems.length - 1;
	goToNextItemElement.onclick = () => displayInFullScreen(itemIdx + 1);
}

function createLoaderElement() {
	const loader = document.createElement('div');
	loader.classList.add('loader');
	return loader;
}

function loadImage(imgSrc, altText, callback) {
	const imageElement = document.createElement('img');
	imageElement.alt = altText;
	imageElement.onload = function () {
		callback(imageElement);
	}
	imageElement.src = imgSrc;
}

const imagesBasePath = window.innerWidth < 1024 ? 'images/small/' : 'images/medium/';
const galleryLoader = createLoaderElement();
galleryElement.appendChild(galleryLoader);

function loadGalleryItems() {
	galleryElement.removeChild(galleryLoader);
	galleryItems.forEach((item, itemIdx) => {
		const galleryItem = document.createElement('div');
		galleryItem.classList.add('gallery-item');
		const loader = createLoaderElement();
		galleryItem.appendChild(loader);
		galleryElement.appendChild(galleryItem);
		loadImage(imagesBasePath + item.image_path, item.title, (imageElement) => {
			galleryItem.removeChild(loader);
			galleryItem.appendChild(imageElement);
			imageElement.onclick = () => displayInFullScreen(itemIdx);
		});
	});
}

function loadPortrait() {
	const portraitElement = document.getElementById('portrait');
	loadImage(imagesBasePath  + 'artbauhauss_portrait.jpg', 'sophie bauhaus portrait',
		imageElement => {
			portraitElement.classList.remove('loader');
			portraitElement.appendChild(imageElement);
		}
	);
}

function initStickyHeader() {
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
}

window.onload = () => {
	loadPortrait();
	loadGalleryItems();
	initStickyHeader();
}