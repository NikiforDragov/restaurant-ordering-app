import { menuArray } from './data.js';
const mainContent = document.getElementById('main-content');

document.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        const itemName = e.target.dataset.name;
        const itemPrice = e.target.dataset.price;
        handleOrderItemClick(itemName, itemPrice);
        document.getElementById('order-section').style.display = 'block';
    }
});

function handleOrderItemClick(itemName, itemPrice) {
    document.getElementById('order-item-container').innerHTML += `
                <div class="order-item">
                    <p>${itemName}</p>
                    <p>${itemPrice}$</p>
                </div>
    `;
}

function renderMenu() {
    menuArray.forEach((menuItem) => {
        const { name, emoji, ingredients, price, id } = menuItem;
        mainContent.innerHTML += `
            <div class="item-container">
                <div class="item-info">
                    <div class="emoji-container">
                        <p class="item-emoji">${emoji}</p>
                    </div>
                    <div class="info">
                        <p class="item-name">${name}</p>
                        <p class="item-ingredients">
                            ${ingredients}
                        </p>
                        <p class="item-price">${price}</p>
                    </div>
                </div>
                <button class="add-to-cart-btn" data-id=${id} data-name=${name} data-price=${price}>+</button>
            </div>
        `;
    });
}

renderMenu();
