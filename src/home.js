export function home() {
  const container = document.querySelector("#content");
  //

  const title = document.createElement("div");
  const eich = document.createElement("h1");
  title.classList.add("title");
  eich.textContent = "The Krusty Krab";
  title.appendChild(eich);
  container.appendChild(title);

  //
  const imageDiv = document.createElement("div");
  imageDiv.id = "imgDiv";
  const img = document.createElement("img");
  img.classList.add("foto");
  img.src = "https://pbs.twimg.com/media/GS8Ww5_bIAEXfbw.jpg:large";
  imageDiv.appendChild(img);
  container.appendChild(imageDiv);

  //
  const descDiv = document.createElement("div");
  descDiv.classList.add("descDiv");
  const desc = document.createElement("h3");
  desc.textContent =
    "We sell Krabby Patties here, always fresh and delicious, We do NOT use frozen ingredients, and we actually care about our costumers";
  desc.classList.add("desc");
  descDiv.appendChild(desc);
  container.appendChild(descDiv);
}
