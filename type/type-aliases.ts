// Primitive
type Name = string;

// Tuple
type Data = [number, string]

// Object
type PointX = { x: number }
type PointY = { y: number }

// Union OR - At least one required)
type IncompletePoint = PointX | PointY

// Extends (And - All required)
type Point = PointX & PointY

const pX: PointX = { x: 1 }
const incompletePoint: IncompletePoint = { x: 1 }

//TODO: remove comment Property 'y' is missing in type '{ x: number; }' but required in type 'PointY'."
//const point: Point = {x: 1}

// Array of Jobs
class Job {
    public title: string

    constructor(title: string) {
        this.title = title;
    }
}

type JobCollection = Job[]

const jobs: JobCollection = []
jobs.push(new Job("Software Engineer"))

//TODO:  uncomment thown a error Argument of type 'number' is not assignable to parameter of type 'Job'.
//jobs.push(12)


// Union Type
type Password = string | number

const password1: Password = "1234"
const password2: Password = 1234

// Intersection Type
type PointXY = PointX & PointY

const initialPoint: Point = { x: 0, y: 0 }
//const incompletePoint2: Point = { x: 0 }

// Enum
enum Instrument {
    Guitar,
    Bass,
    Keyboard,
    Drums
}

const instrument = Instrument.Guitar

//instrument = "screwdriver"


// Literal Type
const GenreType: { [index: number]: string } = {
    1: "Rock",
    2: "Pop",
    3: "Jazz"
}

interface GenreProps {
    id: number;
    description: string;
}

class Genre {
    private props: GenreProps

    get id (): number {
        return this.props.id
    }

    get description (): string {
        return this.props.description
    }

    constructor(props: GenreProps) {
        this.props = props
    }
}

function createGenreFromGenreId(id:number): Genre | null {
    if (id < 1 || id > 3) {
        return null
    }
    return new Genre({ id, description: GenreType[id] })
}

console.log(createGenreFromGenreId(1))