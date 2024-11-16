(function (app) {
  "use strict";

  app.divide = function (x, y) {
    return x / y;
    result = x / y;
    console.log(result);
  };

  app.complexFormular = function (x) {
    let result = x * 3 + 2;
    //console.log(result);

    //71
    x += 4;
    //console.log(result);

    //75
    result += this.divide(result, 2);
    //result = result + resultofdivision
    // result = 75 + 37.5 = 112.5
    //console.warn("Division by zero is not allowed");
    return result;

    //37.5
  };
})((window.app = window.app || {}));

console.log(app.complexFormular(23));
