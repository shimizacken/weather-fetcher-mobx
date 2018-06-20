export const buildApiUrl = token => 
    cityName => `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${token}`;

export const buildIconUrl = iocn => 
    `http://openweathermap.org/img/w/${iocn}.png`;