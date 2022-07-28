const galleryItems = [
	{
		title: 'Feelings Expressed #1',
		size: '42x29.7 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2022,
		image_path: 'sophiebauhaus_feelingsexpressed1.jpg',
		sold: true
	},
	{
		title: 'Feelings Expressed #2',
		size: '42x29.7 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2022,
		image_path: 'sophiebauhaus_feelingsexpressed2.jpg',
		sold: false
	},
	{
		title: 'Simple and Yet Not Easy',
		size: '26x18.5 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2022,
		image_path: 'sophiebauhaus_simpleandyetnoteasy.jpg',
		sold: false
	},
	{
		title: 'Ease',
		size: '42x29.7 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_ease.jpg',
		sold: false
	},
	{
		title: 'Mountains',
		size: '46x35 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_mountains.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #3',
		size: '64x50 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_lostinspace3.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #4',
		size: '64x50 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_lostinspace4.jpg',
		sold: false
	},
	{
		title: 'The End',
		size: '64x50 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_theend.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #1',
		size: '42x29.7 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_lostinspace1.jpg',
		sold: false
	},
	{
		title: 'Lost in Space #2',
		size: '42x29.7 cm',
		style: 'photo collage on paper',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_lostinspace2.jpg',
		sold: false
	},
	{
		title: 'Incredibly Large And Small',
		size: '42x29.7 cm',
		style: 'photo collage and fineliner on photograph',
		description: `<p>This work was created as cover for the PhD thesis <i>"From Images to Graphs: Machine Learning Methods for the Detection of Microtubules and Synapses in Large-Scale Electron Microscopy Data"</i> handed in at ETH Zurich by Julia Milena Buhmann.</p>
					  <p>Credit: The photo of the universe in the background was taken by ESO/ Mario Nonino, Piero Rosati and the ESO GOODS Team (downloadable from <a href="https://www.eso.org/public/images/eso0839a/" target="_blank" rel="noopener">here</a>). It shows the Chandra Deep Field South, observed in the U-, B-, and R-bands with ESO's VIMOS and WFI instruments.`,
		year: 2020,
		image_path: 'sophiebauhaus_incrediblylargeandsmall.jpg',
		sold: true
	},
	{
		title: 'Self Portait',
		size: '42x29.7 cm',
		style: 'photo collage on photograph',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_selfportrait.jpg',
		sold: false
	},
	{
		title: 'New Beginnings #6',
		size: '40x30 cm',
		style: 'oil on paper',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_newbeginnings6.jpg',
		sold: false
	},
	{
		title: 'New Beginnings #5',
		size: '40x30 cm',
		style: 'oil on paper',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_newbeginnings5.jpg',
		sold: false
	},
	{
		title: 'New Beginnings #4',
		size: '40x30 cm',
		style: 'oil on paper',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_newbeginnings4.jpg',
		sold: false
	},
	{
		title: 'New Beginnings #3',
		size: '40x30 cm',
		style: 'oil on paper',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_newbeginnings3.jpg',
		sold: false
	},
	{
		title: 'New Beginnings #2',
		size: '40x30 cm',
		style: 'oil on paper',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_newbeginnings2.jpg',
		sold: false
	},
	{
		title: 'New Beginnings #1',
		size: '40x30 cm',
		style: 'oil on paper',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_newbeginnings1.jpg',
		sold: true
	},
	{
		title: 'On Fire',
		size: '100x100 cm',
		style: 'oil on canvas',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_onfire.jpg',
		sold: false
	},
	{
		title: 'Iced',
		size: '60x60 cm',
		style: 'oil on canvas',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_iced.jpg',
		sold: false
	},
	{
		title: 'On the Road',
		size: '90x90 cm',
		style: 'oil on canvas',
		description: '',
		year: 2021,
		image_path: 'sophiebauhaus_ontheroad.jpg',
		sold: false
	},
	{
		title: 'Where is the Space #2',
		size: '20x20 cm',
		style: 'oil on canvas',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_whereisthespace2.jpg',
		sold: false
	},
	{
		title: 'Don\'t Think',
		size: '70x70 cm',
		style: 'oil and acrylic on canvas',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_dontthink.jpg',
		sold: false
	},
	{
		title: 'You',
		size: '185x185 cm',
		style: 'oil, acrylic and spray paint on canvas',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_you.jpg',
		sold: false
	},
	{
		title: 'Dare to Express #1',
		size: '30x30 cm',
		style: 'oil and acrylic on canvas',
		description: `The painting was donated to Breidenbach Studios in Heidelberg to help them survive the hard situation caused by Covid-19. 
See <a href="https://www.startnext.com/breidenbach" target="_blank" rel="noopener">Startnext Breidenbach Studios</a> for more.`,
		year: 2019,
		image_path: 'sophiebauhaus_daretoexpress1.jpg',
		sold: true
	},
	{
		title: 'Dare to Express #2',
		size: '20x20 cm',
		style: 'oil and acrylic on canvas',
		description: '',
		year: 2019,
		image_path: 'sophiebauhaus_daretoexpress2.jpg',
		sold: true
	},
	{
		title: 'Transformation #2',
		size: '40x40 cm',
		style: 'oil and acrylic on canvas',
		description: '',
		year: 2019,
		image_path: 'sophiebauhaus_transformation2.jpg',
		sold: true
	},
	{
		title: 'By the Lake #1',
		size: '35x24 cm',
		style: 'fine liner, collage on paper',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_bythelake1.jpg',
		sold: false
	},
	{
		title: 'The Trees',
		size: '35x24 cm',
		style: 'fine liner on paper',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_thetrees.jpg',
		sold: false
	},
	{
		title: 'Reflections',
		size: '35x24 cm',
		style: 'fine liner on paper',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_reflections.jpg',
		sold: false
	},
	{
		title: 'By the Lake #2',
		size: '35x24 cm',
		style: 'fine liner, collage on paper',
		description: '',
		year: 2020,
		image_path: 'sophiebauhaus_bythelake2.jpg',
		sold: false
	},
];

