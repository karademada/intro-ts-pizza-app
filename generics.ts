const gameScores = [14,21,3,45,56]
const favoriteThings = ["pizza", "chocolate", "ice cream"]
const voters = [{name: "Bob", age: 32}, {name: "Alice", age: 28}]

/* function getLastItem<T>(array: T[]){
    return array[array.length - 1]
} */

const getLastItem = <T>(array: T[]): T | undefined => array[array.length - 1]

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))


interface Queue<T> {
    data: T[];
    push: (t: T) => void;
    pop: () => T | undefined;
}

interface Monkey {
    name: string
    color: string
}

class MonkeyQueue implements Queue<Monkey> {
    data: Monkey[];

    constructor(){
        this.data= []
    }

    push (t: Monkey) : void {
        this.data.push(t)
    }

    pop () : Monkey | undefined {
        return this.data.shift()
    }
}


const myMonkey = new MonkeyQueue()
myMonkey.push({
    name: 'bibi',
    color: 'blueu'
})
console.log(myMonkey.data)

/* myMonkey.pop()
console.log(myMonkey.data) */