const cards = document.querySelector(".cards");
//API sorgu
fetch("http://localhost:3000/skincare")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(data);
      cards.innerHTML += `    
        <div class="card">
           <div> <img src="${element.image}"> </div> 
            <p>${element.name}</p>
           <p><span>$</span>${element.price}</p>
       </div> `
    });
  });
