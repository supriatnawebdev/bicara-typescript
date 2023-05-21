/* eslint-disable prefer-const */
// type inference(Implicit)
let ti = 'hello';

// type annotation(Explicit)
// eslint-disable-next-line prefer-const
let ta: string = 'hello ts';

/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/

let a; // undefined
let b: boolean;
b = true; // boolean

let c: number;
c = 1; // number

let d: string;
d = 'hello'; // string

let e: bigint;
e = 100n; // big int (starting ES2020)

let f: symbol;
f = Symbol('Sym'); // symbol  (starting ES2015)

let g: () => void;
g = function () {
    return null;
};

let h: null;
h = null; // null ( special primitive )

let i: {}; // Record<string, unknown>; // Object Literal
i = {};

let j: []; // array
j = [];

class Product {
    // class
    //...
}
let k = new Product();

let z: any;
z = 123;
z = 'hello';
z = [1, 2, 3];

/********** Why is it call dynamic type / weekly typed ? ***********/

// 1. No Declaration. Type automatically set based on value at runtime
// 2. Re-Assign
// 3. with dynamic type comes great responsiblity

function sum(a: number, b: number): number {
    return a + b;
}

let arg1 = 2;
let arg2 = 3;
let result = sum(arg1, arg2);
console.log(result);

// union
let multi: string | number;
multi = 'hello';
multi = 123;

// aliases
type CustomType = string | number;
let myType: CustomType;
myType = 'Hello';
myType = 123;
