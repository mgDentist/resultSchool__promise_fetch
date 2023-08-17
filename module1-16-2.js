const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const loader = document.querySelector('#loader');
const dataContainer = document.querySelector('#data-container');

const toggleLoader = () => {
    loader.hidden = !loader.hidden;
};

toggleLoader();

const getUsersByIds = (ids) => {
    const request = ids.map((id) => fetch(`${USERS_URL}/${id}`));
    Promise.all(request)
        .then((responses) => {
            const dataResults = responses.map(response => response.json());
            return Promise.all(dataResults);
        })
        .then((users) => {
            users.forEach((user) => {
                const listItem = document.createElement('li');
                const itemLink = document.createElement('a');

                itemLink.href = '#';
                itemLink.textContent = user.name;

                dataContainer.append(listItem);
                listItem.append(itemLink);
            })
        })
        .catch((error) => {
            alert(error);
        })
        .finally(() => {
            toggleLoader();
        })
};

getUsersByIds([5, 6, 2, 1]);
