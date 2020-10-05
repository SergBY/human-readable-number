module.exports = function toReadable (number) {
    let toNineteen = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    let toHundred = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };
  
    if (number === 0) return'zero';
    if (number < 20 && number > 0) return toNineteen[number];
    let str = number.toString();
  
    if (number <= 99 && number >= 20) {
        if (number % 10 === 0) return toHundred[number];
        else return toHundred[str[0] * 10] + ' ' + toNineteen[str[1]]; 
    }
  
    if (number <= 999 && number >= 100) {
      if (number % 100 === 0) return toNineteen[str[0]] + ' ' + 'hundred';
      else if (str[1] === '0') return toNineteen[str[0]] + ' ' + 'hundred' + ' ' + toNineteen[str[2]];
      else if (str[1] === '1') return toNineteen[str[0]] + ' ' + 'hundred' + ' ' + toNineteen[parseInt(str[2])+10];
      else if (number % 10 === 0) return toNineteen[str[0]] + ' ' + 'hundred' + ' ' + toHundred[str[1] * 10];
      else return toNineteen[str[0]] + ' ' + 'hundred' + ' ' + toHundred[str[1] * 10] + ' ' + toNineteen[str[2]]; 
  }
};