const items = [
  {
    title: "Ампула из экстракта центеллы",
    description: "Высококонцентрированное успокаивающее средство.",
    tags: ["face", "skin"],
    price: 109.00,
    img: "./img/ampula.jpeg",
    rating: 4.2,
  },
  {
    title: "Увлажняющие гидрогелевые патчи Dr.Ceuracle Hyal Reyouth Hydrogel Eye",
    description: "Гидрогелевые патчи предназначены для ухода за нежной и чувствительной кожей век.",
    tags: ["face", "skin",],
    price: 125.00,
    img: "./img/patches.jpeg",
    rating: 4.1,
  },
  {
    title: "Освежающий солнцезащитный крем с морской водой Round Lab 1025 Dokdo Sunscreen SPF50+ PA++++ 50мл",
    description: "защищает кожу от воздействия ультрафиолета, предотвращая фотоповреждения, увлажняет и смягчает кожу, устраняя сухость и предотвращая потерю влаги.",
    tags: ["face","skin", "suncreem"],
    price: 105.00,
    img: "./img/suncreem.jpeg",
    rating: 4.0,
  },
  {
    title: "Себорегулирующий солнцезащитный стик для лица Tocobo Cotton Soft Sun Stick SPF50 + PA++++ 19гр",
    description: "Себорегулирующий солнцезащитный стик для лица имеет высокий показатель защиты от УФ-излучения.",
    tags: ["face", "skin", "suncreem"],
    price: 85.00,
    img: "./img/stik.jpeg",
    rating: 4.7,
  },
  {
    title: "Набор для очищения кожи Manyo Factory Herbgreen Cleansing Oil Full Care Set",
    description: "Набор для тех, кто всегда пользуется косметикой. Для тех, кто хотел бы попробовать процедуру двойного очищения. Для всех типов кожи.",
    tags: ["face", "skin"],
    price: 159.00,
    img: "./img/set.jpeg",
    rating: 5.0,
  },
  {
    title: "Мягкий гель для умывания с CICA-комплексом Torriden Balanceful Cica Cleansing Gel 200мл",
    description: "Деликатно отшелушивает ороговевшие клетки, удаляет излишки кожного сала и шелушения. Очищает кожу от всех загрязнений.",
    tags: ["face", "skin"],
    price: 85.00,
    img: "./img/gel.jpeg",
    rating: 4.2,
  },
  {
    title: "Антиоксидантная сыворотка-спрей с белым трюфелем dAlba White Truffle Supreme Intensive Serum 100мл",
    description: "Моментально увлажняет, питает и разглаживает кожу, при длительном применении повышает упругость и эластичность, замедляет процесс старения.",
    tags: ["face", "skin"],
    price: 105.00,
    img: "./img/serum.jpeg",
    rating: 5.0,
  },
  {
    title: "Липосомальная тканевая маска с CICA-комплексом Torriden Balanceful Cica Mask 25мл",
    description: "Успокаивает раздражённую кожу, снимает зуд и покраснения.",
    tags: ["mask"],
    price: 12.90,
    img: "./img/mask.jpeg",
    rating: 3.9,
  },
  {
    title: "Успокаивающая тканевая маска с центеллой Beauty of Joseon Centella Asiatica Calming Mask 25мл",
    description: "Cмягчает и увлажняет кожу, снимает раздражение и покраснение.",
    tags: ["mask"],
    price: 12.50,
    img: "./img/mask2.jpg",
    rating: 4.6,
  },
  {
    title:"Мягкий очищающий гель для интимной гигиены с экстрактом полыни I'm From Mugwort Feminine Wash 300мл",
    description: "Бережно очищает кожу, не вызывая раздражений и сухости, сохраняет здоровый pH баланс при очищении.",
    tags: ["body"],
    price: 119.00,
    img: "./img/gelintim.jpg",
    rating: 3.4,
  },
  {
    title: "Мусс-автозагар для тела St.Moriz Tanning Mousse 200 мл",
    description: "Автобронзант нового поколения для достижения идеального и естественного бронзового оттенка кожи. ",
    tags: ["body", "suncreem"],
    price: 52.50,
    img: "./img/tanning_mousse.jpg",
    rating: 3.6,
  },
  {
    title: "Бессиликоновый натуральный твердый шампунь для волос Lador Wasabi Shampoo Bar 115гр",
    description: "Эффективно и бережно очищает волосы и кожу головы, нормализует деятельность сальных желез, снимает раздражение, стимулирует рост волос и укрепляет их структуру. ",
    tags: ["hair"],
    price: 21.80,
    img: "./img/hair.jpg",
    rating: 5.0,
  }
  
];


let currentState = [...items];


const itemsContainer = document.querySelector("#shop-items");

const itemTemplate = document.querySelector("#item-template");

const nothingFound = document.querySelector("#nothing-found");


function renderItems(arr) {
  
  nothingFound.textContent = "";
  itemsContainer.innerHTML = "";
  arr.forEach((item) => {
  
    itemsContainer.append(prepareShopItem(item));
  });
  if (!arr.length) {
    nothingFound.textContent = "Ничего не найдено";
  }
}

function sortByAlphabet(a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));


function prepareShopItem(shopItem) {
  const { title, description, tags, img, price, rating } = shopItem;
  const item = itemTemplate.content.cloneNode(true);
  item.querySelector("h1").textContent = title;
  item.querySelector("p").textContent = description;
  item.querySelector("img").src = img;
  item.querySelector(".price").textContent = `${price}P`;

  const ratingContainer = item.querySelector(".rating");
  for (let i = 0; i < rating; i++) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star");
    ratingContainer.append(star);
  }

  const tagsHolder = item.querySelector(".tags");

  tags.forEach((tag) => {
    const element = document.createElement("span");
    element.textContent = tag;
    element.classList.add("tag");
    tagsHolder.append(element);
  });

  return item;
}

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");


function applySearch() {
  const searchString = searchInput.value.trim().toLowerCase();

  currentState = items.filter((el) =>
    el.title.toLowerCase().includes(searchString)
  );
  currentState.sort((a, b) => sortByAlphabet(a, b));
  renderItems(currentState);
  sortControl.selectedIndex = 0;
}


searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);


const sortControl = document.querySelector("#sort");
sortControl.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  switch (selectedOption) {
    case "expensive": {
      currentState.sort((a, b) => b.price - a.price);
      break;
    }
    case "cheap": {
      currentState.sort((a, b) => a.price - b.price);
      break;
    }
    case "rating": {
      currentState.sort((a, b) => b.rating - a.rating);
      break;
    }
    case "alphabet": {
      currentState.sort((a, b) => sortByAlphabet(a, b));
      break;
    }
  }
  renderItems(currentState);
});
