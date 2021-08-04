const items = [
  {
    img: "https://imgk.timesnownews.com/story/chad-montano-lP5MCM6nZ5A-unsplash.jpg?tr=w-400,h-300,fo-auto",
    name: "Mexican Taco",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN66Xjgzb9pyYpWBjaIJO5iQfQq7RyRgc8GfQWvUU79ENXD_s1Fn30H5bIvsCb8AN0lVk&usqp=CAU",
    name: "Farmhouse Pizza",
  },
  {
    img: "https://www.playfulcooking.com/wp-content/uploads/2017/06/indian-spiced-chicken-burger-06-720x720.jpg",
    name: "Chicken Burger",
  },
  {
    img: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_05/957306/food-adam-rappaport-super-bowl-nachos-today-160202-tease-04.jpg",
    name: "Loaded Nachos",
  },
  {
    img: "https://thebellyrulesthemind.net/wp-content/uploads/2020/12/hakka-noodles-1-720x720.jpg",
    name: "Hakka Noodles",
  },
];

const itemsScrollBar = () => {
  console.log(items);
  let container = document.querySelector(".recipie-cards-container");
  let mobileContainer = document.querySelector(".mobile-cards-container");
  let card = "";
  for (let i = 0; i < items.length; i++) {
    card += `
	  <div class="card">
			<img src=${items[i].img} alt="itemImage" />
			<p>${items[i].name}</p>
		  </div>
	  `;
  }

  container.innerHTML += card;
  mobileContainer.innerHTML += card;

  container.children[4].classList.add("last-child");
  mobileContainer.children[4].classList.add("last-child");
};

itemsScrollBar();
