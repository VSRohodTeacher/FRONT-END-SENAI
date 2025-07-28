const apiBase = "https://www.thecocktaildb.com/api/json/v1/1/";
let breakpoint = "random.php";

const api = apiBase + breakpoint;

document.querySelector("#btnDrinkRand").addEventListener("click", () => {
    fetch(api).then(response => {
        // console.log(response)
        return response.json();
    }).then(data => {
        listaDeDrinks = data.drinks
        console.log(listaDeDrinks)

        listaDeDrinks.forEach(cadaDrink => {
            document.querySelector("#drinkRand").innerHTML = `
               <div id="drink">
                <h1> ${cadaDrink.strDrink} </h1>
                <img width="500px" src="${cadaDrink.strDrinkThumb}" >
               </div>
            `;
            document.querySelector("#banner").innerHTML = `
                <img width="500px" src="lua.png" >
            `;

            console.log(cadaDrink.strDrink)
            console.log(cadaDrink.strDrinkThumb)
        });

    })
})