let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let city = prompt("Enter a city");
city = city.toLowerCase();
let temperature = Math.round(weather[city].temp);
let humidity = weather[city].humidity;
if (
  city === "paris" ||
  city === "tokyo" ||
  city === "lisbon" ||
  city === "san francisco" ||
  city === "oslo"
) {
  alert(
    `It is currently ${temperature}°C in ${city} , with a humidity of ${humidity}%`
  );
} else {
  alert("Sorry, we don't know the weather of this city");
}
city = city.trim();
