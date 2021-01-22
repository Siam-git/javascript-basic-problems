function kilometerToMeter(kilometer) {
    if (kilometer == '') {
        return 'you entered 0. enter more than that.'
    } else if (kilometer < 0) {
        return 'enter positive number';
    } else if (kilometer == null) {
        return 'please input something.'
    } else {
        var meter = kilometer * 1000;
        return meter;
    }
}
console.log(kilometerToMeter(5));


function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalBudget = watchPrice + phonePrice + laptopPrice;

    return totalBudget;
}
console.log(budgetCalculator(10, 5, 2));

function hotelCost(dayToStay) {
    var cost = 0;
    if (dayToStay <= 10) {
        cost = dayToStay * 100
        return cost;
    } else if (dayToStay <= 20) {
        var firstPart = 10 * 100;
        var remainingDays = dayToStay - 10;
        var secondPart = remainingDays * 80;
        cost = firstPart + secondPart;
        return cost;
    } else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remainingDays = dayToStay - 20;
        var thirdPart = remainingDays * 50;
        cost = firstPart + secondPart + thirdPart;
        return cost;
    }
}
console.log(hotelCost(11));


function megaFriend(names) {
    var initialElement = 0;
    var largestName;

    for (var i = 0; i < names.length; i++) {
        if (names[i].length > initialElement) {
            var initialElement = names[i].length;
            largestName = names[i];
        }
    }
    return largestName;
}
var names = ['rox', 'jidan', 'shofiq', 'abdullah'];
console.log(megaFriend(names));