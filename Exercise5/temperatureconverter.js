//Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
}

//Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius.toFixed(2)}°C`);
}

// Example usage
const celsiusTemperature = 23;
const fahrenheitTemperature = 42;

celsiusToFahrenheit(celsiusTemperature);
fahrenheitToCelsius(fahrenheitTemperature);
