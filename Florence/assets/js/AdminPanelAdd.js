const form = document.querySelector("form");
const cards = document.querySelector(".cards");
const imginput = document.querySelector(".imginput");
const nameinput = document.querySelector(".nameinput");
const priceinput = document.querySelector(".priceinput");

form.addEventListener("submit", add); //form gonderildikde add funksiyasi icra olunsun

function add(e) {
  e.preventDefault();
  window.location.href = "./AdminPanel.html"; //products add olunduqdan sonra adminpanel sehifesine kecid edir

  fetch("http://localhost:3000/skincare/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST", //Post methodu. API-da yeni card yaratmaq.
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
   </div> `
})
})
//add edildikden sonra inputlari bosaldir
  imginput.value = "";
  nameinput.value = "";
  priceinput.value = "";
}
