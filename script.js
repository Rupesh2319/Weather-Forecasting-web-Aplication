let whether = {
    "apikey" : "51edcb2e3e05bf514ef394a5371c2d66",
    fetchWhether : function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid=" + 
        this.apikey)
        .then((response)=>response.json())
        .then((data)=>this.displayWhether(data))
    },

    displayWhether : function (data) {
        const { name } = data;
        const {  icon , description } = data.weather[0];
        const { temp , humidity } = data.main;
        // const { humidity } = data.main;
        const { speed } = data.wind;
        
        document.querySelector(".city").innerHTML = "Weather in " + name; 
        document.querySelector(".temp").innerHTML = "Tempreature is " + temp + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".humidity").innerHTML = "Humidity : " + humidity;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".wind").innerHTML = "Wind Speed : " + speed + "km/hr";

    },
    
    search : function () {

        this.fetchWhether(document.querySelector(".search-bar").value);
    }


}

document.querySelector(".search button").addEventListener("click"  , function () {
     whether.search();
})

document.querySelector(".search-bar").addEventListener("keypress" , function (Event) {

     if(Event.key === "Enter"){

         whether.search(); 
     }

})

whether.fetchWhether("pune");