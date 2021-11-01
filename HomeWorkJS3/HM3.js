//1. Write a JavaScript function to get the last element of an array
let Alphabet = ['a','b','c'];
let last = Alphabet.pop();
    console.log(last);


//2. Write a simple JavaScript program to join all elements of the following array into a string

let Alphabet = ['a','b','c'];
    console.log(Alphabet.join(";"));

//3. There are two arrays with individual values, write a JavaScript program to compute the
//sum of each individual index value from the given arrays and save them to third array

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let sum = array1.map(function (num, idx) {
    return num + array2[idx];
});
    console.log(sum);

//4. Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle
//should be an object with properties width and height and methods getArea() and
//getPerimeter();

let rectangle = {
    Width: 3,
    Height: 4,
    getArea()  {return this.Width * this.Height;},
    getPerimeter () {return this.Width * 2 + this.Height * 2;}
};


console.log ("Area: " + rectangle.getArea());
console.log ("Perimeter: " + rectangle.getPerimeter());