export function sum(a: number, b: number) {
    return a + b
}


//////////////
type ActionType = {type: 'sum' | 'mult' | 'sub' | 'div'}

export function calk(a: number, b: number, action: ActionType) {
    switch (action.type) {
        case "sum":
            return a + b;
        case "sub":
            return a - b;
        case "mult":
            return a * b;
        case "div":
            return a / b;
        default: return new Error("Incorrect")
    }
}

type StudentType = {
    name: string
    isStudent: boolean
    friends?: Array<string>
}

export const addFriends = (students: Array<StudentType>): Array<StudentType> => {
    return students.map((st) =>( {
        ...st,
        friends: students.map(s => s.name).filter(name => name !== st.name)
    }))
}