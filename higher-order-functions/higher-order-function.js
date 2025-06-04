function fiftyToHundred(oneToFifty) {
    oneToFifty();
    for (var i = 50; i <= 100; i++) {
        console.log(i);
    }
}
function oneToFifty() {
    for (var i = 1; i < 50; i++) {
        console.log(i);
    }
}
fiftyToHundred(oneToFifty);
