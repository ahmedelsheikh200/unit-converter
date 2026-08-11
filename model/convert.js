const console = require("node:console");

const units = {
    length: {

        factors: {
            millimeter: 0.001,
            centimeter: 0.01,
            meter: 1,
            kilometer: 1000,
            inch: 0.0254,
            foot: 0.3048,
            yard: 0.9144,
            mile: 1609.344
        }
    },

    weight: {
        base: "gram",
        factors: {
            milligram: 0.001,
            gram: 1,
            kilogram: 1000,
            pound: 453.59237,
            ounce: 28.3495
        }
    }
};


exports.convertLength=(value, from, to)=> {
    const meters = value * units.length.factors[from];

    return (meters / units.length.factors[to]).toFixed(2);
}

exports.convertWeight=(value, from, to)=> {
    const grams = value * units.weight.factors[from];
    return (grams / units.weight.factors[to]).toFixed(2);
}

