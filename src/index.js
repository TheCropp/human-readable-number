module.exports = function toReadable (number) {
    let a1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let a2 = ['hundred', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];

    // числа от 1 до 19
    if (number >= 0 && number < 20) {
        return a1[number];
    }

    // числа от 20 до 99
    if (number >= 20 && number < 100) {
        let k1 = Math.floor(number / 10);
        if (number % 10 != 0) {
            return `${a2[k1]} ${a1[number % 10]}`;
        }
        else {
            return a2[k1];
        }
    }
    //числа от 100 до 999
    else if (number > 99 && number < 1000) {
        let k1 = Math.floor(number / 100);
        let k2 = Math.floor(number % 100 / 10);
        let k3 = number % 10;

        if (k2 != 0 && k3 != 0) {
            if (k2 == 1) {
                return `${a1[k1]} ${a2[0]} ${a1[[k3 + 10]]}`;
            }
            else {
                return `${a1[k1]} ${a2[0]} ${a2[k2]} ${a1[k3]}`;
            };
        };
        if (k2 == 0 && k3 != 0) { return `${a1[k1]} ${a2[0]} ${a1[k3]}` };
        if (k2 != 0 && k3 == 0) { return `${a1[k1]} ${a2[0]} ${a2[k2]}` };
        if (k2 == 0 && k3 == 0) { return `${a1[k1]} ${a2[0]}` };
    }
}
