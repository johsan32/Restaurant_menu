class htmlFood {
  constructor() {
    this.menuContainer = document.getElementById('menu-container');
    this.detailFood2 = document.getElementById("detail-html");
  }
  displayMenu(menuItems) {
    for (let category in menuItems) {
      if (Array.isArray(menuItems[category])) {
        let items = menuItems[category];

        items.forEach(item => {
          let itemHTML = `
            <div class="col px-2">
              <div class="card shadow-sm">
                <h5 class="text-center fs-3 py-2 text-warning">${item.name}</h5>
                <img src="${item.image}" class="px-2 rounded-circle align-self-center" style="width: 300px; height: 300px;" />
                <div class="card-body">
                  
                  <div class="d-flex justify-content-between align-items-center">
                  <a href="detail.html?id=${item.id}" type="button" class="btn btn-sm px-4 btn-warning" id="button-detail">detail</a>
                    <small class="text-body-secondary fs-5">${item.price.toFixed(2)} $</small>
                  </div>
                </div>
              </div>
            </div>
          `;
          
          this.menuContainer.insertAdjacentHTML('beforeend', itemHTML);
          
        });       
      }
    }   
  };

  displayMenu(filteredItems) { 
    this.menuContainer.innerHTML = ''; 
    filteredItems.forEach(item => {
      let itemHTML = `
        <div class="col px-2">
          <div class="card shadow-sm">
            <h5 class="text-center fs-3 py-2 text-warning">${item.name}</h5>
            <img src="${item.image}" class="px-2 rounded-circle align-self-center" style="width: 300px; height: 300px;" />
            <div class="card-body">

              <div class="d-flex justify-content-between align-items-center">
                <a id="button-detail" href="detail.html?id=${item.id}" type="button" class="btn btn-sm px-4 btn-warning id="button-detail">detail</a>
                <small class="text-body-secondary fs-5">${item.price.toFixed(2)} $</small>
              </div>
            </div>
          </div>
        </div>
      `;
  
      this.menuContainer.innerHTML += itemHTML;
    });
  };
}
export default htmlFood;
