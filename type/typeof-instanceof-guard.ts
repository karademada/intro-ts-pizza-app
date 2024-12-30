// TypeOf
function example(x: number | boolean) {
    if (typeof x === "number") {
       return x.toFixed(2)
    }
    // return x.toFixed(2) uncomment Property 'toFixed' does not exist on type 'boolean'.
}

console.log(example(2))

// InstanceOf 
class MyResponse {
    public header = 'header example';
    public result = 'result example';

    constructor(header: string, result: string){
        this.header = header
        this.result = result
    }
}

class MyError {
    public header = 'header example';
    public message = 'result example';

    constructor(header: string, message: string) {
        this.header = header
        this.message = message
    }
}

function exampleInstance(x: MyResponse | MyError) {
    if (x instanceof MyResponse) {
       // console.log(x.message) // Error! Property 'message' does not exist on type 'MyResponse'
        console.log(x.result) // Okay
    } else {
        // Typescript knows this be MyError 
        console.log(x.message) // Okay
        // console.log(x.result) // Error! Property 'result' does not exist on type 'MyError'
    }
}

// In Guard
interface PersonGuard {
    name: string;
    age: number;
}

const personInstance: PersonGuard = {
    name: 'John',
    age: 28
}

const checkForName = 'name' in personInstance // true
console.log(checkForName)