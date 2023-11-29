let getDiv = document.querySelector(".main");
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(res => {
        let getId = res[0].id;
        let getCat = res[0].category;
        let getDes = res[0].description;
        let getImg = res[0].image;
        let getPrice = res[0].price;
        let getTittle = res[0].title;
        let getRate = res[0].rating;

        console.log(res);
        console.log(getId);
        console.log(getCat);
        console.log(getDes);
        console.log(getImg);
        console.log(getPrice);
        console.log(getTittle);
        console.log(getRate);

        // for(let i = 0; i < res.length; i++){

        //     getDiv.innerHTML = `<div class="card" style="width: 18rem;">
        //     <img src="" class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">Card title</h5>
        //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //       <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>
        //   </div>`
        // }

    })