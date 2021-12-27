AOS.init();

function onMore() {
  var more = document.getElementById("more");
  more.style.display = "flex";
}

function onMoreOut() {
  var more = document.getElementById("more");
  more.style.display = "none";
}

function SideBarMoreoption() {
  var moreOption = document.getElementById("moreOption");
  var more = document.getElementById("sideMenuMore");
  moreOption.style.display = "flex";
  more.setAttribute("onclick", "SideBarMoreoptionOut()");
}

function SideBarMoreoptionOut() {
  moreOption.style.display = "none";
  var more = document.getElementById("sideMenuMore");
  more.setAttribute("onclick", "SideBarMoreoption()");
}

function openSideMenu() {
  var sideMenu = document.getElementById("sideMenu");
  var menuIcon = document.getElementById("menuIcon");
  sideMenu.style.display = "flex";
  menuIcon.className = "fas fa-times";
  var iconDiv = document.getElementById("menuIconn");
  iconDiv.setAttribute("onclick", "closeSideMenu()");
}

function closeSideMenu() {
  menuIcon.className = "fas fa-bars";
  sideMenu.style.display = "none";
  var iconDiv = document.getElementById("menuIconn");
  iconDiv.setAttribute("onclick", "openSideMenu()");
}

// slider
var sliderArr = [
  {
    img: "./images/slider1.jpg",
    h11: "Welcome",
    h1: "GET STARTED WITH GRAPHIXSTORE",
    para: "Get started with GraphixStore to get free resources.",
    button: "Get Started",
    sliderBtn: "fas fa-circle",
    sliderBtnNone: "far fa-circle",
  },
  {
    img: "./images/slider2.jpg",
    h11: "PROFESSIONAL",
    h1: "BUSINESS CARDS",
    para: "Get our professional business cards Now!",
    button: "Get it Now",
    sliderBtn: "fas fa-circle",
    sliderBtnNone: "far fa-circle",
  },
  {
    img: "./images/slider3.jpg",
    h11: "GRAPHIXSTORE",
    h1: "GIVES YOU PROFESSIONAL TEMPLATES",
    para: "GraphixStore gives you professional templates and much more...",
    button: "Get it Now",
    sliderBtn: "fas fa-circle",
    sliderBtnNone: "far fa-circle",
  },
];

function slider(a) {
  let sliderContent = document.getElementById("sliderContent");
  sliderContent.firstElementChild.src = sliderArr[a].img;
  let onSliderContent = document.getElementById("onSliderContent");
  let h1first = onSliderContent.firstElementChild;
  h1first.innerHTML = sliderArr[a].h11;
  let h1Second = onSliderContent.firstElementChild.nextElementSibling;
  h1Second.innerHTML = sliderArr[a].h1;
  let para = onSliderContent.lastElementChild.previousElementSibling;
  para.innerHTML = sliderArr[a].para;
  let button = onSliderContent.lastElementChild;
  button.innerHTML = sliderArr[a].button;
  var sliderBtn = document.getElementsByClassName("sliderBtn");
  sliderBtn[a].firstElementChild.className = sliderArr[a].sliderBtn;
  console.log(sliderBtn);
}

let number = 1;
setInterval(function () {
  if (number == 3) {
    number = 0;
  }
  slider(number);
  number++;
}, 10000);

// show Categories
function showCategories() {
  let categoriesDiv = document.getElementById("categoriesDiv");
  if (categoriesDiv.style.display !== "none") {
    categoriesDiv.style.display = "none";
  } else {
    categoriesDiv.style.display = "flex";
    categoriesDiv.style.animationDirection = "normal";
  }
}

function categoriesValue(a) {
  let search = document.getElementById("search");
  let selectedValue = a.previousElementSibling.value;
  search.placeholder = "Search " + selectedValue + "...";
}

// Bact to top Button
let backToTopBtn = document.getElementById("backtoTop");
window.onscroll = function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Favorite Icon
function favoriteIcon(a) {
  console.log(a);
  a.firstElementChild.className = "fas fa-thumbs-up";
  a.setAttribute("onclick", "favoriteIconNull(this)");
}

function favoriteIconNull(a) {
  console.log(a);
  a.firstElementChild.className = "far fa-thumbs-up";
  a.setAttribute("onclick", "favoriteIcon(this)");
}

// Announcements
let announcement = [
  {
    img: "./images/announcement1.jpg",
  },
  {
    img: "./images/announcement2.jpg",
  },
  {
    img: "./images/announcement3.jpg",
  },
];

