/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x: number, y: number, z?: number): number {
    return x + y;
}

console.log(add(1, 2));

// function expression
const addEx = function (x: number, y: number): number {
    return x + y;
};

// arrow function
const addArrow = (x: number, y: number): number => x + y;

// function with no return value
// const hello = (name) => console.log("hello " + name)

// membuat aliases function
type Greeter = (message: string) => void;
// function with callback
function request(url: string, cb: Greeter) {
    cb(url);
}
// memanggil function request
let fn = (str: string) => console.log(str);
request('https://betterprogramming.pub/', fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

// membuat function dengan return object
type Contact = {
    firstName: string;
    lastName: string;
    gender?: string;
    language: string;
};

function submitContact(firstName: string, lastName: string, language = 'english', gender?: string): Contact {
    return {
        firstName: firstName,
        lastName: lastName,
        language,
        ...(gender && { gender }),
    };
}

let result = submitContact('valen', 'mayer', 'female');
console.log(result);

/*
function submitContact(firstName, lastName, languange, gender){
  return {
    firstName,
    lastName
    languange
  }
}
*/

/********** 3. Rest Parameter  ***********/

// menmbah tipedata union di function rest parameter
function fruitsCollection(item: string, ...restItems: (string | number)[]) {
    return item + ' ' + restItems.join(' ');
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 1);
// console.log(fruits);

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/

// solution 1 : memakai tipe data union

function CT(param: string | number): string | number {
    return param;
}

// solution 2 : menggunakan generic
// type variale -> deteki type data dari caller
function CT_generic<T>(param: T): T {
    return param;
}

CT_generic<string>('hello');
CT_generic<number>(1);

//  solution 3: overloading
function CT_Overload(param: string): string;
function CT_Overload(param: number): number;
function CT_Overload(param: boolean): boolean;
function CT_Overload(param: any): any {
    return param;
}

CT_Overload('hello');
CT_Overload(123);
CT_Overload(true);
