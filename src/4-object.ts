/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */

interface Product {
    id: string;
    productName: string;
    price: number;
}
let product1: Product;
let product2: Product;

/**
 * 2. Nested Object
 */

interface ItemDetail {
    year: number;
    storage: number;
}

interface Item {
    id: string;
    productName: string;
    price: number;
    productDetail: ItemDetail;
}

let product4: Item;
product4 = {
    id: 'ID-1',
    productName: 'Macbook Pro',
    price: 20000000,
    productDetail: {
        year: 2023,
        storage: 512,
    },
};

/**
 * 3. Nested, Array of Object
 */

interface Addres {
    street: string;
    city: string;
}

interface User {
    id: string;
    name: string;
    address: Array<Addres>;
}

let user: User = {
    id: 'U-1',
    name: 'Yusup Supriatna',

    address: [
        {
            street: 'Jl. Bandung',
            city: 'Bandung',
        },
        {
            street: 'Jl. Tasikmalaya',
            city: 'Tasikmalaya',
        },
    ],
};

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

/**
 * 4. Nested, Object of Object
 */

interface CartItem {
    id: string;
    name: string;
    qty: number;
}

interface Cart {
    idCart: string;
    dateOrdered: Date;
    items: {
        [key: string]: CartItem;
    };
}

let Keyboard: Cart = {
    idCart: 'C1',
    dateOrdered: new Date('2020-05-20'),
    items: {
        p1: {
            id: 'P-1',
            name: 'Mechanical Keyboard',
            qty: 2,
        },
        p2: {
            id: 'P-2',
            name: 'USB Hub',
            qty: 1,
        },
    },
};

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

/**
 * 5. Object Destructuring
 */

let fullName = {
    firstName: 'Sastra',
    lastName: 'Nababan',
};
// type interface
// let { firstName, lastName } = fullName;

// inline interface
let { firstName, lastName }: { firstName: string; lastName: string } = fullName;

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/
