const searchButton=document.getElementById("search").addEventListener("click",getMealList)
const mealList=document.getElementById("meal")


function getMealList(){
  let  searchInputText=document.getElementById("search-input").value;
//   console.log(searchInputText);
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
.then(response=>response.json())
.then(data => {
    let html = "";
    if(data.meals){
        data.meals.forEach(meal=>{
            html+=`
            <div class = "meal-item" data-id=${meal.idMeal}>
        <div class = "meal-img">
          <img src = "${meal.strMealThumb}" alt = "food">
        </div>
        <div class = "meal-name">
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