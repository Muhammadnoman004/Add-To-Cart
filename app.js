let getDiv = document.querySelector(".main1");
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(res => {

        for(let i = 0; i < res.length; i++){
            // let getCat = res[0].category;
            let getDes = res[i].description;
            let getDes1 = getDes.slice(0 , 100)
            let getImg = res[i].image;
            let getPrice = res[i].price;
            let getTittle = res[i].title;
            let getTittle1 = getTittle.slice(0 , 25)
            let getRate = res[i].rating;

            getDiv.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${getImg}" id = "img" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title" id = "Tittle">${getTittle1}</h5>
              <h4 id = "Price">$${getPrice}</h4>
              <p class="card-text" id = "des">${getDes1}</p>
              <a href="#" class="btn btn-primary" id = "AddBtn">Add to Cart</a>
            </div>
          </div>`
        }

    })