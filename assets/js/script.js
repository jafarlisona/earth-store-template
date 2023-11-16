const bag = document.querySelector(".shopping-bag .fa-bag-shopping");
const menu = document.querySelector(".menubar .menu ");
const nav = document.querySelector("nav");
bag.addEventListener("click", () => {
  const asidebar = document.createElement("div");
  asidebar.classList.add("asidebar");
  asidebar.innerHTML = `
  <div class="head">
  <h1>Shopping Cart</h1>
  <div class="close"><i class="fa-solid fa-xmark"></i></div>
</div>
<div class="empty-cart">
  <p>No products in the cart</p>
</div>
<div class="buttons-cart">
    <button>CONTINUE SHOPPING</button>
</div>
  `;
  nav.append(asidebar);
  const div = document.createElement("div");
  div.classList.add("bg-filter");
  document.body.append(div);
  document.body.classList.add("scroll");
  const close = document.querySelector(".fa-xmark");
  const continueBtn = document.querySelector(".buttons-cart button");
  close.onclick = () => {
    asidebar.remove();
    div.remove();
    document.body.classList.remove("scroll");
  };
  continueBtn.onclick = () => {
    location.href = "./shop.html";
  };
});
menu.onclick = () => {
  const menuList = document.createElement("div");
  menuList.innerHTML = `
  <div><a href="./index.html">HOME</a></div>
  <div><a href="#">ABOUT</a></div>
  <div><a href="./shop.html">SHOP</a></div>
  <div><a href="#">CONTACT</a></div>
  `;
  menuList.classList.add("menu-list");
  nav.append(menuList);
  menu.innerHTML = `
  <i class="fa-solid fa-xmark"></i>
  `;
//   const closeMenu = document.querySelector(".fa-xmark");
//   closeMenu.onclick = () => {
//     menuList.remove();
//     console.log("hi");
//     menu.innerHTML = `
// <i class="fa-solid fa-bars"></i>
// `;
//   };
};
