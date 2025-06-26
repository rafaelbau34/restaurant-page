export function menu() {
  const container = document.querySelector("#content");
  //

  const title = document.createElement("div");
  const eich = document.createElement("h1");
  title.classList.add("title");
  eich.textContent = "Menu";
  title.appendChild(eich);
  container.appendChild(title);

  //
  const imageDiv = document.createElement("div");
  imageDiv.id = "imgDiv";
  const img = document.createElement("img");
  img.classList.add("foto");
  img.src =
    "https://img.buzzfeed.com/buzzfeed-static/static/2024-10/9/4/asset/a3b7d2de1cab/sub-buzz-818-1728447287-1.png?downsize=900:*&output-format=auto&output-quality=auto";
  imageDiv.appendChild(img);
  container.appendChild(imageDiv);

  //
  const descDiv = document.createElement("div");
  descDiv.classList.add("descDiv");
  const desc = document.createElement("h3");
  desc.textContent =
    "We serve Krabby Patties for 2 dollars each. SpongeBob makes them and i pay him measly wages for it.";
  desc.classList.add("desc");
  descDiv.appendChild(desc);
  container.appendChild(descDiv);
}
