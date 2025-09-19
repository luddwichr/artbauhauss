const imagesBasePath = 'images/large/';

const COLLAGE = 'collage';
const PAINTING = 'painting';

const paintings = [
    {
        title: 'Tender Pain #1',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2024,
        image_path: 'sophiebauhaus_tenderpain1.webp',
        sold: false
    },
    {
        title: 'Almost Touching #3',
        size: '20x15 cm',
        style: 'oil on paper',
        year: 2024,
        image_path: 'sophiebauhaus_almosttouching3.webp',
        sold: false
    },
    /* currently to be ignored
    {
        title: 'Almost Touching #4',
        size: '21x14.8 cm',
        style: 'oil on paper',
        year: 2024,
        image_path: 'sophiebauhaus_almosttouching4.webp',
        sold: false
    },
    */
    {
        title: 'Almost Touching #1',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2023,
        image_path: 'sophiebauhaus_almosttouching1.webp',
        sold: false
    },
    {
        title: 'Almost Touching #2',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2023,
        image_path: 'sophiebauhaus_almosttouching2.webp',
        sold: false
    },
    {
        title: 'This is What You Lose #8',
        size: '80x60 cm',
        style: 'oil on canvas',
        year: 2023,
        image_path: 'sophiebauhaus_thisiswhatyoulose8-2.webp',
        sold: false
    },
    {
        title: 'This is What You Lose #8',
        size: '80x60 cm',
        style: 'oil on canvas',
        year: 2023,
        image_path: 'sophiebauhaus_thisiswhatyoulose8-1.webp',
        sold: false
    },
    {
        title: 'This is What You Lose #7',
        size: '80x60 cm',
        style: 'oil on canvas',
        year: 2023,
        image_path: 'sophiebauhaus_thisiswhatyoulose7.webp',
        sold: false
    },
    {
        title: 'When the Fog Clears #2',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2023,
        image_path: 'sophiebauhaus_whenthefogclears2.webp',
        sold: false
    },
    {
        title: 'This is What You Lose #1',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2022,
        image_path: 'sophiebauhaus_thisiswhatyoulose1.webp',
        sold: false
    },
    {
        title: 'This is What You Lose #2',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2022,
        image_path: 'sophiebauhaus_thisiswhatyoulose2.webp',
        sold: false
    },
    {
        title: 'This is What You Lose #5',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2022,
        image_path: 'sophiebauhaus_thisiswhatyoulose5.webp',
        sold: true
    },
    {
        title: 'This is What You Lose #6',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2022,
        image_path: 'sophiebauhaus_thisiswhatyoulose6.webp',
        sold: true
    },
    {
        title: 'This is What You Lose #3',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2022,
        image_path: 'sophiebauhaus_thisiswhatyoulose3.webp',
        sold: true
    },
    {
        title: 'Falling Endlessly #1',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2022,
        image_path: 'sophiebauhaus_fallingendlessly1.webp',
        sold: false
    },
    {
        title: 'New Beginnings #1',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2021,
        image_path: 'sophiebauhaus_newbeginnings1.webp',
        sold: true
    },
    {
        title: 'New Beginnings #5',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2021,
        image_path: 'sophiebauhaus_newbeginnings5.webp',
        sold: true
    },
    {
        title: 'New Beginnings #6',
        size: '40x30 cm',
        style: 'oil on paper',
        year: 2021,
        image_path: 'sophiebauhaus_newbeginnings6.webp',
        sold: false
    },
    {
        title: 'On Fire',
        size: '100x100 cm',
        style: 'oil on canvas',
        year: 2021,
        image_path: 'sophiebauhaus_onfire.webp',
        sold: true
    },
    {
        title: 'On the Road',
        size: '90x90 cm',
        style: 'oil on canvas',
        year: 2021,
        image_path: 'sophiebauhaus_ontheroad.webp',
        sold: false
    },
    {
        title: 'Where is the Space #2',
        size: '20x20 cm',
        style: 'oil on canvas',
        year: 2020,
        image_path: 'sophiebauhaus_whereisthespace2.webp',
        sold: false
    },
    {
        title: 'Don\'t Think',
        size: '70x70 cm',
        style: 'oil and acrylic on canvas',
        year: 2020,
        image_path: 'sophiebauhaus_dontthink.webp',
        sold: true
    },
    {
        title: 'You',
        size: '185x185 cm',
        style: 'oil, acrylic and spray paint on canvas',
        year: 2020,
        image_path: 'sophiebauhaus_you.webp',
        sold: true
    },
    {
        title: 'Dare to Express #1',
        size: '30x30 cm',
        style: 'oil and acrylic on canvas',
        year: 2019,
        image_path: 'sophiebauhaus_daretoexpress1.webp',
        sold: true
    },
    {
        title: 'Dare to Express #2',
        size: '20x20 cm',
        style: 'oil and acrylic on canvas',
        year: 2019,
        image_path: 'sophiebauhaus_daretoexpress2.webp',
        sold: true
    },
    {
        title: 'Transformation #2',
        size: '40x40 cm',
        style: 'oil and acrylic on canvas',
        year: 2019,
        image_path: 'sophiebauhaus_transformation2.webp',
        sold: true
    },
];

