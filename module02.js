/* INTRODUCTION:

Hello, and welcome to my JavaScript tutorial. Here, I will be
demonstrating a few advanced features of JavaScript that set
it apart as a web-oriented, scripting language. Such features
to be demonstrated here will include a few array functions
found in ES6, the use of the Voca library, and recursion.
Everything will be outputted through the terminal. */

//here is where the Voca library will be imported, and saved
//to the variable v
var v = require('voca');

/* ARRAYS:

ES6 was a major update to the JavaScript language that added
several new functions, including revolutionizing the means by
which JavaScript can create, modify, and utilize arrays. An
Array essentially acts as a single variable capable of storing
and altering multiple elements. Here I will be domonstrating
some of those new features. */
console.log("ES6 ARRAY: \n")

//To use the ES6 functions, we first need to declare an array
var arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

//In JavaScript, at least with Node.js writing, print
//statements work essentially like the line below
console.log("Starting array: ")

//now we will simply output our array
console.log(arr);

//find() will iterate through the array and output the first
//item it finds that fulfills the specified criteria
var check1 = arr.find(function (element)
    {
        return element < 0;
    }
);
console.log("Less than 0: ", check1);
var check2 = arr.find(function (element)
    {
        return element > 0;
    }
);
console.log("Greater than 0: ", check2);
//notice what it chooses to output; it iterates through the
//array in a linear fashion from beginning to end


//every() will check the array and output true or false
//depending on whether all elements the specified criteria
function check3(element)
{
    return element >= -5;
}
var yes = arr.every(check3);
console.log("Is everything greater than or equal to -5?: ", yes);

function check4(element)
{
    return element > 0;
}
var no = arr.every(check4);
console.log("Is everything greater than 0?: ", no);

//reverse() will rearrange the array so that all elements
//are listed backwards from their original listing
console.log("Reversed array: ")
console.log(arr.reverse());

//pop() will remove the final element from the array and
//output said element
console.log("Variable removed with pop(): ", arr.pop());

//now we will reprint the whole array but without the
//element removed by pop()
console.log("New array: ");
console.log(arr, "\n");


/* THE VOCA LIBRARY:

Earlier, we established that we would import Voca. Here is where
we will be seeing its uses in action. Voca is a JavaScript library
that adds several new functions geared towards string manipulation.
These willl give users more options for creating and altering strings
than just what's included in vanilla JavaScript. It can be installed
by typing "npm install voca" in the terminal. If done correctly, you
should have two new packages in the same folder that you have open,
along with another new folder filled with Voca's modules. */
console.log("\nVOCA: \n");

//Trim will remove any unnecessary spaces at the beginning and end
//of your string
console.log("Trim:       ", v.trim('    I am Iron Man    '));

//upperCase will capitalize all letters in the string
console.log("Uppercase:  ", v.upperCase("your'e winner!"));

//camel case will remove all spaces and capitalize the first letter
//of all words except the first
console.log("Camel case: ", v.camelCase("how programmers in c type their variables"));

//kebab case and slugify are essentially the same thing. All spaces
//within the string will be replaced by hyphens
console.log("Slugify:    ", v.slugify("My name is Jeff?"));
console.log("Kebab case: ", v.kebabCase("Same as Slugify?"));

//s print f will appropriately rearrange each word in your string
//according to a built in format
console.log("S print f:  ", v.sprintf("%d big %s", 4, "guys"));
//you can even add special characters with specific syntax
console.log("S print f:  ", v.sprintf("%s costs $%.2f", "A 12-pack of Mountain Dew", 4.5))
//also make certain words repeat
console.log("S print f:  ", v.sprintf("%1$s %2$s %3$s %2$s", "Oh",  "Captain", "My"), "\n");
//there are many more uses for sprintf within voca. Feel free to
//look them up and experiment


/* RECURSION:

In general programming, recursion referrs to the process of a
function calling itself any number of times. Here, I will
demonstrate a recursive function within JavaScript */
console.log("\nRECURSION: \n");

//I will use recursion to create a countdown timer. While it
//is possible to make the outputting of each number be exactly
//one second apart, such a feature requires advanced forms of
//parallelism and concurrency that will not be shown here.
function timer(time)
{
    console.log(time);
    const next = time - 1;
    if (next >= 0)
    {
        timer(next);
    } 
}

//now we will call our timer with the starting time as the parameter
console.log("Ten Second Timer: ");
timer(10);

//unlike a for loop, where one will likely have to rewrite the
//entire for loop over and over with slight changes, this recursive
//function can very easily and simply be called again and again
console.log("Five Second Timer: ");
timer(5);
console.log("Thirty second Timer: ");
timer (30);