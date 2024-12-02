// 🐶 début de l'exercice en bas de fichier
import { nftType } from "./types/types";
import { nftsList } from "./bdd/nft.js";

function cloneCard() {
  const cardContainer = document.querySelector(".main-card") as Element;
  const clone = cardContainer.cloneNode(true);
  document.querySelector(".card-container")?.appendChild(clone);
  return clone;
}

// 🐶 change le type any par le bon type (un element du tableau 'nftsList')
function createCard(data: nftType) {
  const card = cloneCard()
  populateCard(card as Element, data);
}

// 🐶 change le type any par le bon type (un element du tableau 'nftsList')
function populateCard(currentCard: Element, data: nftType) {
  const img = currentCard.querySelector(".main-image") as HTMLImageElement;
  img.src = data.img;

  const title = currentCard.querySelector(".title") as HTMLHeadElement;
  title.textContent = data.title;

  const description = currentCard.querySelector(
    ".description"
  ) as HTMLParagraphElement;
  description.textContent = data.description;

  const eth = currentCard.querySelector(".eth") as HTMLSpanElement;
  eth.textContent = data.price;

  const expire = currentCard.querySelector(".expire") as HTMLSpanElement;
  expire.textContent = data.expire;

  const creator = currentCard.querySelector(".creator-name") as HTMLSpanElement;
  creator.textContent = data.creator;

  const avatar = currentCard.querySelector(".avatar") as HTMLImageElement;
  avatar.src = data.avatar;
}

export default function init() {
  console.log(nftsList);
  nftsList.map(nftItem => createCard(nftItem))

  // 🐶 Appelle 'createCard' avec le premier element du tableau 'nftsList'
  // 🐶 Appelle 'createCard' avec le deuxieme element du tableau 'nftsList'
  // 🐶 constate l'affichage à l'écran
}
