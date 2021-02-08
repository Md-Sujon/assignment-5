const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelectorAll('.meal-details-content')


searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click',getMealRecipe)


function getMealList(){
  let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
       let html ="";
       if(data.meals){
       data.meals.forEach(meal => {
         html +=`
         <div class = "meal-item" data-id="${meal.idMeal}">
              <div class = "meal-img">
                <img src = "${meal.strMealThumb}" alt = "food">
                <br>
              </div>
            <div class = "meal-name">

            <button class="btn btn-success recipe-btn">Details</button>
              <h3>${meal.strMeal}</h3>
            </div>
      </div>
       `;
       });
        mealList.classList.remove('notFound')
       }else{
         html="Sorry,একটা খাবারের নাম লেখতে পারেন না?? ভুল হয় কেমনে?ভালো করে লেখেন এসে পরবে!(JustFun)";
         mealList.classList.add('notFound')
       }

       mealList.innerHTML = html;
    });
}


function getMealRecipe(a){
  a.preventDefault();
  if(a.target.classList.contains('recipe-btn')){
let mealItem=a.target.parentElement.parentElement;
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
.then(response=>response.json())
.then(data=>mealRecipeModal(data.meals))

  }
}

function mealRecipeModal(meal){

const mealDiv=document.getElementById("meal-details-content");
  mealDiv.innerHTML=`
<h2>StrMeal:${meal.strMeal}</h2>
  <p>StrCategory:${meal.strCategory}</p>
  <div class = "recipe-instruct">
    <h3>Instructions:</h3>
    <p>strInstructions:${meal.strInstructions}</p>
  </div>
  <div class = "recipe-meal-img">
    <img src = "${meal.strMealThumb}" alt = "food">
  </div>

  `;
}


















