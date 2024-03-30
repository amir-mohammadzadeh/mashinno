export const usePersianNumbers = (number) => {
    const persian = {
        0: "۰",
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
    };
    number = number.toString().split("");
    let persianNumber = "";
    
    number.forEach(num => {
        if (Number(num) || num == 0){
            let x = persian[num]
            persianNumber += x
        } else{
            persianNumber += num
        }
    });
    return persianNumber;
}

export const useSeparate = (number,symbol =',') => {
    number += '';
    number = number.replace(',', '');
    let x = number.split('.');
    let y = x[0];
    let z = x.length > 1 ? '.' + x[1] : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + symbol + '$2');
    const result = usePersianNumbers(y + z)
    return result ;
}



/* 
function convertEnNumberToPersian(number) {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  number = number.toString().split("");
  let persianNumber = "";
  for (let i = 0; i < number.length; i++) {
    number[i] = persian[number[i]];
  }
  for (let i = 0; i < number.length; i++) {
    persianNumber += number[i];
  }
  return persianNumber;
};

*/