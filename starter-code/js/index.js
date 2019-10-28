// ITERATION 1

function updateSubtotal($product) {
    let $price = Number($product.querySelector(".price span").innerText);
    let $quantity = $product.querySelector('.quantity input').valueAsNumber;
    let $subtotal = $product.querySelector ('.subtotal span');
    let subtotal = $price*$quantity;
    $subtotal.innerText = subtotal;
    return subtotal
}

function calculateAll() {
  
  let $product = document.getElementsByClassName('product');
  let totalSum = 0;

  for (let i=0; i<$product.length;i++){
    totalSum+=updateSubtotal($product[i]);
  }

  let $total = document.querySelector('#total-value span');
  $total.innerText = totalSum;
  
}

// ITERATION 4

let $removeButtons = document.getElementsByClassName('btn-remove');
for (let i=0; i<$removeButtons.length; i++){
  $removeButtons[i].addEventListener('click', event => {
    event.currentTarget.parentNode.parentNode.remove();
    calculateAll();
  });
};


// ITERATION 5

function createProduct(){
  let $addName = document.querySelector('.create-product input').value;  
  let $addPrice = document.querySelector('.create-product td:nth-child(2) input').value;
  document.querySelector('tbody').innerHTML+=`
        <tr class="product">
          <td class="name">
            <span>${$addName}</span>
          </td>
          <td class="price">$<span>${$addPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
  `
  let $removeButtons = document.getElementsByClassName('btn-remove');
for (let i=0; i<$removeButtons.length; i++){
  $removeButtons[i].addEventListener('click', event => {
    event.currentTarget.parentNode.parentNode.remove();
    calculateAll()
  });
};
}

let $addButton = document.getElementById('create')
$addButton.addEventListener('click', createProduct)

let $calcButton = document.getElementById('calculate');
$calcButton.addEventListener('click', calculateAll);
