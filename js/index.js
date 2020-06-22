//////// Weight part ////////

var domKg = document.getElementById("kg");
var domPound = document.getElementById("pound");
var domGram = document.getElementById("gram");
var domOunce = document.getElementById("ounce");

function weightKg(val){
    domPound.value = (val * 2.20462).toFixed(4);    
    domGram.value = (val * 1000).toFixed(4);
    domOunce.value = (val * 35.274).toFixed(4);
    
}
function weightPound(val){
    domKg.value = (val * 0.4535970244035199).toFixed(4);    
    domGram.value = (val * 453.5970244035199).toFixed(4);
    domOunce.value = (val * 16).toFixed(4);
}
function weightGram(val){
    domKg.value = (val * 0.001).toFixed(4);    
    domPound.value = (val * 0.00220462).toFixed(4);
    domOunce.value = (val * 0.035274).toFixed(4);
}
function weightOunce(val){
    domKg.value = (val * 0.0283495).toFixed(4);    
    domPound.value = (val * 0.0625).toFixed(4);
    domGram.value = (val * 28.3495).toFixed(4);
}


//////// Temperature part ////////

var domCelsius = document.getElementById("celsius");
var domFahrenheit = document.getElementById("fahrenheit");
var domKelvin = document.getElementById("kelvin");


function temperatureCelsius(val){
    domFahrenheit.value = ((val * 9 / 5) + 32).toFixed(4);    
    domKelvin.value = ((val * 1) + 273.15).toFixed(2);
}
function temperatureFahrenheit(val){    
    domCelsius.value = ((val - 32) * (5 / 9)).toFixed(4);    
    domKelvin.value = ((val - 32) * (5 / 9) + 273.15).toFixed(4);
}
function temperatureKelvin(val){
    domCelsius.value = (val - 273.15).toFixed(4);  
    domFahrenheit.value = ((val - 273.15) * (9 / 5) + 32).toFixed(4);
}


//////// Length part ////////

var domFeet = document.getElementById("feet");
var domMeter = document.getElementById("meters");
var domInches = document.getElementById("inches");
var domCm = document.getElementById("cm");
var domYard = document.getElementById("yards");
var domKilometer = document.getElementById("kilometers");
var domMile = document.getElementById("miles");


function lengthFeet(val){
    domMeter.value = (val * 0.3048).toFixed(4);
    domInches.value = (val * 12).toFixed(4);
    domCm.value = (val * 30.48).toFixed(4);
    domYard.value = (val * 0.333333).toFixed(4);
    domKilometer.value = (val * 0.0003048).toFixed(4);
    domMile.value = (val * 0.000189394).toFixed(4);
}
function lengthMeter(val){
    domFeet.value = (val * 3.28084).toFixed(4);
    domInches.value = (val * 39.3701).toFixed(4);
    domCm.value = (val * 100).toFixed(4);
    domYard.value = (val * 1.09361).toFixed(4);
    domKilometer.value = (val * 0.001).toFixed(4);
    domMile.value = (val * 0.000621371).toFixed(4);
}
function lengthInches(val){
    domFeet.value = (val * 0.0833333).toFixed(4);
    domMeter.value = (val * 0.0254).toFixed(4);
    domCm.value = (val * 2.54).toFixed(4);
    domYard.value = (val * 0.0277778).toFixed(4);
    domKilometer.value = (val * 0.0000254).toFixed(6);
    domMile.value = (val * 0.000015783).toFixed(6);
}
function lengthCm(val){
    domFeet.value = (val * 0.0328084).toFixed(4);
    domMeter.value = (val * 0.01).toFixed(4);
    domInches.value = (val * 0.393701).toFixed(4);
    domYard.value = (val * 0.01093613888889).toFixed(4);
    domKilometer.value = (val * 0.00001).toFixed(7);
    domMile.value = (val * 0.0000062137).toFixed(8);
}
function lengthYard(val){
    domFeet.value = (val * 3).toFixed(4);
    domMeter.value = (val * 0.9144).toFixed(4);
    domInches.value = (val * 36).toFixed(4);
    domCm.value = (val * 91.44).toFixed(4);
    domKilometer.value = (val * 0.0009144).toFixed(7);
    domMile.value = (val * 0.000568182).toFixed(8);
}
function lengthKilometer(val){
    domFeet.value = (val * 3280.84).toFixed(4);
    domMeter.value = (val * 1000).toFixed(4);
    domInches.value = (val * 39370.1).toFixed(4);
    domCm.value = (val * 100000).toFixed(4);
    domYard.value = (val * 1093.61).toFixed(7);
    domMile.value = (val * 0.621371).toFixed(8);
}
function lengthMile(val){
    domFeet.value = (val * 5280).toFixed(4);
    domMeter.value = (val * 1609.34).toFixed(4);
    domInches.value = (val * 63360).toFixed(4);
    domCm.value = (val * 160934).toFixed(4);
    domYard.value = (val * 1760).toFixed(7);
    domKilometer.value = (val * 1.60934).toFixed(8);
}