const bodyElement = document.getElementsByTagName('body')[0];

const galleryFullScreenViewer = document.getElementById('gallery-fullscreen-viewer');
let currentFullscreenGalleryItemIdx = null;

function swipedLeft() {
	if (currentFullscreenGalleryItemIdx < galleryItems.length - 1) {
		displayInFullScreen(currentFullscreenGalleryItemIdx + 1);
	}
}

function swipedRight() {
	if (currentFullscreenGalleryItemIdx > 0) {
		displayInFullScreen(currentFullscreenGalleryItemIdx - 1);
	}
}

function keyNavigation(event) {
	if (event.key === "ArrowLeft") {
		swipedRight();
	} else if (event.key === "ArrowRight") {
		swipedLeft();
	} else if (event.key === "Escape") {
		endGalleryFullScreenMode();
	}
}

function startGalleryFullScreenMode(itemIdx) {
	galleryFullScreenViewer.style.visibility = 'visible';
	bodyElement.classList.add('no-scroll');
	bodyElement.addEventListener('swiped-right', swipedRight);
	bodyElement.addEventListener('swiped-left', swipedLeft);
	bodyElement.addEventListener('keydown', keyNavigation);
	displayInFullScreen(itemIdx);
}

function endGalleryFullScreenMode() {
	galleryFullScreenViewer.style.visibility = 'hidden';
	bodyElement.classList.remove('no-scroll');
	bodyElement.removeEventListener('swiped-right', swipedRight);
	bodyElement.removeEventListener('swiped-left', swipedLeft);
	bodyElement.removeEventListener('keydown', keyNavigation);
	document.getElementById('artwork-image').src = '';
	galleryFullScreenViewer.scrollTop = 0;
}

document.getElementById('end-gallery-fullscreen-button').onclick = () => endGalleryFullScreenMode();

