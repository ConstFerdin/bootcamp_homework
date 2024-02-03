//circumference of a circle
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}

//area of a circle
function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area.toFixed(2)}`);
}

// Example
 radius1 = 3;
 radius2 = 6;

calcCircumference(radius1);
calcArea(radius1);

calcCircumference(radius2);
calcArea(radius2);
