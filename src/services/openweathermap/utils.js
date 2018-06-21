export const buildApiUrl = token => 
    cityName => 
            unit => `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${token}&units=${unit}`;

export const buildIconUrl = icon => 
    `http://openweathermap.org/img/w/${icon}.png`;