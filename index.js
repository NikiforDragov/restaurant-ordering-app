import { menuArray } from './data.js';
const mainContent = document.getElementById('main-content');

function renderMenu() {
    menuArray.forEach((menuItem) => {
        const { name, emoji, ingredients, price } = menuItem;
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
                <button class="add-to-cart-btn">+</button>
            </div>
        `;
    });
}

renderMenu();
