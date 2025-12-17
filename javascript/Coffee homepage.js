// const cursor = document.querySelector(".custom-cursor");
const orderButtons = document.querySelectorAll(".order-btn");
const hoverTargets = document.querySelectorAll("button, a, .menu-btn");
const searchBar = document.getElementById("searchBar");
const orderForm = document.getElementById("orderForm");
const orderItem = document.getElementById("orderItem");
const orderName = document.getElementById("orderName");
const orderSpecials = document.getElementById("orderSpecials");

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const itemCard = button.parentElement;
    const name = itemCard.querySelector("h4").textContent;
    const price = parseFloat(
      itemCard.querySelector("p").textContent.replace("$", "")
    );
    orderItem.value = name;
    orderForm.style.display = "block";
    orderName.value = "";
    orderSpecials.value = "";
    orderForm.dataset.price = price;
    let existing = cart.find((i) => i.name === name && i.specials === specials);
  });
});
function submitOrder() {
  const name = orderItem.value;
  const price = parseFloat(orderForm.dataset.price);
  const customer = orderName.value || "Guest";
  const specials = orderSpecials.value;

  let existing = cart.find((i) => i.name === name && i.specials === specials);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1, customer, specials });
  }

  updateCart();
  orderForm.style.display = "none";
  alert("Added to cart with specials!");
}

// document.addEventListener("mousemove", (e) => {
//     cursor.style.left = e.clientX + "px";
//     cursor.style.top = e.clientY + "px";
// });

// hoverTargets.forEach(el => {
//     el.addEventListener("mouseenter", () => {
//         cursor.classList.add("active");
//     });
//     el.addEventListener("mouseleave", () => {
//         cursor.classList.remove("active");
//     });
// });

function openMenu() {
  document.getElementById("sideMenu").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}
function closeMenu() {
  document.getElementById("sideMenu").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

function gotoCheckout() {
  localStorage.setItem("checkoutCart", JSON.stringify(cart));
  window.location.href = "Checkout coffee.html";
}

let cart = JSON.parse(localStorage.getItem("cartData")) || [];

let cartCountElement = document.getElementById("cartCount");
let cartList = document.getElementById("cartList");
let cartPopup = document.getElementById("cartPopup");

updateCart();

function openCart() {
  cartPopup.style.transform = "translateX(0)";
}
function closeCart() {
  cartPopup.style.transform = "translateX(100%)";
}

function updateCart() {
  updateCartList();
  updateTotal();
  updateCartCount();
  saveCart();
}

function saveCart() {
  localStorage.setItem("cartData", JSON.stringify(cart));
}
function updateCartList() {
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.style.padding = "10px 40px";
    li.style.borderBottom = "1px solid #ddd";

    li.innerHTML = `
        <strong>${item.name}</strong> (${item.customer})<br>
        $${item.price.toFixed(2)} x
        <button onclick="decreaseQty(${index})" style="padding:2px 6px;">-</button>
        <span style="margin:0 5px">${item.qty}</span>
        <button onclick="increaseQty(${index})" style="padding:2px 6px">+</button>
        <button onclick="removeItem(${index})"
          style="float:right; background:red; color:white; border:none; padding:3px; border-radius:5px; cursor:pointer;">
          x
          </button>
          <br>
          <label>Specials / Ingredients:</label>
          <textarea id="specials-${index}" readonly rows="2" style="width: 100%;">${item.specials || "No special request"}</textarea>
          `;

          cartList.appendChild(li);

          const specialsInput = document.getElementById(`specials-${index}`);
          specialsInput.addEventListener("input", (e) => {
            cart[index].specials = e.target.value;
            saveCart();
          });
  });
}

function removeItem(i) {
  cart.splice(i, 1);
  updateCart();
}

function increaseQty(i) {
  cart[i].qty += 1;
  updateCart();
}

function decreaseQty(i) {
  if (cart[i].qty > 1) {
    cart[i].qty -= 1;
  } else {
    cart.splice(i, 1);
  }
  updateCart();
}

function updateTotal() {
  let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  let totalBox = document.getElementById("totalPrice");

  if (!totalBox) {
    totalBox = document.createElement("h3");
    totalBox.id = "totalPrice";
    totalBox.style.marginTop = "15px";
    cartPopup.appendChild(totalBox);
  }
  totalBox.textContent = "Total: $" + total.toFixed(2);
}

function updateCartCount() {
  let count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountElement.textContent = count;
}
function showAlert() {
  alert("Your order has been submitted!");
}

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  document.querySelectorAll(".menu-grid .item").forEach((item) => {
    const text = item.querySelector("h4").textContent.toLowerCase();
    item.style.display = text.includes(query) ? "block" : "none";
  });
});

function slideRight(gridId) {
  const grid = document.getElementById(gridId);
  grid.scrollBy({ left: 220, behavior: "smooth" });
}

function slideLeft(gridId) {
  const grid = document.getElementById(gridId);
  grid.scrollBy({ left: -220, behavior: "smooth" });
}

function navigateAndClose() {
  closeMenu();
}
