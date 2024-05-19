const loadData = (global) => {

    // search bar er lekha gula js a nite ja korbo

    const searchText = document.getElementById('search-box').value;

    //console.log(searchText);test working

    //console.log("hello"); // checking the fnc that is it working or not

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText ? searchText : global}`) // dynamic string diye dynamic value set korar jonno convert korlam
        .then(response => response.json())
        .then(data => displayData(data.meals))  // .meals diye data object tar array er element gulo k access kortesi
};

// data gulo web page a show korte chaile

const displayData = (data) => {
    //console.log(data); test
    document.getElementById("total-meals").innerText = data.length;

    const mealsContainer = document.getElementById("meals-container");

    data.forEach((meal) => {
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
        <img id="food-image" src=${meal.strMealThumb} alt="">
        <h2>${meal.strMeal}</h2>
        <p>${meal.strInstructions.slice(0, 60)}</p>
        <button onclick = "displayModal('${meal.idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Details</button>
        `;
        mealsContainer.appendChild(card);
    });
};

const displayModal = async (id) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

        const data = await response.json();
        console.log(data.meals[0]);
    }
    catch {
        err => {
            console.log(err);
        }

    }
};
loadData("a");
