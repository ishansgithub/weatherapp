
        const apikey="90f47d8d8cc3a4fa747ffe0071882abe";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiurl + city + `&appid=${apikey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".Weather").style.display="none";
            }else{
                var data = await response.json();
                console.log(data);
                document.querySelector(".city").innerHTML=data.name;
                document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
                document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
                document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

                if(data.weather[0].main == "Clouds"){
                weatherIcon.src="clouds.png";
                } else if(data.weather[0].main == "Clear"){
                    weatherIcon.src="clear.png";
                }else if(data.weather[0].main == "Rain"){
                    weatherIcon.src="rain.png";
                }else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src="drizzle.png";
                }else if(data.weather[0].main == "Mist"){
                    weatherIcon.src="mist.png";
                }

                document.querySelector(".Weather").style.display="block";
                document.querySelector(".error").style.display="none";



            }
            

        }

        


        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })

        
