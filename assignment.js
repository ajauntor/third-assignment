
// 1. Kilometer to meter converter
function kilometerToMeter(Kilometer) {

    var meter = 0;

    if (Kilometer < 0) {
        return "input positive value";
    }
    else {
        meter = Kilometer * 1000;
        return meter;
    }

}
var result = kilometerToMeter(4);
console.log(result);


// 2. Budget calculator converter
