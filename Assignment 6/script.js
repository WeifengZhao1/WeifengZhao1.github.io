// Part A
console.log('Part A')

const tipCalculator = (val) => {
    // var tip = 0.15;
    // if (val >= 30 && val <= 100) {
    //     var tip = 0.15 * val;
    //     var total = tip + val;
    //     console.log('The bill value is ' + val, ' the tip is ' + tip + ' The final value would be ' + total)
    // }
    // else {
    //     var tip = 0.20 * val;
    //     var total = tip + val;
    //     console.log('The bill value is ' + val, ' the tip is ' + tip + ' The final value would be ' + total)
    // }

    switch(val > 0 ) {
        case val >= 30 && val <= 100 :
            var tip = 0.15 * val;
            var total = tip + val;
            console.log('The bill value is ' + val, ' the tip is ' + tip + ' The final value would be ' + total)
            break;
    
        case val < 30 || val > 100:
            var tip = 0.20 * val;
            var total = tip + val;
            console.log('The bill value is ' + val, ' the tip is ' + tip + ' The final value would be ' + total);
            break;

        default:
            console.log('bill must be greater than 0');
            break;
     }
}


tipCalculator(285)
tipCalculator(26)
tipCalculator(90)

console.log(" ")


// Part B
console.log('Part B')

const CovertCelsiusToFahrenheit = (val) => {
    if (val >= -89.3 && val <= 56.7) {
        const Fahrenheit = val * 1.8 + 32;
        console.log(val + '°C is ' + Fahrenheit + '°F.')
    }
}

const CovertFahrenheitToCelsius = (val) => {
    if (val >= -128.74 && val <= 134.06) {
        const Celsisu = (val - 32) * 5 / 9;
        console.log(val + '°F is ' + Celsisu + '°C.')
    }
}


CovertCelsiusToFahrenheit(100);
CovertCelsiusToFahrenheit(0);
CovertCelsiusToFahrenheit(10);


console.log(' ');

CovertFahrenheitToCelsius(32)
CovertFahrenheitToCelsius(10)
CovertFahrenheitToCelsius(102)


// Part C
const openModal = () => {
    const modalWindow = document.getElementById("modal-window");
    modalWindow.style.display = "flex";
}


const closeModal = () => {
    const modalWindow = document.getElementById("modal-window");
    modalWindow.style.display = "none";
}
