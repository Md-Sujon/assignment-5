const searchButton=document.getElementById("search").addEventListener("click",getMealList)
const mealList=document.getElementById("meal")


function getMealList(){
  let  searchInputText=document.getElementById("search-input").value;
//   console.log(searchInputText);
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
.then(response=>response.json())
.then(data => {
    let html =``;
    if(data.meals){
        data.meals.forEach(meal=>{
            html+=`
            <div class = "meal-item" data-id=${meal.idMeal}>
        <div class = "meal-img">
          <img src = "${meal.strMealThumb}" alt = "food">
        </div>
        <div class = "meal-name">
        <button onclick="mealDetails('${meal.strMeal}')" type="button" class="btn btn-primary">Details</button>
          <h3>${meal.strMeal}</h3>
          

        </div>
      </div>
            `;
        })
    }else{
        html="sorry, no match";
    }
    mealList.innerHTML=html;
    mealList.classList.add("notFound")
});
}

const mealDetails =strMeals=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeals}`
//    console.log(url);
    fetch(url)
    .then(res=>res.JSON())
    .then(data => renderMealInfo(data[0]));

    }

    const renderMealInfo=meal=>{
        // console.log(meal);
        const  meals=document.getElementById("mealsDetails")
        mealDetails.innerHTML=`
        <h1>name:${meals.strMeal}</h1>
        <p>strInstructions:${meals.strInstructions}</p>
        <p>strArea:${meals.strArea}</p>
        
        `

    }