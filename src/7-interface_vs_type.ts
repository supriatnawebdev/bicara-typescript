/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Object
 */

// use -> name, age
interface User {
    name: string;
    age: number;
}
type TypeUser = {
    name: string;
    age: number;
};

/**
 * Merge
 */

interface Song {
    songName: string;
}
interface Song {
    artisName: string;
}

const mySong: Song = {
    artisName: 'Nella Kharisma',
    songName: 'Jaran Goyang',
};

/**
 * Intersection & Union
 */

type typeA = {
    id: number;
    propA: string;
};
type typeB = {
    id: number;
    propB: string;
    propC?: string;
};

// interection 1
type IntersectionAB = typeA & typeB;

// union
type UnionAB = typeA | typeB;

let myDataIntersection: IntersectionAB = {
    id: 1,
    propA: 'testA',
    propB: 'testB',
    // propC: 'testC' opsional karena memakai tanda ?
};

let myDataUnion: UnionAB = {
    id: 1,
    propB: 'testB',
    // propC: 'testC' opsional karena memakai tanda ?
};

/**
 * Implements
 */

// type Person = {
//     name: string;
//     age: number;
//     getName(id: number, name: string): string;
// }

interface Addres {
    street: string;
}

interface Person extends Addres {
    name: string;
    age: number;
    street: string;
    getName(id: number, name: string): string;
}

class People implements Person {
    name: string;
    age: number;
    street: string;

    constructor(name: string, age: number, street: string) {
        this.name = name;
        this.age = age;
        this.street = '';
    }

    getName(id: number, name: string): string {
        return 'OK';
    }
}

/**
 * Extend
 */
