const homepage = document.querySelector('.homepage');
//Admin panelden buttona clickleyende home page'e kecmek:
homepage.addEventListener('click', function () {
    window.location.href = './HomePage.html';
});

const add = document.querySelector('.add');
//Admin panelden buttona clickleyende admin panel add'e kecmek:
add.addEventListener('click', function () {
    window.location.href = './AdminPanelAdd.html';
});

const table = document.querySelector(".table")
//API sorgu. Melumatlar cedvel seklinde admin panele dusur.
fetch("http://localhost:3000/skincare")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(element => {
            table.innerHTML += `    
            <tr>
            <td>${element.id}</td>
            <td><img src="${element.image}"></td>
            <td>${element.name}</td>
            <td><span>$</span>${element.price}</td>
            <td><button class="update" dataid="${element.id}">Update</button></td>
            <td><button class="delete" dataid="${element.id}">Delete</button></td>
          </tr>`
        })

        //DELETE methodu. Delete buttonuna click edende API-dan hemin id-de olan melumat silinir. 
        //Avtomatik homepage ve adminpanelden silinir.
        const deletebuttons = document.querySelectorAll('.delete');
        deletebuttons.forEach(button => {
            button.addEventListener('click', function () {
                const skincareid = button.getAttribute("dataid")
                fetch(`http://localhost:3000/skincare/${skincareid}`, { method: "Delete" })
                    .then((res) => res.json())
                    .then((data) => console.log(data))
            })
        })

        //Update buttonuna click edende id uygun olaraq Update'e kecid edir
        const updatebuttons = document.querySelectorAll('.update');
        updatebuttons.forEach(button => {
            button.addEventListener('click', function () {
                const skincareid = button.getAttribute("dataid")
                window.location.href = `./AdminPanelUpdate.html#${skincareid}`
            })
        })
    })
 