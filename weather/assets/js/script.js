const API_KEY = "8292754759942b51eef3f41579df97d8";
const city = "London"

$(function () {
    const API_KEY = "8292754759942b51eef3f41579df97d8";
    let city = "";
    $("input[type=button]").on("click", function () {
        city = $("input[name=search]").val();
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`).then(response => {
            return response.json()
        }).then(data => {
            $('.now').html(`
                        <h3>${data.city.name} (${data.list[0].dt_txt}) <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png"></h3>
                        <p>
                            Temp: ${data.list[0].main.temp} ℉
                        </p>
                        <p>
                            Wind: ${data.list[0].wind.speed} MPH
                        </p>
                        <p>
                            Humidity: ${data.list[0].main.humidity} %
                        </p>    
            `);

            $('.future').empty();
            data.list.forEach(info => {
                if (info.dt_txt.includes('12:00:00')) {
                    $('.future').append(`
                        <div class="col">
                            <div class="card bg-dark text-light">
                                <div class="card-body">
                                    <h3>${info.dt_txt}</h3>
                                    <img src="http://openweathermap.org/img/wn/${info.weather[0].icon}.png" width="20">
                                    <p>
                                        Temp: ${info.main.temp} ℉
                                    </p>
                                    <p>
                                        Wind: ${info.wind.speed} MPH    
                                    </p>
                                    <p>
                                        Humidity: ${data.list[0].main.humidity} %
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                            `);
                            
                }
            });

        });
    })
    $("button").on('click', function () {

        city = $(this).val();

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`).then(response => {
            return response.json()
        }).then(data => {
            $('.now').html(`
                        <h3>${data.city.name} (${data.list[0].dt_txt}) <img src="http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png"></h3>
                        <p>
                            Temp: ${data.list[0].main.temp} ℉
                        </p>
                        <p>
                            Wind: ${data.list[0].wind.speed} MPH
                        </p>
                        <p>
                            Humidity: ${data.list[0].main.humidity} %
                        </p>    
            `);

            $('.future').empty();
            data.list.forEach(info => {
                if (info.dt_txt.includes('12:00:00')) {
                    $('.future').append(`
                        <div class="col">
                            <div class="card bg-dark text-light">
                                <div class="card-body">
                                    <h3>${info.dt_txt}</h3>
                                    <img src="http://openweathermap.org/img/wn/${info.weather[0].icon}.png" width="20">
                                    <p>
                                        Temp: ${info.main.temp} ℉
                                    </p>
                                    <p>
                                        Wind: ${info.wind.speed} MPH    
                                    </p>
                                    <p>
                                        Humidity: ${data.list[0].main.humidity} %
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                            `);
                            
                }
            });

        });
    });
});