function announcementImg(a) {
  var announceImg = document.getElementById("announceImg");
  announceImg.src = announcement[a].img;
}

let announceNumber = 1;
setInterval(function () {
  if (announceNumber == 3) {
    announceNumber = 0;
  }
  announcementImg(announceNumber);
  announceNumber++;
}, 10000);

// Login and SignUp
function showPassword(a) {
  var passInput = document.getElementById("passInput");
  passInput.type = "text";
  console.log(passInput);
  a.className = "fas fa-eye-slash";
  a.setAttribute("onclick", "hidePassword(this)");
}

function hidePassword(a) {
  var passInput = document.getElementById("passInput");
  passInput.type = "password";
  a.className = "fas fa-eye";
  a.setAttribute("onclick", "showPassword(this)");
}

function showPasswordSignup(a) {
  var passInput = document.getElementById("passInputSignup");
  passInput.type = "text";
  console.log(passInput);
  a.className = "fas fa-eye-slash passwordEye";
  a.setAttribute("onclick", "hidePasswordSignup(this)");
}

function hidePasswordSignup(a) {
  var passInput = document.getElementById("passInputSignup");
  passInput.type = "password";
  a.className = "fas fa-eye passwordEye";
  a.setAttribute("onclick", "showPasswordSignup(this)");
}

function retypepassInputSignup(a) {
  var passInput = document.getElementById("retypepassInputSignup");
  passInput.type = "text";
  console.log(passInput);
  a.className = "fas fa-eye-slash retypePasswordEye";
  a.setAttribute("onclick", "retypehidePasswordSignup(this)");
}

function retypehidePasswordSignup(a) {
  var passInput = document.getElementById("retypepassInputSignup");
  passInput.type = "password";
  a.className = "fas fa-eye retypePasswordEye";
  a.setAttribute("onclick", "retypepassInputSignup(this)");
}

// Carts detail
var cartsDetailImage;
var cartsDetailsHead;
function cartsdetail(a) {
  console.log("djkkjhk");
  let category =
    a.parentNode.parentNode.parentNode.children[0].children[0].innerHTML;
  let img = a.children[0].src;
  let description = a.parentNode.children[1].children[0].innerHTML;
  let product = {
    category: category,
    image: img,
    description: description,
  };
  localStorage.setItem("product", JSON.stringify(product));
  window.location.assign("./cartsdetail.html");

  var image = a.firstElementChild.src;
  cartsDetailImage = image;
  var cartSpan = document.getElementById("cartSpan").innerHTML;
  cartsDetailsHead = cartSpan;
}

// Contact Form
function correctForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let comment = document.getElementById("comment").value;
  let correctName = document.getElementById("correctName");
  let correctEmail = document.getElementById("correctEmail");
  let correctComment = document.getElementById("correctComment");
  console.log(correctName);
  console.log(correctEmail);
  console.log(correctComment);
  console.log(name);
  console.log(email);
  console.log(comment);
  if (name.length <= 3) {
    correctName.style.display = "flex";
  } else {
    correctName.style.display = "none";
  }
  if (email.length <= 13) {
    correctEmail.style.display = "flex";
  } else {
    correctEmail.style.display = "none";
    nullValue();
  }
}

function nullValue() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let comment = document.getElementById("comment");
  name.value = "";
  email.value = "";
  comment.value = "";
  let submitBtn = document.getElementById("submitBtn");
  console.log(submitBtn);
  submitBtn.setAttribute("data-toggle", "modal");
  submitBtn.setAttribute("data-target", "#staticBackdrop");
}

// Favorite section
function removeProduct(ele) {
  ele.parentNode.parentNode.remove();
}

// Donwload Function
function download(a) {
  let imageSrc =
    a.parentElement.parentElement.parentElement.firstElementChild
      .firstElementChild.src;
  console.log(imageSrc);
  let fileName = getFileName(imageSrc);
  saveAs(imageSrc, fileName);
  function getFileName(str) {
    return str.substring(str.lastIndexOf("/") + 1);
  }
}

// CartDetails Image Download
function imageDownload() {
  let imageSrc = document.getElementById("imageDownload").src;
  console.log(imageSrc);
  let fileName = getFileName(imageSrc);
  saveAs(imageSrc, fileName);
  function getFileName(str) {
    return str.substring(str.lastIndexOf("/") + 1);
  }
}
