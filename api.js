class foodFetch {
  constructor() {}

  // fetch API'sini kullanarak JSON verilerini alma
  getJSONData() {
    return new Promise((resolve, reject) => {
      fetch('./db.json')
        .then(res => res.json())
        .then(data => {
          resolve(data);
          //console.log(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default foodFetch;


export const buttonData = [
  {
    id: 1,
    text: 'All',
    data: 'all',
  },
  {
    id: 2,
    text: 'Pizza',
    data: 'pizza',
  },
  {
    id: 3,
    text: 'Dessert',
    data: 'dessert',
  },
  {
    id: 4,
    text: 'Salads',
    data: 'salads',
  },
  {
    id: 5,
    text: 'Sauces',
    data: 'sauces',
  },
  {
    id: 6,
    text: 'Sides',
    data: 'sides',
  },
  {
    id: 7,
    text: 'Drinks',
    data: 'drinks',
  },
];