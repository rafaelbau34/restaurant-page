export function about() {
  const container = document.querySelector("#content");
  //

  const title = document.createElement("div");
  const eich = document.createElement("h1");
  title.classList.add("title");
  eich.textContent = "About";
  title.appendChild(eich);
  container.appendChild(title);

  //
  const imageDiv = document.createElement("div");
  imageDiv.id = "imgDiv";
  const img = document.createElement("img");
  img.classList.add("foto");
  img.src =
    "https://cdn-images.dzcdn.net/images/cover/35e6798d6954519c1876b6986a3cab13/0x1900-000000-80-0-0.jpg";
  imageDiv.appendChild(img);
  container.appendChild(imageDiv);

  //
  const descDiv = document.createElement("div");
  descDiv.classList.add("descDiv");
  const desc = document.createElement("h3");
  desc.textContent =
    "I'm Mr. Krabs, i own the place and i love money more than i love myself.";
  desc.classList.add("desc");
  descDiv.appendChild(desc);
  container.appendChild(descDiv);
}
