$.ajax({
    type : 'get',
    url : 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',             //make sure url is in lower case and link is pasted correctly
    success : function(response){
        // console.log(response.meals)
        for(var i=0; i<response.meals.length; i++){
            var newitem = `<div class='col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded text-center'>    
                <p>${response.meals[i].strMeal}</p>                                     
                <img src=${response.meals[i].strMealThumb} class='img-fluid'/>
                <p>${response.meals[i].idMeal}</p>
            </div>`
            $('#myitems').append(newitem)
        }

    //shadow class for shadow text-center to bring everything@center    
    //by using back ticks we and $ sign we are fetching external js variables
    },
    error : function(error){
        console.log(error)
    }
})