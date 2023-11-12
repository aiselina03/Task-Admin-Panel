const form = document.querySelector("form");
const cards = document.querySelector(".cards");
const imginput = document.querySelector(".imginput");
const nameinput = document.querySelector(".nameinput");
const priceinput = document.querySelector(".priceinput");

const skincareid = window.location.hash.substring(1); //  (AdminPanelUpdate.html#6) # isaresini oturur sonra gelen id-ni oxuyur

form.addEventListener("submit", update); //form gonderildikde update funksiyasi icra olunsun

fetch(`http://localhost:3000/skincare/${skincareid}`) 
  .then((res) => res.json())
  .then((data) => {
    //update etdikde input-larin daxilinde API-dan id-ye uygun olaraq  datalar goturur
    imginput.value = data.image;  
    nameinput.value = data.name;
    priceinput.value = data.price;
  });

function update(e) {
  e.preventDefault();
  window.location.href = "./AdminPanel.html"; //products update olunduqdan sonra adminpanel sehifesine kecid edir

  fetch(`http://localhost:3000/skincare/${skincareid}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "Put", //Put methodu. API-da movcud olan products yenilemek deyismek
    body: JSON.stringify({
      //inputa daxil edilen deyerleri goturur
      image: imginput.value,
      name: nameinput.value,
      price: priceinput.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        console.log(data);
        cards.innerHTML += `
       <div class="card">
       <div>
       <img src="${element.image}">
       </div>
        <p>${element.name}</p>
       <p><span>$</span>${element.price}</p>
   </div>`;
      });
    });
    //updateden sonra inputlari bosaldir
  imginput.value = ""; 
  nameinput.value = "";
  priceinput.value = "";
}
