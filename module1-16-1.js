const loader = document.querySelector('#loader');
const dataContainer = document.querySelector('#data-container');

const toggleLoader = () => {
    loader.hidden = !loader.hidden;
};

const CreateIncomingListOfUsers = (users) => {
    for (const user of users) {
        const listItem = document.createElement('li');
        const itemLink = document.createElement('a');

        itemLink.href = '#';
        itemLink.textContent = user.name;

        dataContainer.append(listItem);
        listItem.append(itemLink);
    }
};

toggleLoader();

const renderAllUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (!response.ok) {
            throw new Error("Ошибка запроса");
        }
        return response.json();
    })
    .then((data) => {
        CreateIncomingListOfUsers(data);
    })
    .catch((error) => {
        alert(error);
    })
    .finally(() => {
        toggleLoader();
    });
};

renderAllUsers();
