const app = require("../app");

it("should multiply two numbers", function(){

    let expectedResult = 15;
    let result = app.multiply(3, 5);
    if(result!==expectedResult){
        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});