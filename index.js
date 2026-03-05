import { menuArray } from './data.js';
const mainContent = document.getElementById('main-content');
const orderSection = document.getElementById('order-section');
const totalPriceElement = document.getElementById('total-price');
const orderItemContainer = document.getElementById('order-item-container');
const afterPaymentP = document.getElementById('after-payment-p');
const modal = document.getElementById('modal');
const payForm = document.getElementById('pay-form');

let totalPrice = 0;

document.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        const itemName = e.target.dataset.name;
        const itemPrice = e.target.dataset.price;
        handleOrderItemClick(itemName, itemPrice);
        document.getElementById('order-section').style.display = 'block';
    } else if (e.target.id === 'complete-order-btn') {
        handleCompleteOrderClick();
    } else if (e.target.id === 'remove-item-btn') {
        handleRemoveClick(e);
    }
});

payForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(payForm);
    const customerName = data.get('customer-name');

    modal.style.display = 'none';
    orderSection.style.display = 'none';
    orderItemContainer.innerHTML = '';
    totalPrice = 0;

    afterPaymentP.innerText = `Thanks, ${customerName}! Your order is on its way!`;
    afterPaymentP.style.display = 'block';
});

function handleOrderItemClick(itemName, itemPrice) {
    totalPrice += Number(itemPrice);
    orderItemContainer.innerHTML += `
                <div class="order-item" data-price=${itemPrice}>
                    <p class="bold">${itemName} <button id="remove-item-btn" class="remove-item-btn light">remove</button></p>
                    <p class="bold">${itemPrice}$</p>
                </div>
    `;

    totalPriceElement.innerText = `${totalPrice}$`;
    afterPaymentP.style.display = 'none';
}

function handleCompleteOrderClick() {
    modal.style.display = 'block';
}

function handleRemoveClick(e) {
    const itemElement = e.target.parentElement.parentElement;
    const itemPrice = Number(itemElement.dataset.price);
    itemElement.remove();
    totalPrice -= itemPrice;
    totalPriceElement.innerText = `${totalPrice}$`;
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
                        <p class="item-name bold">${name}</p>
                        <p class="item-ingredients light">
                            ${ingredients.join(', ')}
                        </p>
                        <p class="item-price">$${price}</p>
                    </div>
                </div>
                <button class="add-to-cart-btn" data-id=${id} data-name=${name} data-price=${price}>+</button>
            </div>
        `;
    });
}

renderMenu();
