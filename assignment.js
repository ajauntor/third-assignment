
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
function budgetCalculator(watch, phone, laptop) {
    var totalPrice = 0;
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Price cannot be negative";
    }
    else {
        totalPrice = (watch * 50) + (phone * 100) + (laptop * 500);
        return totalPrice;
    }
}
var result = budgetCalculator(2, 2, 2);
console.log(result);

// 3.Hotel cost converter
function hotelCost(day){
    var allCost = 0;
    if (day <= 10) {
        allCost = day * 100;
    } else if (day <= 20) {
        var firstTenDay = 10 * 100;
       var remainDay = day - 10;
        var secondTenDay = remainDay * 80;
        allCost = firstTenDay + secondTenDay;
    } else {
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var remainDay = day - 20;
        var thirdTenDay = remainDay * 50;
        allCost = firstTenDay + secondTenDay + thirdTenDay;
    }
    return allCost;
}
var result = hotelCost(22);
console.log(result);

