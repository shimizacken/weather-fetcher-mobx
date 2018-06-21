export const buildApiUrl = token => 
    cityName => `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${token}`;

export const buildIconUrl = icon => 
    `http://openweathermap.org/img/w/${icon}.png`;