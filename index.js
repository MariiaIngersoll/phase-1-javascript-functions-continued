function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
  };

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
activity();

function wrapAdjective(symbol = "*") {
     return function msg(adj= "special") {
        return `You are ${symbol}${adj}${symbol}!`
     };
}
wrapAdjective('*') ("a dedicated programmer");
