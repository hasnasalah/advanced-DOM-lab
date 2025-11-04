# Dynamic Shopping Cart Application

## Overview

This is a dynamic shopping cart application that allows users to add, update, and remove items from their shopping cart dynamically while keeping track of the total price.

## Features

* Add Products: 
        Users can add items to the cart with a name, quantity and price.
* View Cart Items:
             Display a list of all added products with their prices and quantity.
* pdate Quantities:
             Users can change the quantity of each product and update the total price updating.
* Remove Items:
              Users can remove items from the cart, with the total price updating.

## Technologies Used

* HTML
* CSS
* JavaScript

## Setup

* Clone or download the repository using : https://github.com/hasnasalah/advanced-DOM-lab



## future freatures

* Upgrade the quantity updating using a + or - to either increase or decrease instead of promt to the user to enter the new quantity.


## Reflection Questions

### How did you dynamically create and append new elements to the DOM?
 I used JavaScript to create new DOM elements using document.createElement(). For each product added, I created a <li> , then for each price, qty and product name I dynamicly create a span element to hold each to be easy to manipulate and style.

 ### What steps did you take to ensure accurate updates to the total price?
  Since the Update total price function already given I make sure to each time i get the price and qty from the user I parseFloat the inputs and use the calculation needed and call the function that already provided.

  ###  How did you handle invalid input for product name or price?
  I checked if the product name was empty and whether the price was a positive number before adding the item to the cart. If either input was invalid, the item was not added, and a message will display as it is alrready in the html file and it was not displayed but it is triggred to be displayed if either of the conditions was valid.
  
  ### What challenges did you face when implementing the remove functionality?
  One challenge was making sure that the total price updates correctly when items are removed or their quantities are changed. I solved this by storing each product’s total in a .TotalpPrice span and using it to calculate the amount to subtract or add to the total.