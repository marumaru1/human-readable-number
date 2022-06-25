module.exports = function toReadable(number) {


    let oneToTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty','ninety'];

    var final =number.toString();
    
    if (number < 0) throw new Error('Error');
    if (number === 0) return 'zero';
    // 1 - 20
    if (number < 20) {
        return oneToTwenty[number];
    }


    if (final.length === 2) {
        return (tenth[final[0]] + ' ' + oneToTwenty[final[1]]).trim();
    }
    
    //100
    if (final.length == 3) {
        if (final[1] === '0' && final[2] === '0')
            return oneToTwenty[final[0]] + ' hundred';
        else
            return oneToTwenty[final[0]] + ' hundred ' + toReadable(+(final[1] + final[2]));
    }

    if (final.length === 4) {
        var end = +(final[1] + final[2] + final[3]);
        if (end === 0) return oneToTwenty[final[0]] + ' thousand';
        if (end < 100) return oneToTwenty[final[0]] + ' thousand ' + toReadable(end);
        return oneToTwenty[final[0]] + ' thousand' + toReadable(end);
    }
}
