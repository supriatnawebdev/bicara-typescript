/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance
// class --> Object Instance vs Object Literal

abstract class Root {
    abstract done: boolean;
}

class User extends Root {
    // properties
    id: number;
    firstName: string;
    lastName: string;
    protected save: boolean;
    private token: string;
    static MAX_FAILED_LOGIN = 2;
    private retryLogin = 0;
    done: boolean;

    // method
    login(username: string, password: string) {
        this.retryLogin += 1;
        if (username == 'admin' && password == 'admin') {
            return true;
        }

        if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
            return 'batas login sudah habis';
        }
        return false;
    }
    register() {}

    constructor(id: number, firstName: string, lastName: string) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.save = false;
        this.token = '';
        this.done = false;
    }
}
// memanggil static tanpa inisialisasi
User.MAX_FAILED_LOGIN = 3;
let myUser = new User(1, 'Yusup', 'Supriatna');
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));

// tidak dapat memanggil save di sini

class EnhacementUser extends User {
    location: string;
    constructor(location: string, id: number, firstName: string, lastName: string) {
        // memanggil super constructor User
        super(id, firstName, lastName);
        this.location = location;
        // dapat memanggil save di ini
        this.save;
    }
}

let myNewUser = new EnhacementUser('IDN', 1, 'Yusup', 'Supriatna');
