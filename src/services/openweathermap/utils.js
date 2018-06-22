export const buildApiUrl = (token, unit) => {

    unit = unit ? `&unit=${unit}` : '';

    return cityName => 
            `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}${unit}&appid=${token}`;
}

export const buildIconUrl = icon => 
    `http://openweathermap.org/img/w/${icon}.png`;