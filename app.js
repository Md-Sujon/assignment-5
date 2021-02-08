const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelectorAll('.meal-details-content')
// const recipeCloseBtn = document.getElementById('recipe-close-btn');

//even listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click',getMealRecipe)

//get meal that matches with the ingredients
function getMealList(){
  // console.log(searchInputTxt);
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
         html="Sorry,Dur Meya valo kora nam dan!";
         mealList.classList.add('notFound')
       }

       mealList.innerHTML = html;
    });
}


//recipe meals
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
  console.log(meal);
  meal=meal[0]
  let html=`
  <h2 class = "recipe-title">${meal.strMeal}</h2>
  <p class = "recipe-category">${meal.strCategory}</p>
  <div class = "recipe-instruct">
    <h3>Instructions:</h3>
    <p>${meal.strInstructions}</p>
  </div>
  <div class = "recipe-meal-img">
    <img src = "${meal.strMealThumb}" alt = "food">
  </div>

  `;
}
mealDetailsContent.innerHTML=html;
mealDetailsContent.parentElement.classList.add('meal-details-content')

















// const searchButton=document.getElementById("search-input").addEventListener("click",getMealList)
// const mealList=document.getElementById("meal")
// .addEventListener("click",getMealRecipe)
// const mealDetailsContent=document.querySelector('meal-details-content');


// function getMealList(){
//   let  searchInputTxt=document.getElementById("search-input").value
//   console.log(searchInputText);
// fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
// .then(response=>response.json())
// .then(data => {
//     let html ='';
//     if(data.meals){
//         data.meals.forEach(meal=>{
//             html+=`
//             <div class = "meal-item" data-id=${meal.idMeal}>
//         <div class = "meal-img">
//           <img src = "${meal.strMealThumb}" alt = "food">
//         </div>
//         <div class = "meal-name">
//         <br>

//        <h3>${meal.strMeal}</h3>
          

//         </div>
//       </div>
//             `;
//         })
//         // mealList.classList.remove('notFound')
//     }else{
//         html="sorry, no match";
//         mealList.classList.add('notFound')
//     }
//     mealList.innerHTML=html;
   
// });
// }

// const mealDetails =strMeals=>{
//     const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeals}`
// //    console.log(url);
//     fetch(url)
//     .then(res=>res.JSON())
//     .then(data => renderMealInfo(data[0]));

//     }


    // meal recipe







    // const renderMealInfo=meal=>{
    //     // console.log(meal);
    //     const  meals=document.getElementById("mealsDetails")
    //     mealDetails.innerHTML=`
    //     <h1>name:${meals.strMeal}</h1>
    //     <p>strInstructions:${meals.strInstructions}</p>
    //     <p>strArea:${meals.strArea}</p>
    
    //     `

    // }