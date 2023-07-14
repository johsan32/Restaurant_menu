// API import ettikten sonra sayfayı alma
import foodFetch from "./api.js";
import htmlFood from './ui.js';
import { buttonData } from './api.js';

const foodData = new foodFetch();
const cardData = new htmlFood();

const buttonAll = document.querySelector("#btn-all");
const buttonDiv = document.querySelector("#btn-all2");
const banner = document.querySelector("#banner");
const buttonHead = document.querySelector("#button-head");
const navHome = document.querySelector("#nav-home");
const navMenu = document.querySelector("#nav-menu");


document.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await fetchData();
    console.log(data);
    cardData.displayMenu(data);
    foodData.showButtons('all')
  } catch (error) {
    console.error("Error:", error);
  }
});

let jsonData;
function fetchData() {
  return new Promise((resolve, reject) => {
    foodData.getJSONData()
      .then(data => {
        //console.log("tüm data", data);
        jsonData = data;
        //console.log(jsonData);
        resolve(data);
      })
      .catch(error => {
        console.error('Error:', error);
        reject(error); 
      });
  });
}

buttonAll.addEventListener('click', filterMenu);

function filterMenu(event) {
  const menuBtnData = event.target.dataset.menu;
  
  if (menuBtnData === "all") {
    cardData.displayMenu(jsonData.menu);
  }
  else{
    const filteredItems = jsonData.menu.filter(item => item.category === menuBtnData);
    cardData.displayMenu(filteredItems);
  }
  foodData.showButtons(menuBtnData)
}

function showButtons(active) {
  buttonAll.innerHTML = '';
  buttonData.forEach((btn) => {
    const buttonEl = document.createElement('button');
    buttonEl.className = 'btn btn-secondary filter-btn';
    buttonEl.innerText = btn.text;
    buttonEl.dataset.menu = btn.data;
    if (buttonEl.dataset.menu === active) {
      buttonEl.classList.add('bg-warning', 'text-light');
    }
    buttonAll.appendChild(buttonEl);
  });
}

buttonDiv.addEventListener('click', buttonDsiplay)

function buttonDsiplay() {
  banner.style.display = 'none';
  buttonHead.style.display ="block"
  navHome.classList.remove('active');
  navMenu.classList.add('active');
  showButtons('all');
  cardData.displayMenu(jsonData.menu);
}
