const FOTOS_URL = 'https://jsonplaceholder.typicode.com/photos/';

const loader = document.querySelector('#loader');
const dataContainer = document.querySelector('#data-container');

const toggleLoader = () => {
    loader.hidden = !loader.hidden;
};

const listElementRender = (img) => {
    const listElement = document.createElement('li');
    listElement.className = 'photo-item';

    const image = document.createElement('img');
    image.className = 'photo-item__image';
    image.src = img.url;
    image.alt = 'самая быстрая фотография на диком западе';

    const title = document.createElement('h3');
    title.className = 'photo-item__title';
    title.textContent = img.title;

    dataContainer.append(listElement);
    listElement.append(image);
    listElement.append(title);
};

toggleLoader();

const getFastestLoadedPhoto = (ids) => {
    const imgPromises = ids.map((id) => fetch(`${FOTOS_URL}${id}`));
    Promise.race(imgPromises)
        .then((response) => response.json())
        .then((img) => {
            listElementRender(img);
        })
        .catch((error) => {
            alert(error);
        })
        .finally(() => {
            toggleLoader();
        })
};

getFastestLoadedPhoto([60, 12, 55]);
