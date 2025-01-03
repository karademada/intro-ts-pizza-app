// Type assertions
const friend = {}

//TODO: remove comment a error name doesn't exist
//friend.name = 'John';

interface Comedian {
    name: string;
    age: number;
}
const george =  {} as Comedian;
george.name = 'John'


// type, class, interface
/* type CreateUserRequestDTO = {
    userId: string;
    email: string;
    password: string;
} */

/* interface CreateUserRequestDTO {
    userId: string;
    email: string;
    password: string;
} */

class CreateUserRequestDTO {
    public userId: string;
    public email: string;
    public password: string;

    constructor(userId: string, email: string, password: string) {
        this.userId = userId;
        this.email = email;
        this.password = password;
    }
}

import { User } from "../user";
function createUser(request: CreateUserRequestDTO): User {
    return {
        id: 1,
        username: request.email,
        role: 'member'
    }
}

const actor = createUser(new CreateUserRequestDTO('1', 'toto@to.to', 'password'));
console.log(actor);