function displayInFullScreen(itemIdx) {
	currentFullscreenGalleryItemIdx = itemIdx;
	const setText = (elementId, text) => document.getElementById(elementId).innerText = text;
	const setHtml = (elementId, text) => document.getElementById(elementId).innerHTML = text;
	const item = galleryItems[itemIdx];
	setText('artwork-title', item.title);
	setText('artwork-size', item.size);
	setText('artwork-style', item.style);
	setHtml('artwork-description', item.description);
	setText('artwork-year', item.year);
	setText('artwork-sold', item.sold ? 'in private collection' : '');
	const artworkImageElement = document.getElementById('artwork-image');
	const artworkLoader = document.getElementById('artwork-loader');

	artworkImageElement.hidden = true;
	artworkLoader.hidden = false;

	artworkImageElement.onload = function () {
		artworkLoader.hidden = true;
		artworkImageElement.hidden = false;
	}
	artworkImageElement.src = 'images/large/' + item.image_path;

	let goToPreviousItemElement = document.getElementById('go-to-previous-item');
	goToPreviousItemElement.disabled = itemIdx === 0;
	goToPreviousItemElement.onclick = () => displayInFullScreen(itemIdx - 1);
	let goToNextItemElement = document.getElementById('go-to-next-item');
	goToNextItemElement.disabled = itemIdx === galleryItems.length - 1;
	goToNextItemElement.onclick = () => displayInFullScreen(itemIdx + 1);
}

function createLoaderElement() {
	const loaderContainer = document.createElement('div');
	loaderContainer.classList.add('loader-container');
	const loader = document.createElement('div');
	loader.classList.add('loader');
	loaderContainer.appendChild(loader);
	return loaderContainer;
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
const galleryElement = document.getElementById('gallery');
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
			imageElement.onclick = () => startGalleryFullScreenMode(itemIdx);
		});
	});
}

function loadPortrait() {
	const portraitElement = document.getElementById('portrait');
	const portraitLoader = document.getElementById('portrait-loader');
	loadImage(imagesBasePath + 'sophiebauhaus_portrait.jpg', 'sophie bauhaus portrait',
		imageElement => {
			portraitLoader.hidden = true;
			portraitElement.appendChild(imageElement);
		}
	);
}

function initStickyHeader() {
	const navbar = document.getElementById('navbar');
	const header = document.getElementsByTagName('header')[0];
	const main = document.getElementsByTagName('main')[0];
	const computeNavOffset = () => header.offsetTop + header.offsetHeight;
	let navTopOffset = computeNavOffset();

	function navStickyCheck() {
		if (window.pageYOffset >= navTopOffset) {
			navbar.classList.add('sticky');
			main.style.paddingTop = navbar.offsetHeight + 'px';

		} else {
			navbar.classList.remove('sticky');
			main.style.paddingTop = 0;
		}
	}

	window.onscroll = navStickyCheck;
	window.onresize = () => {
		navTopOffset = computeNavOffset();
		navStickyCheck();
	}
}

function initFullscreenNav() {
	const navFullScreenViewer = document.getElementById('nav-fullscreen-viewer');

	function startNavFullScreenMode() {
		navFullScreenViewer.style.visibility = 'visible';
		bodyElement.classList.add('no-scroll');
	}

	[...document.getElementsByClassName('burger')].forEach(burgerElement => {
		burgerElement.addEventListener('click', () => startNavFullScreenMode());
	});

	function endNavScreenMode() {
		navFullScreenViewer.style.visibility = 'hidden';
		bodyElement.classList.remove('no-scroll');
	}

	document.getElementById('end-nav-fullscreen-button').onclick = () => endNavScreenMode();

	[...document.querySelectorAll('#fullscreen-menu li a')].forEach(menuLink => {
		menuLink.addEventListener('click', () => endNavScreenMode());
	});
}

window.onload = () => {
	loadPortrait();
	loadGalleryItems();
	initStickyHeader();
	initFullscreenNav();
}
