fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
.then(res=>res.json())
.then(data=>displayMeal(data));

const displayMeal=meal=>{
    
   
    
    }