const collages = [
    {
        title: 'Fill the Gap #1',
        size: '59.4x42 cm',
        style: 'photo collage on paper',
        year: 2024,
        image_path: 'sophiebauhaus_fillthegap1.webp',
        sold: false
    },
    {
        title: 'Fill the Gap #2',
        size: '59.4x42 cm',
        style: 'photo collage on paper',
        year: 2024,
        image_path: 'sophiebauhaus_fillthegap2.webp',
        sold: false
    },
    {
        title: 'Farewell Party',
        size: '40x30 cm',
        style: 'photo collage on paper',
        year: 2023,
        image_path: 'sophiebauhaus_farewellparty.webp',
        sold: true
    },
    {
        title: 'Light #1',
        size: '42x29.7 cm',
        style: 'photo collage on paper',
        year: 2023,
        image_path: 'sophiebauhaus_light1.webp',
        sold: false
    },
    {
        title: 'Light #2',
        size: '42x29.7 cm',
        style: 'photo collage on paper',
        year: 2023,
        image_path: 'sophiebauhaus_light2.webp',
        sold: false
    },
    {
        title: 'Feelings Expressed #3',
        size: '59.4x42 cm',
        style: 'photo collage on paper',
        year: 2022,
        image_path: 'sophiebauhaus_feelingsexpressed3.webp',
        sold: false
    },
    {
        title: 'Feelings Expressed #2',
        size: '59.4x42 cm',
        style: 'photo collage on paper',
        year: 2022,
        image_path: 'sophiebauhaus_feelingsexpressed2.webp',
        sold: false
    },
    {
        title: 'Feelings Expressed #1',
        size: '42x29.7 cm',
        style: 'photo collage on paper',
        year: 2022,
        image_path: 'sophiebauhaus_feelingsexpressed1.webp',
        sold: true
    },
    {
        title: 'Ease',
        size: '42x29.7 cm',
        style: 'photo collage on paper',
        year: 2021,
        image_path: 'sophiebauhaus_ease.webp',
        sold: true
    },
    {
        title: 'Mountains',
        size: '46x35 cm',
        style: 'photo collage on paper',
        year: 2021,
        image_path: 'sophiebauhaus_mountains.webp',
        sold: false
    },
    {
        title: 'Lost in Space #3',
        size: '64x50 cm',
        style: 'photo collage on paper',
        year: 2020,
        image_path: 'sophiebauhaus_lostinspace3.webp',
        sold: false
    },
    {
        title: 'Lost in Space #4',
        size: '64x50 cm',
        style: 'photo collage on paper',
        year: 2020,
        image_path: 'sophiebauhaus_lostinspace4.webp',
        sold: false
    },
    {
        title: 'Lost in Space #5',
        size: '59.4x42 cm',
        style: 'photo collage on paper',
        year: 2020,
        image_path: 'sophiebauhaus_lostinspace5.webp',
        sold: false
    },
    {
        title: 'The End',
        size: '59.4x42 cm',
        style: 'photo collage on paper',
        year: 2021,
        image_path: 'sophiebauhaus_theend.webp',
        sold: false
    },
    {
        title: 'Lost in Space #1',
        size: '42x29.7 cm',
        style: 'photo collage on paper',
        year: 2020,
        image_path: 'sophiebauhaus_lostinspace1.webp',
        sold: false
    },
    {
        title: 'Lost in Space #2',
        size: '42x29.7 cm',
        style: 'photo collage on paper',
        year: 2020,
        image_path: 'sophiebauhaus_lostinspace2.webp',
        sold: false
    },
];

const galleries = [
    {elementId: 'collages-gallery', category: COLLAGE, items: collages},
    {elementId: 'paintings-gallery', category: PAINTING, items: paintings},
];

