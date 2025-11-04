const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productQuantityInput = document.getElementById('product-quantity');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

function calculateThePrice(price, quantity) {
  return price * quantity;
}

addProductButton.addEventListener('click', function() {
    if (!productNameInput.value) {
    alert("Product name cannot be empty!");
    return;
  }

  if (!(parseFloat(productPriceInput.value)) || parseFloat(productPriceInput.value) <= 0) {
    alert("Please enter a valid price greater than 0!");
    return;
  }

  if (!(parseFloat(productQuantityInput.value)) || parseFloat(productQuantityInput.value) <= 0) {
    alert("Please enter a valid quantity greater than 0!");
    return;
  }
  const fragment = document.createDocumentFragment();

  const newProduct = document.createElement('li');

  const productName = document.createElement('span');
  productName.className = "pName";
  productName.textContent = productNameInput.value;

  const productQuantity = document.createElement('span');
  productQuantity.className = "pQty";
  productQuantity.textContent = productQuantityInput.value;

  const productPrice = document.createElement('span');
  productPrice.className = "pPrice";
  productPrice.textContent = productPriceInput.value + " $";

  

 
  const itemTotal = calculateThePrice(
    parseFloat(productPriceInput.value),
    parseFloat(productQuantityInput.value)
  );

  const totalProductPrice = document.createElement('span');
  totalProductPrice.className = "TotalpPrice";
  totalProductPrice.textContent = itemTotal.toFixed(2) + " $";


  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  removeButton.className = "removeBtn";
  removeButton.style.marginLeft = "10px";


  const updateButton = document.createElement('button');
  updateButton.textContent = "Update";
  updateButton.className = "update-btn";
  updateButton.style.marginLeft = "10px";


  updateTotalPrice(itemTotal);
 
  [productName, productQuantity, productPrice, totalProductPrice].forEach(span => {
    span.style.margin = "10px";
  });

  newProduct.appendChild(productName);
  newProduct.appendChild(productQuantity);
  newProduct.appendChild(productPrice);
  newProduct.appendChild(totalProductPrice);
  newProduct.appendChild(removeButton);
  newProduct.appendChild(updateButton);

  fragment.appendChild(newProduct);
  cart.appendChild(fragment);

  productNameInput.value = "";
  productPriceInput.value = "";
  productQuantityInput.value = "";
});

cart.addEventListener('click', function(event) {
  if (event.target.classList.contains('removeBtn')) {
    removeItem(event);
  }
     else if (event.target.classList.contains('update-btn')) {
    updateItem(event);
  }
});

function removeItem(event) {
  const item = event.target.closest('li');
  const priceSpan = item.querySelector('.TotalpPrice');
  const price = parseFloat(priceSpan.textContent.replace(" $", ""));
    updateTotalPrice(-price);
  

  item.remove();
}
function updateItem(event) {
  const item = event.target.closest('li');

  const qty = item.querySelector('.pQty');
  const price = item.querySelector('.pPrice');
  const total = item.querySelector('.TotalpPrice');
  const oldTotal = parseFloat(total.textContent.replace(" $", ""));
  const unitPrice = parseFloat(price.textContent.replace(" $", ""));


  const newQty = parseFloat(prompt("Enter new quantity:", qty.textContent));
  if (!(newQty) || newQty <= 0) {
    alert("Invalid quantity!");
    return;
  }


  const newTotal = calculateThePrice(unitPrice, newQty);


  qty.textContent = newQty;
  total.textContent = newTotal.toFixed(2) + " $";


  updateTotalPrice(newTotal - oldTotal);
}
