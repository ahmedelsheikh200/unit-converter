const temperature = {
    Celsius: {
        toBase: value => value,
        fromBase: value => value
    },
    Fahrenheit: {
        toBase: value => (value - 32) * 5 / 9,
        fromBase: value => value * 9 / 5 + 32
    },
    Kelvin: {
        toBase: value => value - 273.15,
        fromBase: value => value + 273.15
    }
};

exports.convertTemperature =(value, from, to) =>{
    //console.log(temperature[from])
    const baseValue = temperature[from].toBase(value);   // Convert to Celsius
    return temperature[to].fromBase(baseValue);          // Convert from Celsius
}