const galleryItems = galleries
    .map(({items, category}) => items.map(item => ({...item, category})))
    .flat();

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

document.getElementById('end-gallery-fullscreen-button').onclick = endGalleryFullScreenMode;

function nextNonPlaceHolderGalleryItemIdx(currentIdx, offset) {
	let nextIdx = currentIdx + offset;
	while (galleryItems[nextIdx].placeholder) {
		nextIdx += offset;
	}
	return nextIdx
}

function displayInFullScreen(itemIdx) {
	currentFullscreenGalleryItemIdx = itemIdx;
	const setText = (elementId, text) => document.getElementById(elementId).innerText = text;
	const item = galleryItems[itemIdx];
	setText('artwork-title', item.title);
	setText('artwork-size', item.size);
	setText('artwork-style', item.style);
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
	goToPreviousItemElement.onclick = () => displayInFullScreen(nextNonPlaceHolderGalleryItemIdx(itemIdx, -1));
	let goToNextItemElement = document.getElementById('go-to-next-item');
	goToNextItemElement.disabled = itemIdx === galleryItems.length - 1;
	goToNextItemElement.onclick = () => displayInFullScreen(nextNonPlaceHolderGalleryItemIdx(itemIdx, 1));
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

function prepareGallery(galleryElementId) {
    const galleryLoader = createLoaderElement();
    const galleryElement = document.getElementById(galleryElementId);
    galleryElement.appendChild(galleryLoader);
}

function loadGalleryItems(galleryElementId, category) {
    const galleryElement = document.getElementById(galleryElementId);
	galleryElement.textContent = '';

    const items = galleryItems
        .map(((item, index) => ({...item, index})))
        .filter(item => item.category === category);

    if (items.length % 2 === 1) {
        items.push({placeholder: true});
    }

    for (const item of items) {
		const galleryItem = document.createElement('div');

		if (item.placeholder) {
			galleryItem.classList.add('gallery-item-placeholder');
		} else {
			galleryItem.classList.add('gallery-item');
			const loader = createLoaderElement();
			galleryItem.appendChild(loader);
			loadImage(imagesBasePath + item.image_path, item.title, (imageElement) => {
				galleryItem.removeChild(loader);
				galleryItem.appendChild(imageElement);
				imageElement.onclick = () => startGalleryFullScreenMode(item.index);
			});
		}

		galleryElement.appendChild(galleryItem);
	}
}

function prepareGalleries() {
    for (const gallery of galleries) {
        prepareGallery(gallery.elementId);
    }
}

function loadGalleries() {
    for (const gallery of galleries) {
        loadGalleryItems(gallery.elementId, gallery.category);
    }
}

function loadHero() {
    const heroElement = document.getElementById('hero-image');
    const heroLoader = document.getElementById('hero-loader');
    loadImage(imagesBasePath + 'almosttouching_takingupspace1.webp', 'opener image showing two exhibited works',
        imageElement => {
            heroLoader.hidden = true;
            heroElement.appendChild(imageElement);
        }
    );
}

function loadPortrait() {
	const portraitElement = document.getElementById('portrait');
	const portraitLoader = document.getElementById('portrait-loader');
	loadImage(imagesBasePath + 'sophiebauhaus_portrait.webp', 'sophie bauhaus portrait',
		imageElement => {
			portraitLoader.hidden = true;
			portraitElement.appendChild(imageElement);
		}
	);
}

function initStickyHeader() {
	const navbar = document.getElementById('navbar');
	const main = document.getElementsByTagName('main')[0];
	navbar.classList.add('sticky');
	main.style.paddingTop = navbar.offsetHeight + 'px';
}

function initFullscreenNav() {
	const navFullScreenViewer = document.getElementById('nav-fullscreen-viewer');

	function startNavFullScreenMode() {
		navFullScreenViewer.style.visibility = 'visible';
		bodyElement.classList.add('no-scroll');
	}

    document.getElementById('burger-menu').onclick = () => startNavFullScreenMode();

	function endNavScreenMode() {
		navFullScreenViewer.style.visibility = 'hidden';
		bodyElement.classList.remove('no-scroll');
	}

	document.getElementById('end-nav-fullscreen-button').onclick = () => endNavScreenMode();

    for (const menuLink of document.querySelectorAll('#fullscreen-menu li a')) {
        menuLink.onclick = () => endNavScreenMode();
    }
}

prepareGalleries();

window.onload = () => {
	loadHero();
	loadPortrait();
    loadGalleries();
	initStickyHeader();
	initFullscreenNav();
}
