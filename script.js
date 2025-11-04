const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productQuantityInput = document.getElementById('product-quantity');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
const nameRequired=document.getElementById('nameRequired');
const priceRequired=document.getElementById('priceRequired');
const qtyRequired=document.getElementById('qtyRequired');

let totalPrice = 0;
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

function calculateThePrice(price, quantity) {
  return price * quantity;
}
function validate(){
  let validation=true;
      if (!productNameInput.value) {
    nameRequired.style.display="block";
    validation=false;
  }

  if (!(parseFloat(productPriceInput.value)) || parseFloat(productPriceInput.value) <= 0) {
   priceRequired.style.display="block";
   validation=false;
  }

 if (!(parseFloat(productQuantityInput.value)) || parseFloat(productQuantityInput.value) <= 0) {
            qtyRequired.style.display="block";
            validation=false;
  }
  return validation;
}

addProductButton.addEventListener('click', function() {
 const validation= validate();
if(validation===false)
  return;


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
  removeButton.style.marginLeft = "8px";


  const updateButton = document.createElement('button');
  updateButton.textContent = "Update";
  updateButton.className = "update-btn";
  updateButton.style.marginLeft = "8px";


  updateTotalPrice(itemTotal);
 
  [productName, productQuantity, productPrice, totalProductPrice].forEach(span => {
    span.style.margin = "8px";
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
  const items = event.target.closest('li');
  const priceSpan = items.querySelector('.TotalpPrice');
  const price = parseFloat(priceSpan.textContent.replace(" $", ""));
    updateTotalPrice(-price);
  items.remove();
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
    return;}

  const newTotal = calculateThePrice(unitPrice, newQty);
  qty.textContent = newQty;
  total.textContent = newTotal.toFixed(2) + " $";

  updateTotalPrice(newTotal - oldTotal);
}
