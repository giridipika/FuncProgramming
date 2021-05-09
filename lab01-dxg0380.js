// Dipika Giri
// 1001440380
// 3/3/2021

//Question 1
var inputtable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //created array
console.log(x = inputtable.toString()); //prints contents of inputtable

//Question 2
//takes elements from inputtable and multiples with respective number.
var fiveTable = inputtable.map(element=>{return element*5}); //array add multible of 5 to each element in fiveTable
console.log(x = fiveTable.toString()); // prints element in fiveTable
var thirteenTable = inputtable.map(element=>{return element*13});
console.log(x = thirteenTable.toString()); // prints element in thirteenTable
var squareTable = inputtable.map(element=>{return element*element});
console.log(x = squareTable.toString()); // prints element in squareTable

//Question 3
function isOdd(num) { return num % 2; } //determines if a value is odd or even
// get odd multiples from the range
function oddMultiples(start, end) {
    var mul = start * 5; // multiples the starting number with 5
    if (mul < end) { // checks if multiplied number exeeds max number
        if (isOdd(mul) == 1) { // checks if it odd
            console.log(mul); // prints odd Multiple
            return oddMultiples(start + 1, end); // incrementes starting number and calls function. 
        }
        else { // if it is even 
            return oddMultiples(start + 1, end); // only increments starting number
        }
    }
    else {
        return; // end function
    }
}
oddMultiples(1, 100);

//Question 4
// similar to previous method used 
function sumEvenMultiples(start, end, sum) {
    var mul = start * 7;
    if (mul < end) {
        if (isOdd(mul) == 0) {
            sumEvenMultiples(start + 1, end, sum + mul); // sum is all the sum from start to end
        }
        else {
            sumEvenMultiples(start + 1, end, sum); // increments start but does not increment sum
        }
    }
    else {
        console.log(sum); // prints sum of even multiples of 7
        return;
    }
}
sumEvenMultiples(1, 100, 0);

//Question 5
var multi = (x, y) => x * x * y;
var cylindVolume = 3.14 * multi(5, 10);
console.log(cylindVolume);

//Question 6
// makeTag function from assignment
makeTag = function(beginTag, endTag){
    return function(textcontent){
        return beginTag+textcontent+endTag;
    }
}
var headerContent = makeTag("\n<th>", "</th>\n")("City") + makeTag("\n<th>", "</th>\n")("Cost") + makeTag("\n<th>", "</th>\n")("Person"); // making header tag
var content1 =  makeTag("\n<td>", "</td>\n")("Paris") + makeTag("\n<td>", "</td>\n")(1000) + makeTag("\n<td>", "</td>\n")("with boyfriend");
var content2 =  makeTag("\n<td>", "</td>\n")("Tokyo") + makeTag("\n<td>", "</td>\n")(1400) + makeTag("\n<td>", "</td>\n")("with sister");
var header = makeTag("\n<tr>\n", "\n</tr>\n")(headerContent); // add header content/elements to header
var row1 = makeTag("\n<tr>\n", "\n</tr>\n")(content1);
var row2 = makeTag("\n<tr>\n", "\n</tr>\n")(content2);

console.log(makeTag("<table>\n", "\n</table>\n")(header + row1 + row2)); // print tags created

//Question 8
sumEvenMultiples(1,30, 0); // sum of even multiples of 7
